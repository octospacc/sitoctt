#!/usr/bin/env node
require('../../Scripts/Lib/SelfBuild.js').importAll();

const DeskModeMinWid = `1024px`;
const wSectLink = `.staticoso-SectionLink`;
const wPagesList = `#PageContent .staticoso-TreeList.staticoso-PagesList`
const IfDeskMode = `#DesktopModeCheck:Checked`;
const IfDeskMode_Div =`${IfDeskMode} ~ Div`;
const NoLinkLinkWhere = `.NoLinkLink, ${Where('', '.NoLinkLink, .staticoso-SectionLink, #StatCounter, #RingsDiv', ' a')}`;

const RawDataCss = {
	DeskModeMinWid: DeskModeMinWid,
};

Fs.writeFileSync(__filename.split('.SelfBuild.js')[0], `
/*--------------------------------------------------------*
 *    Globale                                             *
 *--------------------------------------------------------*/

:Root {
	--ScreenBorderPadding: 4px;
	--ContentPadding: 8px;
	--BorderRad0: 2px;

	--BodyTextColor: #080810;
	--cPurpleLighter: #D000D0;
	--cBasePinky: #EEDDFF;
	--cBackDark: #300030;
	--cPurpleDarker: #700070;

	--mDesktopMainWidth: 72.5%;
	--mDesktopSideWidth: 22.5%/*24%*/;
	--mDesktopSideLeft: 12px/*8*/;
}

* {
	Box-Sizing: Border-Box;
}

::Selection {
	Background-Color: RGBA(170, 170, 255, 0.2);
}

Body {
	Margin: 0;
	Box-Sizing: Border-Box;
	Width: 100%;
	Max-Width: 100%;
	Position: Absolute;
	Left: Auto;
	Right: Auto;
	Color: Var(--BodyTextColor);
	Background: Var(--cBasePinky);
	Font-Size: 13pt;
	Padding: Var(--ContentPadding);
	Overflow-Wrap: Break-Word;
}

${Where('', '.staticoso-ContentHeader-CreatedOn, .staticoso-ContentHeader-EditedOn', '> .staticoso-Value')} {
	Font-Weight: Bold;
}

${Unpack('.staticoso-ContentHeader-Index > .staticoso-Value:', ['before { content:"("; }', 'after { content:")"; }'], '')}

/*--------------------------------------------------------*/



/*--------------------------------------------------------*
 *    Fritto Misto - Andrebbe ordinato                    *
 *--------------------------------------------------------*/

Details Div {
	Margin: 8px;
	Padding: 4px;
}
.BorderBox,
${Where('.BorderBoxContainer >', ' Div, Details', ':Not(.NoBorderBox)')}
Details Div Details:Not(.NoBorderBox) {
	Border: 2px Solid Purple;
	Margin: 8px;
	Padding: 4px;
}

A { Color: Var(--cPurpleLighter); }
Code A, .Code A { Color: #60D0D0; }

${Where('h', Range(1,6), '')} {
	Color: #503080;
}
Ul {
	Padding-Left: 16px;
	Padding-Right: 4px;
}
${Where('table', ' td, th, tr', '')} {
	Border: 2px Solid Purple;
	Padding: 4px;
}

Blockquote, .Blockquote {
	Margin-Left: 2em;
	Padding-Left: 1em;
	Border-Left: 3px Solid #85588C;
}

.ScrollBox, .ScrollBorderBox {
	Padding: 8px;
}
.Code, Code:Not(.NoCode), Pre Code:Not(.NoCode), Pre.Code, .CodeScroll {
	Color: #FAFAF0;
	Background: Var(--cBackDark);
}
.ScrollBox, .ScrollBorderBox, .CodeScroll {
	Overflow-X: Auto;
}
.ScrollBorderBox, .CodeScroll {
	Border: 2px Solid Purple;
}
Pre.Code, .CodeScroll {
	Padding-Left: 8px;
	Padding-Right: 8px;
	Padding-Top: 8px;
	Padding-Bottom: 16px;
}
Code:Not(Pre Code) {
	Padding: 4px 4px 4px 4px;
}

Video.SmallVideoQuote { Float:Left; }
Video.SmallVideoQuote + Blockquote {
	Display: Inline-Block;
	Margin-Top: 0;
	Margin-Bottom: 0px;
}

#MainBox A:Not(${NoLinkLinkWhere}):Before {
	Content: '🔗 ';
}
#MainBox A:Not(${NoLinkLinkWhere}):After {
	Content: '';
	Border-Radius: 0.125em;
	Display: Inline-Block;
	Width: 0.50em;
	Height: 0.50em;
	Margin-Bottom: -0.40em;
	Border-Bottom: 0.20em solid Var(--cPurpleDarker);
	Border-Right: 0.20em solid Var(--cPurpleDarker);
	Margin-Left: -0.40em;
	Opacity: 0.5;
}

Header > P > A > Img {
	Display: Inline !Important;
}

/* Clickable link at the left of every section title */
#SitesList B:Target,
.staticoso-SectionTitle:Target {
	Color: Var(--cBasePinky) !Important;
	Background: Var(--cPurpleDarker) !Important;
	Text-Decoration: Underline;
}
.staticoso-SectionLink {
	Position: Absolute;
	Left: -1.5em;
	Opacity: 0.08;
}
${wSectLink}:Hover { Opacity: 0.8; }
${wSectLink} > A:Before { Content: '🔗'; }
${wSectLink} > A { Border-Radius: Var(--BorderRad0); }
${wSectLink} > A > Span { Font-Size: 0; }

A:Hover:Not(
	.NoABigger, .NoHoverLight,
	.NoABigger A, .NoHoverLight A,
	${Where('h', Range(3,6), ' > a')}
),
.YesHoverLight:Hover, .YesHoverLight A:Hover {
	Color: Var(--cBasePinky) !Important;
	Background: Var(--cPurpleDarker) !Important;
}

.ImgShiftedH, .ImgShiftedH Img {
	Margin-Top: 4px;
	/* Margin-Bottom: -4px; */
}

H1:hover { Font-Size: 28pt; }
H2:hover { Font-Size: 21.5pt; }
H3:hover { Font-Size: 17.5pt; }

IFrame {
	Width: 100%;
	Max-Height: 90vh;
}

#Container { Max-Width: 100%; }

#LeftBox, #RightBox {
	Max-Width: 90vw;
	Color: #fafaf0;
	Background: Var(--cBackDark);
	Border-Radius: Var(--BorderRad0);
}

#LeftBox A, #RightBox A, #BottomBox A { Color: Var(--cBasePinky); }
#LeftBox Ul Li, #RightBox Ul Li { List-Style-Type: None; }
#LeftBox Ul, #RightBox Ul { Padding-Top: 0px; }

#TopBox {
	Width: 100%;
	Padding: Var(--ContentPadding);
}
.HeaderElement {
	Border: 2px Solid Purple;
	Padding: 0px 8px 8px 8px;
}

:Where(#TopBox, #BottomBox) :Where(H1, H2, H3, H4, H5, H6) { Display: Inline; }
#LeftBox, #LeftBoxContainer {
	Float: Left;
	Left: Var(--ContentPadding);
	Padding: Var(--ContentPadding);
}
#RightBox, #RightBoxContainer {
	Float: Right;
	Right: Var(--ContentPadding);
	Padding: Var(--ContentPadding);
}
#LeftBox { Font-Size: Larger; }
#RightBox { Float: Right; }
#RightBoxContainer > Details > Summary { Text-Align: Right; }

#MainBox {
	Margin: Auto;
	Position: Absolute;
	Z-Index: -1;
	Left: 0;
	Right: 0;
	Width: 80%;
	Min-Height: 100vh;
	Padding-Left: 2.5%;
	Padding-Right: 2.5%;
	Padding-Top: Calc(Var(--ContentPadding) + 32px);
	Padding-Bottom: Calc(Var(--ContentPadding) + 64px);
}

#MainBox Img, #MainBox Video {
	Max-Width: 90%;
	Max-Height: 80vh;
}
#MainBox Img:Hover, #MainBox Video:Hover {
	Max-Width: 100%;
	Max-Height: 90vh;
}

.Img36 Img, .Img36 Video { Max-Height: 36vh !important; }
.Img36 Img:Hover, .Img36 Video:Hover { Max-Height: 64vh !important; }

Img.Center, Video.Center,
.Center Img, .Center Video,
#MainBox P Img:Not(.NoImgCenter, .NoImgCenter Img),
#MainBox P Video:Not(.NoImgCenter, .NoImgCenter Video) {
	Display: Block;
	Margin-Left: Auto;
	Margin-Right: Auto;
}
.ImgSidePadding Img,
.ImgSidePadding Video {
	Padding-Left: 16px;
	Padding-Right: 16px;
}
.Pixelated,
.Pixelated Img {
	Image-Rendering: Pixelated;
	-ms-interpolation-mode: nearest-neighbor;
}

.MediaRow2 { Padding: 0px; }
.MediaRow2:After {
	Content: "";
	Clear: Both;
	Display: Table;
}
.MediaRow2 Img, .MediaRow2 Video {
	Float: Left;
	Width: 50%;
	Padding: 4px;
}

/* Div for custom background crimes */
#Background {
	Z-Index: -1;
	Position: Fixed;
	Width: 100vw;
	Height: 100vh;
	/* Ignore body padding */
		Top: 0px;
		Left: 0px;
	Background-Size: Cover;
	Background-Position: Center;
	Background-Repeat: No-Repeat;
}

#MainBoxTop, #BuildTimeLine { Color: #505050; }
#BuildTimeLine > Span { Display: Inline-Block; }

#BottomBox {
	Width: 100%;
	Color: #fafaf0;
	Background: RGBA(64, 0, 64, 0.6);
	Text-Align: Right;
	Padding: Var(--ContentPadding);
	Z-Index: -1;
}
#LeftBoxContainer, #RightBoxContainer { Position: Absolute; }
#LeftBoxContainer, #RightBoxContainer, #BottomBoxContainer, #DesktopModeLabel { Color: #808080; }
#BottomBox, #BottomBoxContainer {
	Box-Sizing: Border-Box;
	Position: Fixed;
	Bottom: 0;
	Left: 0;
	Right: 0;
	Width: 100%;
	Min-Height: 48px;
}
#BottomBoxContainer { Padding: Var(--ScreenBorderPadding); }
#TopBoxLeft {
	Text-Align: Left;
	Display: Inline-Block;
}
#TopBoxRight {
	Text-Align: Right;
	Float: Right;
	Clear: Both;
}

/*
#PrivacyPopup {
	Display: None;
	Visibility: Hidden;
	Position: Fixed;
	Z-Index: 16;
	Color: #fafaf0;
	Background: Var(--cBackDark);
	Max-Width: 60vw;
	Max-Height: 50vh;
	Overflow-Y: Scroll;
	Bottom: 64px;
	Right: Calc(Var(--ContentPadding) * 2);
	Padding: Var(--ContentPadding);
	Padding-Bottom: Calc(Var(--ContentPadding) * 2);
}
*/

#MainBoxGlobalFooter,
#StatCounter,
.Center {
	Text-Align: Center;
}
#MainBoxGlobalFooter span { Vertical-Align: Top; }

#LeftBoxCheck, #LeftBoxLabel {
	Float: Left;
	Left: 0;
	Margin: Var(--ScreenBorderPadding);
}
#RightBoxCheck, #RightBoxLabel {
	Float: Right;
	Right: 0;
	Margin: Var(--ScreenBorderPadding);
}
#BottomBoxCheck, #BottomBoxLabel {
	Float: Left;
	Left: 0;
	Margin: Var(--ScreenBorderPadding);
}
.ToggleBoxCheck, #DesktopModeCheck {
	Position: Fixed;
	Opacity: 0;
}
.ToggleBoxCheck:Checked ~ .ToggleBox {
	Display: None;
	Visibility: Hidden;
}

/* No selezione */
#LeftBox, #LeftBoxContainer,
#RightBox, #RightBoxContainer, 
#BottomBoxLabel, #BottomBoxCheck,
#DesktopModeLabel, #DesktopModeCheck {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	User-Select: none;
}

${wPagesList} > Li > .staticoso-List-Title {
	Left: -1em;
	Position: Relative;
	Font-Size: Large;
}

${wPagesList} Li {
	/*background: RGBA(128,128,128,0.5);
	border-radius: 2px;
	box-shadow: 0px 2px 2px pink;
	margin-bottom: 1em;*/
	Display: Block;
}

${wPagesList} Li > Span { Min-Width: Fit-Content; }

${wPagesList} > Li > A,
${wPagesList} Li > Span + A {
	Font-Size: Larger;
}

${wPagesList} Li > Span + A { Margin-Bottom: 1em; }

@Media (Max-Width: 750px) {
	${wPagesList} Li > Span + A { Display: Block; }
}

@Media (Min-Width: 750px) {
	${wPagesList} Li { Display: Flex; }
	/*
	${wPagesList} Li:Not(:First-Of-Type) > Span {
		Margin-Left: 16px;
	}
	${wPagesList} Li:Not(:First-Of-Type) > Span:Before {
		background: black;
		content: "";
		min-width: 2px;
		max-width: 2px;
	}
	*/
}

@Media (Max-Width: ${DeskModeMinWid}) {
	Details > Summary:Hover { Font-Size: 15pt; }
	#DesktopModeCheck, #DesktopModeLabel { Display: None; }
}

/*--------------------------------------------------------*/



/*--------------------------------------------------------*
 *    Desktop view mode                                   *
 *--------------------------------------------------------*/

@Media (Min-Width: ${DeskModeMinWid}) {
	#DesktopModeCheck/*:Unchecked*/ {
		Opacity: 0;

		/* For position on top screen area:
		Position: Absolute;
		*/

		/* For position on bottom ribbon: */
		Position: Fixed;
		/* */

		/* Yeah what? Values below have an unknown relationship *\
		\* to the Top and Left of the label (see below)         */

		/* Button on top (issues, see below):
		Top: 5.0em;
		Left: 7.5em;
		*/

		/* Button on top of bottom ribbon */
		Bottom: 0.5em;
		Left: 3.5em;
		Z-Index: 4;
		/* */
	}
	/*#DesktopModeCheck:Unchecked ~*/ #DesktopModeLabel {
		/* For position on top screen area:
		Position: Absolute;
		*/

		/* For position on bottom ribbon: */
		Position: Fixed;
		/* */

		/* Idk why sometimes with some zoom levels     *\
		\* this appears to shift up or down 1-2 pixels */

		/* Button on top (issues, see below):
		Top: 3.55em;
		Left: 5em;
		*/

		/* Button on top of bottom ribbon */
		Bottom: 0.5em;
		Left: 3.5em;
		Z-Index: 4;
		/* */
	}
	
	/* Nota: Forse dovrebbe stare più in alto, a destra, a fianco del tasto Menu */
	${IfDeskMode} { /* Desktop mode checkbox itself */
		Position: Fixed;

		/* Button below menu one (issue: gets covered by big menu):
		Top: 5.5em;
		Left: 3.5em;
		*/

		/* Button right of menu one (issue: looks bad because goes over content):
		Z-Index: 8;
		Top: 1.5em;
		Left: Calc(Var(--mDesktopSideWidth) - Var(--mDesktopSideLeft) + 2em);
		*/
	}
	${IfDeskMode} ~ #DesktopModeLabel {
		Position: Fixed;

		/* Button below menu one (issue: gets covered by big menu):
		Top: 4em;
		Left: 2em;
		*/

		/* Button right of menu one (issue: looks bad because goes over content):
		Z-Index: 8;
		Top: 1em;
		Left: Calc(Var(--mDesktopSideWidth) - Var(--mDesktopSideLeft) + 1em);
		*/
	}

	${IfDeskMode_Div} #MainBox {
		Top: 0px;
		Left: Unset;
		Right: 2%;
		Width: Var(--mDesktopMainWidth);
	}
	/*
	#LeftBoxContainer, #RightBoxContainer {
		Float: None;
		Width: 24%;
		Position: Static;
	}
	#LeftBox, #RightBox {
		Padding: 0px;
		Margin: 0px;
	}
	*/
	${IfDeskMode_Div} #LeftBox { max-height: calc(100vh - 52px - 3.5em); Z-Index: 256; }
	${IfDeskMode_Div} #RightBox { max-height: calc(100vh - 56px - 4em); }
	${Where(IfDeskMode_Div+' ', '#LeftBox, #RightBox', '')} {
		Position: Fixed;
		Bottom: 52px;
		Left: Var(--mDesktopSideLeft)/*8px*/;
		Width: Calc(Var(--mDesktopSideWidth) - Var(--mDesktopSideLeft));
		Overflow: Scroll;
	}
	${IfDeskMode_Div} #LeftBoxContainer > Details > Summary,
	${IfDeskMode_Div} #RightBoxContainer > Details > Summary {
		position: fixed;
		left: Calc(Var(--mDesktopSideWidth) - Var(--mDesktopSideLeft) - 60px);
	}
	${IfDeskMode_Div} #LeftBoxContainer > Details > Summary { Top: 1em; }
	${IfDeskMode_Div} #RightBoxContainer > Details > Summary { Top: 4em; }
	${IfDeskMode_Div} #TopBoxLeft { Position: Fixed; }
	
	/* Disable this hover for now: Strange bug with summary button of right sidebar, *\
	\* goes way lower than it should (?) and does glitchy movements                  */
	${IfDeskMode_Div} Details > Summary:Not(
		#LeftBoxContainer > Details > Summary,
		#RightBoxContainer > Details > Summary
	):Hover { Font-Size: 15pt; }
}

/*--------------------------------------------------------*/



/*--------------------------------------------------------*
 *    Gradienti                                           *
 *--------------------------------------------------------*/

.MainIdTextGradientL {
	Background: linear-gradient(to left, #d000d0, #8040d0);
	Color: Transparent;
	-webkit-background-clip: Text;
	Background-Clip: Text;
}
.MainIdTextGradientR {
	Background: linear-gradient(to right, #d000d0, #8040d0);
	Color: Transparent;
	-webkit-background-clip: Text;
	Background-Clip: Text;
}

/*--------------------------------------------------------*/



/*--------------------------------------------------------*
 *    Animazioni                                          *
 *--------------------------------------------------------*/

H1, H2, H3, A, Img, Video, Summary,
.YesHoverLight {
	Transition: 0.3s;
}

/*--------------------------------------------------------*/

${RawDataCssRule(RawDataCss)}
`);
