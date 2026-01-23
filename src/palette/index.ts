/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/Haruno19/everforest-vscode
 *  Copyright:  2026 haru
 *--------------------------------------------------------------------------------------------*/

import { Palette } from "../interface";
import { default as darkForeground } from "./dark/foreground";
import { default as darkBackgroundHigure } from "./dark/background/higure";
import { default as lightForeground } from "./light/foreground";
import { default as lightBackgroundYoake } from "./light/background/yoake";

export function getPalette(variant: string): Palette {
  let paletteBackground;
  let paletteForeground;

  switch (variant) {
    case "dark-higure":
      paletteForeground = darkForeground;
      paletteBackground = darkBackgroundHigure;
      break;
    case "light-yoake":
      paletteForeground = lightForeground;
      paletteBackground = lightBackgroundYoake;
      break;
    default:
      paletteForeground = darkForeground;
      paletteBackground = darkBackgroundHigure;
  }

  return {
    ...paletteBackground,
    ...paletteForeground,
  };
}
