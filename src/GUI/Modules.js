const { ModulesList } = require("../ModulesList");
const Keystrokes = require("../Modules/Keystrokes"); 
const Fullbright = require("../Modules/Fullbright");
const togglesprint = require("../Modules/togglesprint");
// IF YOU ADD YOUR OWN MAKE SURE TO REQUIRE THEM HOW YOU NAMED IT IN THE "ModulesList.js" FILE!!!
// Example: const CPS = require("../Modules/scriptnamecanbewhatever")

let BareLocalStorageData = localStorage.getItem("SCMM-MODS");
let ParsedLSData = JSON.parse(BareLocalStorageData);

export function StartupModules () {
  //if (!BareLocalStorageData) {
    let mods = [];
    ModulesList.forEach((Module) => { mods.push({ name: Module.name, enabled: false });})
    localStorage.setItem("SCMM-MODS", JSON.stringify(mods));
  //}

  // Cant get this to work so womp womp for now
  // if (ParsedLSData) ModulesList.forEach((Module) => { if (ParsedLSData.find((e) => e.name === Module.name)) eval(`${Module.name}.Init("${Module.name}")`); });
}

export function SetupModules() {
  function Add(name, img) {
    const Module = document.createElement("div");

    Module.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: end; height: 25vh; width: 25vh; border-radius: 2.5vh; background-color: rgba(255, 255, 255, 0.15); border: solid 0.1vw rgba(255, 255, 255, 0.5); position: relative;">
            <img style="position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%); font-size: 2vh; width: 15vh; height: 15vh;" src="${img}"/>
            <h1 style="word-wrap: break-word;position: absolute; top: 62.5%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5vh; width: 100%; text-align: center;">${name}</h1>
            <a style="background-color: rgba(255, 0, 0, 0.25); width: 100%; height: 20%; bottom: 0; border-radius: 0 0 2.5vh 2.5vh; position: relative; border: solid 0.1vw rgba(255, 255, 255, 0.5);" id="SCMM-${name}-Toggle">
                <p style="position: absolute; top: 10%; left: 50%; transform: translate(-50%, -50%); font-size: 2vh;">DISABLED</p>
            </a>
        </div>
      `;

    const Holder = document.getElementById("SCMM-MODULES");
    if (Holder) Holder.appendChild(Module);
  }

  function EnableToggle(name) {
    document.getElementById(`SCMM-${name}-Toggle`).addEventListener("mousedown", function (e) {
      const i = ParsedLSData.findIndex((e) => e.name === name);

      if (i !== -1) {
        ParsedLSData[i].enabled = !ParsedLSData[i].enabled;
        eval(`${name}.Init("${name}")`);

        localStorage.setItem("SCMM-MODS", JSON.stringify(ParsedLSData));
      }
    })
  }

  function SetCorrectToggle(name) {
    const i = ParsedLSData.findIndex((e) => e.name === name);

    if (i !== -1) {
      const Toggle = document.getElementById(`SCMM-${name}-Toggle`);
      if (Toggle) {
        Toggle.style.backgroundColor = ParsedLSData[i].enabled ? "rgba(0, 255, 0, 0.25)" : "rgba(255, 0, 0, 0.25)";
        Toggle.querySelector("p").innerHTML = ParsedLSData[i].enabled ? "ENABLED" : "DISABLED";
      }
    }
  }

  ModulesList.forEach((Module) => {
    BareLocalStorageData = localStorage.getItem("SCMM-MODS");
    ParsedLSData = JSON.parse(BareLocalStorageData);
  
    Add(Module.name, Module.imagedata);
    EnableToggle(Module.name);
    setInterval(function () {
      SetCorrectToggle(Module.name);
    }, 100);
  });
}
