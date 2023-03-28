// Multipurpose embeddable Minesweeper game on top of vuesweeper

// How many pixels one square takes up
var MineSquareSize = 32;

var Notices = {
	NoticeLocked: "<i><big>Ops!</big> Questo contenuto è bloccato. Completa una partita a Minesweeper per accedervi.</i> <big>🙃️</big>",
	AlertLockedWon: "Hai vinto! Goditi il contenuto sbloccato. 💖️",
	AlertLockedLost: "Ops! Hai perso! Ritenta. 🙃️",
	AlertLockedEgg: "Hai scoperto l'easter egg e hai saltato la partita. Mah. 🙄️",
	AlertLockedResize: "Non si imbroglia ridimensionando la finestra!!! Il gioco verrà ora resettato. Non riceverai ulteriori avvisi. 😈️",
};

var WindowWidth;
var ResizeAlerted = false;

// Add styles to current page
var New = document.createElement('style');
New.innerHTML = `
/* Don't know what's up with the percentages */
.Minesweeper {
	width: calc(100% - 5% - 1.25%);
	z-index: 4;
}
.Minesweeper > iframe {
	max-height: none !important;
	border: none;
}
.Minesweeper.Locker {
	position: absolute;
}
`;
document.body.appendChild(New);

// Setup all Minesweeper boards on the page
document.querySelectorAll('.Minesweeper').forEach(function(Container){
	// Prevent excessive flickering when page is still loading
	Container.style.display = 'none';

	var Frame = document.createElement('iframe');
	Frame.src = '/vuesweeper-core/';
	Container.appendChild(Frame);
	var GameWindow = Frame.contentWindow;
	var Game, GameState;
	var DoContentUnlock;

	function GetGameSecs(Game) {
		var Vals = Game.state._value;
		var Ms = `${Vals.endMS - Vals.startMS}`;
		var Time = Math.round(`${Ms.slice(0, -3)}.${Ms.slice(-3)}`);
		return Time;
	};

	window.addEventListener('load', function(){
		WindowWidth = window.innerWidth;
		Container.style.display = '';
		Game = GameWindow.vuesweeper;
		var [Width, Height, Bombs] = [15, 15, 36];

		function SetupLockGame() {
			// Reset styles and remove locker elements
			DoContentUnlock = function DoContentUnlock() {
				LockedEl.style['margin-top'] = '';
				LockedEl.style['margin-bottom'] = '';
				NoticeEl.remove();
				Container.remove();
			};

			// Element of content to lock must be an immediately succeding sibiling of the game container
			var LockedEl = Container.nextElementSibling;
			LockedEl.style.visibility = '';

			// Add notice to the user saying to win a game to see the content underneath
			// TODO: Maybe put it instead of the iframe, with a button, and when the user clicks that the iframe is set up?
			var NoticeEl = document.createElement('p');
			NoticeEl.className = 'Minesweeper-Locker-Notice';
			NoticeEl.innerHTML = Notices.NoticeLocked;
			Container.before(NoticeEl);

			var NoticeClicked = 0;
			NoticeEl.onclick = function(){
				NoticeClicked += 1;
				if (NoticeClicked >= (Game.mines / 2)) {
					alert(Notices.AlertLockedEgg);
					DoContentUnlock();
				};
			};

			// Set game window to size of content, adding needed paddings to window and content
			var FromStyle = getComputedStyle(LockedEl);
			var Margin = MineSquareSize * 2;
			// LR padding to prevent content spilling
			LockedEl.style['padding-left'] = `${~~FromStyle['padding-left'].split('px')[0] + 16}px`;
			LockedEl.style['padding-right'] = `${~~FromStyle['padding-right'].split('px')[0] + 16}px`;
			// Ensure game is tall enough and doesn't cover more than needed content
			Frame.style.height = `${~~FromStyle.height.split('px')[0] + (MineSquareSize * 3.5)}px`;
			LockedEl.style['margin-top'] = `${Margin}px`;
			LockedEl.style['margin-bottom'] = `${Margin}px`;

			// Set important color/transparency styles
			var UnlockStyle = GameWindow.document.getElementById('GameStyle-Locker');
			if (!UnlockStyle) {
				UnlockStyle = document.createElement('style');
				UnlockStyle.id = 'GameStyle-Locker';
				UnlockStyle.innerHTML = `
				html, body {
					overflow: hidden;
				}
				button.bg-gray-500\\/10 {
					background: #d0d0d0;
					outline: 2px solid #e0e0e0;
				}
				button.bg-gray-500\\/10:hover {
					background: rgba(192, 192, 192, 0.80);
				}
				button.bg-red-500\\/50 {
					background-color: #e07070;
					outline: 2px solid #e0e0e0;
				}
				button.text-transparent {
					background: rgba(192, 192, 192, 0.75);
					outline: 2px solid rgba(192, 192, 192, 0.75);
				}
				button.text-blue-500,
				button.text-green-500,
				button.text-yellow-500,
				button.text-orange-500,
				button.text-red-500,
				button.text-purple-500,
				button.text-pink-500,
				button.text-teal-500 {
					background: #e0e0e0;
					outline: 2px solid #e0e0e0;
				}
				`;
				GameWindow.document.body.appendChild(UnlockStyle);
			};

			// Set board size according to content size on screen
			[Width, Height] = [
				~~(FromStyle.width.split('px')[0] / MineSquareSize) - 1,
				~~(FromStyle.height.split('px')[0] / MineSquareSize),
			];
			Bombs = ~~(2 * Math.sqrt(Width * Height));

			// No cheating! (And no breaking my fragile CSS :c)
			window.addEventListener('resize', function(){
				if (window.innerWidth != WindowWidth) {
					if (!ResizeAlerted) {
						setTimeout(function(){
							LockedEl.style.visibility = 'hidden';
							alert(Notices.AlertLockedResize);
						}, 150);
						ResizeAlerted = true;
					};
					LockedEl.style['padding-left'] = '';
					LockedEl.style['padding-right'] = '';
					document.querySelectorAll('.Minesweeper-Locker-Notice').forEach(function(El){
						El.remove();
					});
					SetupLockGame();
					WindowWidth = window.innerWidth;
				};
			});

			Game.reset(Width, Height, Bombs);
		};

		// Game board used to unlock page content on game win
		if (Container.classList.contains('Locker')) {
			SetupLockGame();
		}
		// Normal game board
		else {
			// TODO:
			// Add buttons to select board size and control game execution
			// Proper CSS with scrollbars always visible on screen when needed due to board overflow
		};
		
		Game.reset(Width, Height, Bombs);
	});

	// When user clicks the board, it's a good time for checking win/loss
	GameWindow.onclick = function(){
		var OldState = GameState;
		var CurState = Game.state._value.status;
		if (OldState != CurState) {
			// On win, remove the board from the page
			if (CurState == 'won') {
				setTimeout(function(){
					alert(Notices.AlertLockedWon + ` (${Game.width}x${Game.height}, ${Game.mines} mine, in ${GetGameSecs(Game)}s)`);
					DoContentUnlock();
				}, 1000);
			} else
			// On lose, reset the board
			if (CurState == 'lost') {
				setTimeout(function(){
					alert(Notices.AlertLockedLost);
					Game.reset();
				}, 300);
			};
			GameState = CurState;
		};
	};
});
