export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export type Misdemeanour = {
	citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};
