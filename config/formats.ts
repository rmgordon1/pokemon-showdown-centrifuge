// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Battle Centrifuge",
		desc: `Choose 3 Random Pok&eacute;mon to battle, swap one after each win.`,
		mod: 'gen9',
		team: 'random',
		bestOfDefault: true,
		streakBased: true,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod', 'Team Preview', 'Picked Team Size = 3'],
	},
	{
		name: "[Gen 9] Battle Centrifuge Plus",
		desc: `Battle Centrifuge that uses your previously saved winning teams when available.`,
		mod: 'gen9',
		team: 'battlecentrifugeplus',
		bestOfDefault: true,
		streakBased: true,
		rated: 'gen9battlecentrifuge',
		searchShow: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	
];
