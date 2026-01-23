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
import { getPalette } from "../palette";
import { materialWorkbench } from "./material";

export function getWorkbench(variant: string) {
  const palette: Palette = getPalette(variant);
  const variantType = variant.includes("light") ? "light" : "dark";
  return materialWorkbench(palette, variantType);
}
