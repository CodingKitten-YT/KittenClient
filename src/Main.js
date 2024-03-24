ModAPI.require("player");

let IsInGame = false;
let pressedKeys = {};

const CheckForPlayer = setInterval(() => {
    if (IsInGame) { CreateKeystrokes(); clearInterval(CheckForPlayer); }
     else { if (ModAPI.player) { IsInGame = true; } }
}, 100); // When the player exits the world the keystrokes still exist, fix this.

setInterval(() => {
    if (document.getElementById("keystrokes")) {
        const pressableKeys = ["w", "a", "s", "d"];
        pressableKeys.forEach(key => {
            const element = document.getElementById(`${key}key`);
            if (element && pressedKeys[key]) {
                element.style.color = "black";
                element.style.background = "rgba(255, 255, 255, 0.5)";
            } else {
                element.style.color = "white";
                element.style.background = "rgba(0, 0, 0, 0.5)";
            }
        });
    } // I'm super tired right now so if theres a better way to do this I dont really care.
}, 100);

window.addEventListener("keydown", function(e) { e.preventDefault(); pressedKeys[e.key] = true; });
window.addEventListener("keyup", function(e) { delete pressedKeys[e.key]; });

function CreateKeystrokes() {
    const keystrokes = document.createElement("div");
    keystrokes.id = "keystrokes"
    keystrokes.style = `font-size: 2vh;transform: translate(-10%, -35%);display: grid;width: fit-content;height: fit-content;position: absolute;right: 0;bottom: 0;grid-template-areas: ". W ." "A S D";gap: 5px;`
    keystrokes.innerHTML = `<div id="wkey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: W;">W</div>
    <div id="akey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: A;">A</div>
    <div id="skey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: S;">S</div>
    <div id="dkey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: D;">D</div>`

    document.body.appendChild(keystrokes);
    ModAPI.displayToChat({msg: "Keystrokes Mod has been Loaded!"})
}