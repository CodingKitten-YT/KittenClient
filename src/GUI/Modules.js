const { ModulesList } = require("../ModulesList");
const Keystrokes = require("../Modules/Keystrokes");
const Fullbright = require("../Modules/Fullbright");

let BareLocalStorageData = localStorage.getItem("SCMM-MODS");
let ParsedLSData = JSON.parse(BareLocalStorageData);

export function StartupModules() {
  if (!localStorage.getItem("SCMM-MODS"))
    localStorage.setItem(
      "SCMM-MODS",
      '[{"name": "Fullbright","enabled": false},{"name": "Keystrokes","enabled": false}]'
    );

  if (ParsedLSData) ModulesList.forEach((Module) => {
    ParsedLSData.forEach((e) => {
      if (e.name == Module.name && e.enabled == true) eval(`${Module.name}.${Module.name}On()`);
      else if (e.name == Module.name && e.enabled == false)
        eval(`${Module.name}.${Module.name}Off()`);
    });
  });
}

export function SetupModules() {
  function Add(name, img) {
    const Module = document.createElement("div");

    Module.innerHTML = `
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: end; 
            height: 25vh; 
            width: 25vh; 
            border-radius: 2.5vh; 
            background-color: rgba(255, 255, 255, 0.15); 
            border: solid 0.1vw rgba(255, 255, 255, 0.5); 
            position: relative;"
        >
            <img style="
                position: absolute; 
                top: 35%; 
                left: 50%; 
                transform: translate(-50%, -50%); 
                font-size:  2vh;
                width: 15vh; 
                height: 15vh;" 
            src="${img}"/>
            <h1 style="
                word-wrap: break-word;
                position: absolute; 
                top: 62.5%; 
                left: 50%; 
                transform: 
                translate(-50%, -50%); 
                font-size:  1.5vh; 
                width: 100%; 
                text-align: center;" 
            >${name}</h1>
            <a style="
                background-color: rgba(255, 0, 0, 0.25); 
                width: 100%;
                height: 20%; 
                bottom: 0; 
                border-radius: 0 0 2.5vh 2.5vh; 
                position: relative;
                border: solid 0.1vw rgba(255, 255, 255, 0.5);
            " id="SCMM-${name}-Toggle">
                <p style="
                    position: absolute; 
                    top: 10%; 
                    left: 50%; 
                    transform: translate(-50%, -50%); 
                    font-size:  2vh; 
                ">DISABLED</p>
            </a>
        </div>`;

    const Holder = document.getElementById("SCMM-MODULES");
    if (Holder) Holder.appendChild(Module);
  }

  function EnableToggle(name) {
    document
      .getElementById(`SCMM-${name}-Toggle`)
      .addEventListener("mousedown", function (e) {
        ParsedLSData.forEach((e) => {
          if (e.name == name && e.enabled == true) {
            eval(`${name}.${name}Off()`);
            e.enabled = false;
            localStorage.setItem("SCMM-MODS", JSON.stringify(ParsedLSData));
          } else if (e.name == name && e.enabled == false) {
            eval(`${name}.${name}On()`);
            e.enabled = true;
            localStorage.setItem("SCMM-MODS", JSON.stringify(ParsedLSData));
          }
        });
      });
  }

  function SetCorrectToggle(name) {
    if (ParsedLSData) ParsedLSData.forEach((e) => {
      if (e.name == name) {
        const toggleElement = document.getElementById(`SCMM-${name}-Toggle`);
        if (toggleElement) {
          toggleElement.style.backgroundColor = e.enabled
            ? "rgba(0, 255, 0, 0.25)"
            : "rgba(255, 0, 0, 0.25)";
          toggleElement.querySelector("p").innerHTML = e.enabled
            ? "ENABLED"
            : "DISABLED";
        }
      }
    });
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