import { Day } from "./helpers/Day";
import { DayType, RotaWeek } from "./helpers/interfaces";

const weekA: RotaWeek = {
  Name: "A",
  DaysOfWeek: [
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Rest),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekB: RotaWeek = {
  Name: "B",
  DaysOfWeek: [
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.TenTilEight),
    new Day(DayType.TenTilEight),
    new Day(DayType.EightTilEight),
    new Day(DayType.EightTilEight),
  ],
};

const weekC: RotaWeek = {
  Name: "C",
  DaysOfWeek: [
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekD: RotaWeek = {
  Name: "D",
  DaysOfWeek: [
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
    new Day(DayType.SpaDay),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekE: RotaWeek = {
  Name: "E",
  DaysOfWeek: [
    new Day(DayType.TwoTilMidnight),
    new Day(DayType.TwoTilMidnight),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
  ],
};

const weekF: RotaWeek = {
  Name: "F",
  DaysOfWeek: [
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.ElevenTilEightCover),
    new Day(DayType.ElevenTilEightCover),
    new Day(DayType.OneTilTenCover),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekG: RotaWeek = {
  Name: "G",
  DaysOfWeek: [
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
  ],
};

const weekH: RotaWeek = {
  Name: "H",
  DaysOfWeek: [
    new Day(DayType.Off),
    new Day(DayType.SpaDay),
    new Day(DayType.FourTilMidnight),
    new Day(DayType.FourTilMidnight),
    new Day(DayType.FourTilMidnight),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekI: RotaWeek = {
  Name: "I",
  DaysOfWeek: [
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.TwoTilMidnight),
    new Day(DayType.TwoTilMidnight),
    new Day(DayType.TwoTilMidnight),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekJ: RotaWeek = {
  Name: "J",
  DaysOfWeek: [
    new Day(DayType.FourTilMidnight),
    new Day(DayType.FourTilMidnight),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
  ],
};

const weekK: RotaWeek = {
  Name: "K",
  DaysOfWeek: [
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.SpaDay),
    new Day(DayType.EightTilSix),
    new Day(DayType.EightTilSix),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};
const weekL: RotaWeek = {
  Name: "L",
  DaysOfWeek: [
    new Day(DayType.ElevenTilEightCover),
    new Day(DayType.ElevenTilEightCover),
    new Day(DayType.OneTilEleven),
    new Day(DayType.OneTilEleven),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekM: RotaWeek = {
  Name: "M",
  DaysOfWeek: [
    new Day(DayType.Off), //TODO FOLLOW UP WHAT THIS IS
    new Day(DayType.OneTilEleven),
    new Day(DayType.Off),
    new Day(DayType.OneTilTenCover),
    new Day(DayType.Off),
    new Day(DayType.OneTilEleven),
    new Day(DayType.OneTilEleven),
  ],
};

const weekN: RotaWeek = {
  Name: "N",
  DaysOfWeek: [
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Nights),
    new Day(DayType.Rest),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekO: RotaWeek = {
  Name: "O",
  DaysOfWeek: [
    new Day(DayType.TwelveTilNine),
    new Day(DayType.TwelveTilNine),
    new Day(DayType.TwelveTilNine),
    new Day(DayType.Off),
    new Day(DayType.OneTilEleven),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

const weekP: RotaWeek = {
  Name: "P",
  DaysOfWeek: [
    new Day(DayType.TenTilEight),
    new Day(DayType.TenTilEight),
    new Day(DayType.TenTilEight),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.TwoTilMidnight),
    new Day(DayType.TwoTilMidnight),
  ],
};
const weekQ: RotaWeek = {
  Name: "Q",
  DaysOfWeek: [
    new Day(DayType.OneTilTenCover),
    new Day(DayType.OneTilTenCover),
    new Day(DayType.OneTilTenCover),
    new Day(DayType.SpaDay),
    new Day(DayType.ElevenTilEightCover),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};
const weekR: RotaWeek = {
  Name: "R",
  DaysOfWeek: [
    new Day(DayType.OneTilEleven),
    new Day(DayType.Off),
    new Day(DayType.Off),
    new Day(DayType.TwelveTilNine),
    new Day(DayType.TwelveTilNine),
    new Day(DayType.Off),
    new Day(DayType.Off),
  ],
};

export const rotaWeeks = [
  weekA,
  weekB,
  weekC,
  weekD,
  weekE,
  weekF,
  weekG,
  weekH,
  weekI,
  weekJ,
  weekK,
  weekL,
  weekM,
  weekN,
  weekO,
  weekP,
  weekQ,
  weekR,
];
