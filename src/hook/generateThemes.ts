/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/Haruno19/everforest-vscode
 *  Copyright:  2026 haru
 *--------------------------------------------------------------------------------------------*/

import * as fs from "fs";
import { join } from "path";
import { getWorkbench } from "../workbench";
import { getSyntax } from "../syntax";
import { getSemantic } from "../semantic";

class Utils {
  private async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }

  async generateTheme(path: string, data: any) {
    this.writeFile(path, data);
  }

  getThemeData(variant: string, name: string, type: "dark" | "light") {
    return {
      name: name,
      type: type,
      semanticHighlighting: true,
      semanticTokenColors: getSemantic(variant),
      colors: getWorkbench(variant),
      tokenColors: getSyntax(variant),
    };
  }
}

const utils = new Utils();

// Generate custom themes
utils.generateTheme(
  join(__dirname, "..", "..", "themes", "everforest-higure.json"),
  utils.getThemeData("dark-higure", "Everforest Higure", "dark")
);

utils.generateTheme(
  join(__dirname, "..", "..", "themes", "everforest-yoake.json"),
  utils.getThemeData("light-yoake", "Everforest Yoake", "light")
);
