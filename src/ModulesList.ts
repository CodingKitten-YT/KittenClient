import * as Logo  from "./assets/logo.png";
import * as Keystrokesimg from "./assets/keystrokes.png"
import * as Fullbrightimg from "./assets/fullbright.png"
import * as Togglesprintimg from "./assets/togglesprint.png"
// you can import png files and it would be encoded into base64 in the compiled file. like:
// import * as modulenameimg from "./assets/image.png"

export const LogoData = Logo;

export let ModulesList = [
  {
    name: "Keystrokes",
    imagedata: Keystrokesimg,
  },
  {
    name: "Fullbright",
    imagedata: Fullbrightimg,
  },
  {
    name: "togglesprint",
    imagedata: Togglesprintimg,
  },
];
