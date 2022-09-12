import { DayType } from "./interfaces";

export class Day {
  private dayType: DayType;
  constructor(type: DayType) {
    this.dayType = type;
  }

  isWorking() {
    return this.dayType !== DayType.Off && this.dayType !== DayType.Rest;
  }

  isNights() {
    return this.dayType === DayType.Nights;
  }

  getWorkingString() {
    if (this.dayType === DayType.Nights) {
      return "Nights";
    }

    if (this.dayType === DayType.Off) {
      return "Day Off";
    }

    if (this.dayType === DayType.Rest) {
      return "Post Nights Day Off";
    }

    if (this.dayType === DayType.SpaDay) {
      return "Spa Day";
    }

    return `Working Day ${getWorkingPatternForDayType(this.dayType)}`;
  }
  getColour() {
    switch (this.dayType) {
      case DayType.Nights:
        return "#fe0100";
      case DayType.SpaDay:
        return "#538235";
      case DayType.EightTilEight:
        return "#00af50";
      case DayType.TenTilEight:
        return "#ffda66";
      case DayType.EightTilSix:
        return "#92cf51";
      case DayType.TwoTilMidnight:
        return "#00aff0";
      case DayType.OneTilTenCover:
        return "#ffff02";
      case DayType.ElevenTilEightCover:
        return "#ffffcb";
      case DayType.FourTilMidnight:
        return "#9833fe";
      case DayType.OneTilEleven:
        return "#ffff99";
      case DayType.TwelveTilNine:
        return "#aeadad";
    }
  }
}

function getWorkingPatternForDayType(dayType: DayType) {
  switch (dayType) {
    case DayType.TenTilEight:
      return "10:00 - 20:00";
    case DayType.EightTilEight:
      return "08:00 - 20:00";
    case DayType.EightTilSix:
      return "08:00 - 18:00";
    case DayType.TwoTilMidnight:
      return "14:00 - 24:00";
    case DayType.OneTilTenCover:
      return "13:00 - 22:00 Cover";
    case DayType.ElevenTilEightCover:
      return "11:00 - 20:00 Cover";
    case DayType.FourTilMidnight:
      return "16:00 - 24:00";
    case DayType.OneTilEleven:
      return "13:00 - 23:00";
    case DayType.TwelveTilNine:
      return "12:00 - 21:00";
  }
}
