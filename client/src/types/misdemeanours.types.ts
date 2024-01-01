export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const MISDEMEANOURS_DISPLAY_TEXT = [
  "Mild Public Rudeness 🤪",
  "Not Eating Your Vegetables 🥗",
  "Speaking in a Lift 🗣",
  "Supporting Manchester United 😈",
] as const;
export type MisdemeanourKindDisplayText =
  (typeof MISDEMEANOURS_DISPLAY_TEXT)[number];

export const MISDEMEANOURS_MAP = new Map<
  MisdemeanourKind,
  MisdemeanourKindDisplayText
>();
MISDEMEANOURS.forEach((key, i) =>
  MISDEMEANOURS_MAP.set(key, MISDEMEANOURS_DISPLAY_TEXT[i])
);

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};
