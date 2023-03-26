#!/usr/bin/env node
require('../../Scripts/Lib/SelfBuild.js').importAll();

Fs.writeFileSync(__filename.split('.SelfBuild.js')[0], `
/* Global styles applied to all pages with any base template.
 *
 * Note to future self:
 *   colors and things like that should **never** go here,
 *   only formatting/layout rules and reusable classes
 *   needed to fix HTML quirks.
 */

.Center { Text-Align: Center; }
.Inline { Display: Inline; }
.InlineBlock { Display: Inline-Block; }
.NoCol { Color: Transparent !Important; }
.NoDisp, .NoDisplay, .DispNone { Display: None; }
.DispBlock { Display: Block; }
.NoWrap { White-Space: NoWrap; }

.NoSelect {
	User-Select: none;
	-ms-user-select: none;
	-moz-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-webkit-touch-callout: none;
}

.i1em {
	Max-Width: 1em;
	Max-Height: 1em;
}

/* Set Headings as Inline when inside Details Summaries and List Items */
/*:Where(Summary, Li) > :Where(H1, H2, H3, H4, H5, H6) {*/
${Where('summary >', CssAllHeadings, '')},
${Where('li >', CssAllHeadings, '')} {
	Display: Inline;
}

/* Python-Markdown can put a <p> for list text items, forming spacing between it and sublists.
   Wrapping a list in a div with this class when this effect is unwanted.
 */
.ListNoInMargin > * > li > p { margin-bottom: 0; }
/* Strange <br>s are sometimes formed */
/*.ListNoInMargin > * > li > p > br:last-of-type { display: none; }*/

/* Animazioni per le desinenze */
.BlinkA {
	Animation: BlinkerA 0.25s Step-Start Infinite;
}
@Keyframes BlinkerA {
	0% {Position: Absolute; Visibility: Hidden;}
	50% {Position: Static; Visibility: Visible;}
	100% {Position: Absolute; Visibility: Hidden;}
}
.BlinkO {
	Animation: BlinkerO 0.25s Step-Start Infinite;
}
@Keyframes BlinkerO {
	0% {Position: Static; Visibility: Visible;}
	50% {Position: Absolute; Visibility: Hidden;}
	100% {Position: Static; Visibility: Visible;}
}
`);
