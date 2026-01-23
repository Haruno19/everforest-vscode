/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/Haruno19/everforest-vscode
 *  Copyright:  2026 haru
 *--------------------------------------------------------------------------------------------*/

export interface Palette {
  bg0: string;
  bg1: string;
  bg: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  grey0: string;
  grey1: string;
  grey2: string;
  fg: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  aqua: string;
  blue: string;
  purple: string;
  dimRed: string;
  dimOrange: string;
  dimYellow: string;
  dimGreen: string;
  dimAqua: string;
  dimBlue: string;
  dimPurple: string;
  shadow: string;
  badge: string;
}

export interface Configuration {
  darkContrast?: string;
  lightContrast?: string;
  darkWorkbench?: string;
  lightWorkbench?: string;
  darkSelection?: string;
  lightSelection?: string;
  darkCursor?: string;
  lightCursor?: string;
  italicKeywords?: boolean;
  italicComments?: boolean;
  diagnosticTextBackgroundOpacity?: string;
  highContrast?: boolean;
}
