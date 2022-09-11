import { Day } from "./Day";

export enum DayType {
  Nights = "Nights",
  Rest = "Rest",
  Off = "Off",
  TenTilEight = "TenTilEight",
  EightTilTen = "EightTilTen",
  EightTilEight = "EightTilEight",
  EightTilSix = "EightTilSix",
  SpaDay = "Spa",
  TwoTilMidnight = "TwoTilMidnight",
  OneTilTenCover = "OneTilTenCover",
  ElevenTilEightCover = "ElevenTilEightCover",
  FourTilMidnight = "FourTilMidnight",
  OneTilEleven = "OneTilEleven",
  TwelveTilNine = "TwelveTilNine",
}

export interface RotaWeek {
  DaysOfWeek: Day[];
  Name: string;
}

export type RotaWeekType =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R";
