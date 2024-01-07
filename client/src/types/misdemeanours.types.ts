export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const MISDEMEANOURS_TEXT = [
  "Mild Public Rudeness",
  "Not Eating Your Vegetables",
  "Speaking in a Lift",
  "Supporting Manchester United",
] as const;
export type MisdemeanourKindText = (typeof MISDEMEANOURS_TEXT)[number];

export const MISDEMEANOURS_EMOJIS = ["🤪", "🥗", "🗣", "😈"] as const;
export type MisdemeanourKindEmoji = (typeof MISDEMEANOURS_EMOJIS)[number];

export type MisdemeanourKindTextEmoji =
  `${MisdemeanourKindText} ${MisdemeanourKindEmoji}`;

export const MISDEMEANOURS_MAP = new Map<
  MisdemeanourKind,
  MisdemeanourKindText
>();
MISDEMEANOURS.forEach((key, i) =>
  MISDEMEANOURS_MAP.set(key, MISDEMEANOURS_TEXT[i])
);

export const MISDEMEANOURS_TEXT_WITH_EMOJI_MAP = new Map<
  MisdemeanourKind,
  MisdemeanourKindTextEmoji
>();
MISDEMEANOURS.forEach((key, i) =>
  MISDEMEANOURS_TEXT_WITH_EMOJI_MAP.set(
    key,
    `${MISDEMEANOURS_TEXT[i]} ${MISDEMEANOURS_EMOJIS[i]}`
  )
);

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export const JUST_TALK_TEXT = "Just Talk";
export type JustTalkText = typeof JUST_TALK_TEXT;

export type Misdemeanour = {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};
