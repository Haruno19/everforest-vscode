/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/Haruno19/everforest-vscode
 *  Copyright:  2026 haru
 *--------------------------------------------------------------------------------------------*/

import { getPalette } from "../palette";
import { getDefaultSyntax } from "./default";

export function getSyntax(variant: string) {
  const palette = getPalette(variant);
  // Hardcode: keywords not italic, comments italic
  return getDefaultSyntax(palette, true);
}
