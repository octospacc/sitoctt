// This file was manually hacked directly from the compiled version downloaded from <https://vuesweeper.netlify.app/>.

// Change AppDeployPath from "/vuesweeper-core/" to wherever you put this folder on the server.
// Unfortunately Vue won't work with relative paths, only absolute, and won't work served from file:///.
var AppDeployPath = "/vuesweeper-core/";

var C = Object.getOwnPropertySymbols;
var $ = (i, e, t) => e in i ? Object.defineProperty(i, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : i[e] = t,
	g = (i, e) => {
		for (var t in e || (e = {})) Object.prototype.hasOwnProperty.call(e, t) && $(i, t, e[t]);
		if (C)
			for (var t of C(e)) Object.prototype.propertyIsEnumerable.call(e, t) && $(i, t, e[t]);
		return i
	},
	p = (i, e) => Object.defineProperties(i, Object.getOwnPropertyDescriptors(e));

import { d as v, w as Z, o, c as u, a as _, u as q, b as E, r as S, e as f, F as x, t as b, f as H, n as P, g as z, h as y, i as K, j as W, k as d, l as w, m as G, p as k, q as J, s as Q, v as U, x as X, y as Y, z as ee } from "./vendor.js";

const te = function() {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
	new MutationObserver(n => {
		for (const s of n)
			if (s.type === "childList")
				for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function t(n) {
		const s = {};
		return n.integrity && (s.integrity = n.integrity), n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? s.credentials = "include" : n.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
	}

	function r(n) {
		if (n.ep) return;
		n.ep = !0;
		const s = t(n);
		fetch(n.href, s)
	}
};
te();
const ne = v({
		props: {
			passed: {
				type: Boolean
			}
		},
		setup(i) {
			const e = i;

			function t() {
				const r = {
					colors: ["#5D8C7B", "#F2D091", "#F2A679", "#D9695F", "#8C4646"],
					shapes: ["square"],
					ticks: 500
				};
				_(p(g({}, r), {
					particleCount: 80,
					spread: 100,
					origin: {
						y: 0
					}
				})), setTimeout(() => {
					_(p(g({}, r), {
						particleCount: 50,
						angle: 60,
						spread: 80,
						origin: {
							x: 0
						}
					}))
				}, 250), setTimeout(() => {
					_(p(g({}, r), {
						particleCount: 50,
						angle: 120,
						spread: 80,
						origin: {
							x: 1
						}
					}))
				}, 400)
			}
			return Z(() => e.passed, r => {
				r && setTimeout(t, 300)
			}, {
				flush: "post"
			}), (r, n) => (o(), u("div"))
		}
	}),
	j = q(),
	se = E(j),
	N = S(!1);
E(N);
const re = {
		key: 0,
		"i-mdi-flag": "",
		"text-red": ""
	},
	ae = {
		key: 0,
		"i-mdi-mine": ""
	},
	ie = {
		key: 1,
		"font-600": ""
	},
	oe = v({
		props: {
			block: null
		},
		emits: ["lrclick"],
		setup(i, {
			emit: e
		}) {
			function t(s) {
				s.buttons === 3 && e("lrclick", s)
			}
			const r = ["text-transparent", "text-blue-500", "text-green-500", "text-yellow-500", "text-orange-500", "text-red-500", "text-purple-500", "text-pink-500", "text-teal-500"];

			function n(s) {
				return s.flagged ? "bg-gray-500/10" : s.revealed ? s.mine ? "bg-red-500/50" : r[s.adjacentMines] : "bg-gray-500/10 hover:bg-gray-500/20"
			}
			return (s, a) => (o(), u("button", {
				flex: "~",
				"items-center": "",
				"justify-center": "",
				"min-w-8": "",
				"min-h-8": "",
				m: "1px",
				border: "0.5 gray-400/10",
				class: P(n(i.block)),
				onMousedown: t
			}, [i.block.flagged ? (o(), u("div", re)) : i.block.revealed || f(N) ? (o(), u(x, {
				key: 1
			}, [i.block.mine ? (o(), u("div", ae)) : (o(), u("div", ie, b(i.block.adjacentMines), 1))], 64)) : H("", !0)], 34))
		}
	}),
	le = [
		[1, 1],
		[1, 0],
		[1, -1],
		[0, -1],
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, 1]
	];
class ue {
	constructor(e, t, r) {
		this.width = e, this.height = t, this.mines = r, this.state = S(), this.reset()
	}
	get board() {
		return this.state.value.board
	}
	get blocks() {
		return this.state.value.board.flat()
	}
	reset(e = this.width, t = this.height, r = this.mines) {
		this.width = e, this.height = t, this.mines = r, this.state.value = {
			mineGenerated: !1,
			status: "ready",
			board: Array.from({
				length: this.height
			}, (n, s) => Array.from({
				length: this.width
			}, (a, l) => ({
				x: l,
				y: s,
				adjacentMines: 0,
				revealed: !1
			})))
		}
	}
	randomRange(e, t) {
		return Math.random() * (t - e) + e
	}
	randomInt(e, t) {
		return Math.round(this.randomRange(e, t))
	}
	generateMines(e, t) {
		const r = () => {
			const n = this.randomInt(0, this.width - 1),
				s = this.randomInt(0, this.height - 1),
				a = e[s][n];
			return Math.abs(t.x - a.x) <= 1 && Math.abs(t.y - a.y) <= 1 || a.mine ? !1 : (a.mine = !0, !0)
		};
		Array.from({
			length: this.mines
		}, () => null).forEach(() => {
			let n = !1;
			for (; !n;) n = r()
		}), this.updateNumbers()
	}
	updateNumbers() {
		this.board.forEach(e => {
			e.forEach(t => {
				t.mine || this.getSiblings(t).forEach(r => {
					r.mine && (t.adjacentMines += 1)
				})
			})
		})
	}
	expendZero(e) {
		e.adjacentMines || this.getSiblings(e).forEach(t => {
			t.revealed || (t.flagged || (t.revealed = !0), this.expendZero(t))
		})
	}
	onRightClick(e) {
		this.state.value.status === "play" && (e.revealed || (e.flagged = !e.flagged))
	}
	onClick(e) {
		if (this.state.value.status === "ready" && (this.state.value.status = "play", this.state.value.startMS = +new Date), !(this.state.value.status !== "play" || e.flagged)) {
			if (this.state.value.mineGenerated || (this.generateMines(this.board, e), this.state.value.mineGenerated = !0), e.revealed = !0, e.mine) {
				this.onGameOver("lost");
				return
			}
			this.expendZero(e)
		}
	}
	getSiblings(e) {
		return le.map(([t, r]) => {
			const n = e.x + t,
				s = e.y + r;
			if (!(n < 0 || n >= this.width || s < 0 || s >= this.height)) return this.board[s][n]
		}).filter(Boolean)
	}
	showAllMines() {
		this.board.flat().forEach(e => {
			e.mine && (e.revealed = !0)
		})
	}
	checkGameState() {
		if (!this.state.value.mineGenerated || this.state.value.status !== "play") return;
		this.board.flat().some(t => !t.mine && !t.revealed) || this.onGameOver("won")
	}
	autoExpand(e) {
		if (this.state.value.status !== "play" || e.flagged) return;
		const t = this.getSiblings(e),
			r = t.reduce((a, l) => a + (l.flagged ? 1 : 0), 0),
			n = t.reduce((a, l) => a + (!l.revealed && !l.flagged ? 1 : 0), 0);
		r === e.adjacentMines && t.forEach(a => {
			a.revealed || a.flagged || (a.revealed = !0, this.expendZero(a), a.mine && this.onGameOver("lost"))
		});
		const s = e.adjacentMines - r;
		n === s && t.forEach(a => {
			!a.revealed && !a.flagged && (a.flagged = !0)
		})
	}
	onGameOver(e) {
		this.state.value.status = e, this.state.value.endMS = +Date.now(), e === "lost" && (this.showAllMines(), setTimeout(() => {
			//alert("lost")
		}, 10))
	}
}
const ce = w(),
	de = {
		flex: "~ gap1",
		"justify-center": "",
		p4: ""
	},
	fe = {
		flex: "~ gap-10",
		"justify-center": ""
	},
	he = {
		"font-mono": "",
		"text-2xl": "",
		flex: "~ gap-1",
		"items-center": ""
	},
	me = d("div", {
		"i-carbon-timer": ""
	}, null, -1),
	ge = {
		"font-mono": "",
		"text-2xl": "",
		flex: "~ gap-1",
		"items-center": ""
	},
	pe = d("div", {
		"i-mdi-mine": ""
	}, null, -1),
	ve = {
		p5: "",
		"w-full": "",
		"overflow-auto": ""
	},
	GameMain = v({
		setup(i) {
			const e = new ue(9, 9, 10),
				t = z(),
				r = y(() => {
					var l, c;
					return Math.round((((l = e.state.value.endMS) != null ? l : +t.value) - ((c = e.state.value.startMS) != null ? c : +t.value)) / 1e3)
				});

			// Export game object
			window.vuesweeper = e;

			// Actualy don't use localStorage, as saving the game state glitches after a while
			//K("vuesweeper-state", e.state);

			const n = y(() => e.board),
				s = y(() => e.state.value.mineGenerated ? e.blocks.reduce((l, c) => l - (c.flagged ? 1 : 0), e.mines) : e.mines);

			function a(l) {
				switch (l) {
					case "easy":
						e.reset(9, 9, 10);
						break;
					case "medium":
						e.reset(16, 16, 40);
						break;
					case "hard":
						e.reset(16, 30, 99);
						break;
				}
			}
			return W(() => {
				e.checkGameState()
			}), (l, c) => {
				const D = oe,
					A = ne;
				return o(), u("div", null, [ce, /*d("div", de, [
					d("button", {
						btn: "",
						onClick: c[0] || (c[0] = h => f(e).reset())
					}, " New Game "),
					d("button", {
						btn: "",
						onClick: c[1] || (c[1] = h => a("easy"))
					}, " Easy "),
					d("button", {
						btn: "",
						onClick: c[2] || (c[2] = h => a("medium"))
					}, " Medium "),
					d("button", {
						btn: "",
						onClick: c[3] || (c[3] = h => a("hard"))
					}, " Hard "),
				]),*/ d("div", fe, [d("div", he, [me, w(" " + b(r.value), 1)]), d("div", ge, [pe, w(" " + b(s.value), 1)])]), d("div", ve, [(o(!0), u(x, null, G(n.value, (h, O) => (o(), u("div", {
					key: O,
					flex: "~",
					"items-center": "",
					"justify-center": "",
					"w-max": "",
					ma: ""
				}, [(o(!0), u(x, null, G(h, (m, F) => (o(), J(D, {
					key: F,
					block: m,
					onClick: M => f(e).onClick(m),
					onLrclick: M => f(e).autoExpand(m),
					onContextmenu: Q(M => f(e).onRightClick(m), ["prevent"])
				}, null, 8, ["block", "onClick", "onLrclick", "onContextmenu"]))), 128))]))), 128))]), k(A, {
					passed: f(e).state.value.status === "won"
				}, null, 8, ["passed"])])
			}
		}
	}),
	VueRoutes = [{
		name: "index",
		path: "/",
		component: GameMain,
		props: !0
	}, {
		name: AppDeployPath,
		path: AppDeployPath,
		component: GameMain,
		props: !0
	}],
	xe = {
		"text-xl": "",
		"mt-6": "",
		"inline-flex": "",
		"gap-2": ""
	}//,
	/*
	be = {
		key: 0,
		"i-carbon-moon": ""
	},
	we = {
		key: 1,
		"i-carbon-sun": ""
	},
	*/
	//Me = v({
	//	setup(i) {
	//		return (e, t) => (o(), u("nav", xe, [d("button", {
	//			class: "icon-btn !outline-none",
	//			onClick: t[0] || (t[0] = r => f(se)())
	//		}, /*[f(j) ? (o(), u("div", be)) : (o(), u("div", we))]*/)]))
	//	}
	//});
var Ce = (i, e) => {
	const t = i.__vccOpts || i;
	for (const [r, n] of e) t[r] = n;
	return t
};
const $e = {},
	Ge = {
		"font-sans": "",
		p: "y-10",
		text: "center gray-700 dark:gray-200"
	};

function Ee(i, e) {
	const t = U("router-view");
	//const r = Me;
	return o(), u("main", Ge, [k(t), /*k(r)*/])
}
var Se = Ce($e, [
	["render", Ee]
]);
const AppRuntime = X(Se);
const RouteRuntime = Y({
	history: ee(),
	routes: VueRoutes
});
AppRuntime.use(RouteRuntime);
AppRuntime.mount("#app");
