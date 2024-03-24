/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
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
    keystrokes.innerHTML = `<div id="wkey" style="min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: W;">W</div>
    <div id="akey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: A;">A</div>
    <div id="skey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: S;">S</div>
    <div id="dkey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: D;">D</div>`

    document.body.appendChild(keystrokes);
    ModAPI.displayToChat({msg: "Keystrokes Mod has been Loaded!"})
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5c3Ryb2tlcy1tb2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QyxZQUFZLHFCQUFxQjtBQUNqQyxDQUFDLFFBQVE7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTixDQUFDOztBQUVELGlEQUFpRCxvQkFBb0IsNEJBQTRCO0FBQ2pHLCtDQUErQyw0QkFBNEI7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQ0FBaUMsY0FBYyxtQkFBbUIsb0JBQW9CLG1CQUFtQixTQUFTLFVBQVUscUNBQXFDLFNBQVM7QUFDak4sa0VBQWtFLGVBQWUsY0FBYyx3QkFBd0Isb0JBQW9CLDJCQUEyQixhQUFhO0FBQ25MLDZDQUE2QyxnQkFBZ0IsZUFBZSxjQUFjLHdCQUF3QixvQkFBb0IsMkJBQTJCLGFBQWE7QUFDOUssNkNBQTZDLGdCQUFnQixlQUFlLGNBQWMsd0JBQXdCLG9CQUFvQiwyQkFBMkIsYUFBYTtBQUM5Syw2Q0FBNkMsZ0JBQWdCLGVBQWUsY0FBYyx3QkFBd0Isb0JBQW9CLDJCQUEyQixhQUFhOztBQUU5SztBQUNBLDBCQUEwQix1Q0FBdUM7QUFDakUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tleXN0cm9rZXMtbW9kLy4vc3JjL01haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG5cbmxldCBJc0luR2FtZSA9IGZhbHNlO1xubGV0IHByZXNzZWRLZXlzID0ge307XG5cbmNvbnN0IENoZWNrRm9yUGxheWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChJc0luR2FtZSkgeyBDcmVhdGVLZXlzdHJva2VzKCk7IGNsZWFySW50ZXJ2YWwoQ2hlY2tGb3JQbGF5ZXIpOyB9XG4gICAgIGVsc2UgeyBpZiAoTW9kQVBJLnBsYXllcikgeyBJc0luR2FtZSA9IHRydWU7IH0gfVxufSwgMTAwKTsgLy8gV2hlbiB0aGUgcGxheWVyIGV4aXRzIHRoZSB3b3JsZCB0aGUga2V5c3Ryb2tlcyBzdGlsbCBleGlzdCwgZml4IHRoaXMuXG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXlzdHJva2VzXCIpKSB7XG4gICAgICAgIGNvbnN0IHByZXNzYWJsZUtleXMgPSBbXCJ3XCIsIFwiYVwiLCBcInNcIiwgXCJkXCJdO1xuICAgICAgICBwcmVzc2FibGVLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtrZXl9a2V5YCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBwcmVzc2VkS2V5c1trZXldKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gLy8gSSdtIHN1cGVyIHRpcmVkIHJpZ2h0IG5vdyBzbyBpZiB0aGVyZXMgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMgSSBkb250IHJlYWxseSBjYXJlLlxufSwgMTAwKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBwcmVzc2VkS2V5c1tlLmtleV0gPSB0cnVlOyB9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkgeyBkZWxldGUgcHJlc3NlZEtleXNbZS5rZXldOyB9KTtcblxuZnVuY3Rpb24gQ3JlYXRlS2V5c3Ryb2tlcygpIHtcbiAgICBjb25zdCBrZXlzdHJva2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBrZXlzdHJva2VzLmlkID0gXCJrZXlzdHJva2VzXCJcbiAgICBrZXlzdHJva2VzLnN0eWxlID0gYGZvbnQtc2l6ZTogMnZoO3RyYW5zZm9ybTogdHJhbnNsYXRlKC0xMCUsIC0zNSUpO2Rpc3BsYXk6IGdyaWQ7d2lkdGg6IGZpdC1jb250ZW50O2hlaWdodDogZml0LWNvbnRlbnQ7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwO2JvdHRvbTogMDtncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gVyAuXCIgXCJBIFMgRFwiO2dhcDogNXB4O2BcbiAgICBrZXlzdHJva2VzLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwid2tleVwiIHN0eWxlPVwibWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IFc7XCI+VzwvZGl2PlxuICAgIDxkaXYgaWQ9XCJha2V5XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxdmg7bWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IEE7XCI+QTwvZGl2PlxuICAgIDxkaXYgaWQ9XCJza2V5XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxdmg7bWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IFM7XCI+UzwvZGl2PlxuICAgIDxkaXYgaWQ9XCJka2V5XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxdmg7bWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IEQ7XCI+RDwvZGl2PmBcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoa2V5c3Ryb2tlcyk7XG4gICAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogXCJLZXlzdHJva2VzIE1vZCBoYXMgYmVlbiBMb2FkZWQhXCJ9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==