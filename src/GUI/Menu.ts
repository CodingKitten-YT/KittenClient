const { SetupModules } = require("./Modules");
const { LogoData } = require("../ModulesList");

let isMenuOpen = false;

export function CreateMenu() {
  if (!isMenuOpen) {
    isMenuOpen = true;

    const Holder = document.createElement("div");
    //@ts-ignore
    Holder.style = "backdrop-filter: blur(2px);width: fit-content;height: fit-content;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);";
    Holder.id = "SCMM";
    const Menu = document.createElement("div");
    //@ts-ignore
    Menu.style = `width: 65vw; height: 70vh; border-radius: 2.5vh; display: flex; flex-direction: column; padding: 2vh; background: rgba(50, 50, 50, 0.75); border: solid 0.1vw rgba(255, 255, 255, 0.5);`;
    Menu.innerHTML = `
        <div style="margin-bottom: 1vh; display: flex; flex-direction: row; align-items: center; justify-content: center; height: fit-content; width: 100%; color: #fff; gap: 1.5vw; font-family: 'Minecraftia', sans-serif;" margin-bottom: 1vh;>
            <img style="width: 10vh; height: 10vh;" src="${LogoData}">
            <h1 style="font-size: 4vh;">Solar Client</h1>
        </div>
        <div style="display: flex; overflow-y: auto; overflow-x: hidden; justify-content: center; flex-wrap: wrap; flex-direction: row; align-items: center; height: fit-content; width: 100%; color: #fff; gap: 1.5vw; font-family: 'Minecraftia', sans-serif;" id="SCMM-MODULES"></div>
    `;
    document.body.appendChild(Holder);
    Holder.appendChild(Menu);

    SetupModules();
  } else {
    document.getElementById("SCMM").remove();
    isMenuOpen = false;
  }
}
