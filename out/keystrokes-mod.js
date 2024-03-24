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
    keystrokes.innerHTML = `<div id="wkey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: W;">W</div>
    <div id="akey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: A;">A</div>
    <div id="skey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: S;">S</div>
    <div id="dkey" style="border-radius: 1vh;min-height: 6vh;min-width: 6vh;display: flex;justify-content: center;align-items: center;font-family: 'Minecraftia';grid-area: D;">D</div>`

    document.body.appendChild(keystrokes);
    ModAPI.displayToChat({msg: "Keystrokes Mod has been Loaded!"})
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5c3Ryb2tlcy1tb2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFlBQVkscUJBQXFCO0FBQ2pDLENBQUMsUUFBUTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTixDQUFDO0FBQ0Q7QUFDQSxpREFBaUQsb0JBQW9CLDRCQUE0QjtBQUNqRywrQ0FBK0MsNEJBQTRCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlDQUFpQyxjQUFjLG1CQUFtQixvQkFBb0IsbUJBQW1CLFNBQVMsVUFBVSxxQ0FBcUMsU0FBUztBQUNqTixxRUFBcUUsZ0JBQWdCLGVBQWUsY0FBYyx3QkFBd0Isb0JBQW9CLDJCQUEyQixhQUFhO0FBQ3RNLDZDQUE2QyxnQkFBZ0IsZUFBZSxjQUFjLHdCQUF3QixvQkFBb0IsMkJBQTJCLGFBQWE7QUFDOUssNkNBQTZDLGdCQUFnQixlQUFlLGNBQWMsd0JBQXdCLG9CQUFvQiwyQkFBMkIsYUFBYTtBQUM5Syw2Q0FBNkMsZ0JBQWdCLGVBQWUsY0FBYyx3QkFBd0Isb0JBQW9CLDJCQUEyQixhQUFhO0FBQzlLO0FBQ0E7QUFDQSwwQkFBMEIsdUNBQXVDO0FBQ2pFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXlzdHJva2VzLW1vZC8uL3NyYy9NYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIk1vZEFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xyXG5cclxubGV0IElzSW5HYW1lID0gZmFsc2U7XHJcbmxldCBwcmVzc2VkS2V5cyA9IHt9O1xyXG5cclxuY29uc3QgQ2hlY2tGb3JQbGF5ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoSXNJbkdhbWUpIHsgQ3JlYXRlS2V5c3Ryb2tlcygpOyBjbGVhckludGVydmFsKENoZWNrRm9yUGxheWVyKTsgfVxyXG4gICAgIGVsc2UgeyBpZiAoTW9kQVBJLnBsYXllcikgeyBJc0luR2FtZSA9IHRydWU7IH0gfVxyXG59LCAxMDApOyAvLyBXaGVuIHRoZSBwbGF5ZXIgZXhpdHMgdGhlIHdvcmxkIHRoZSBrZXlzdHJva2VzIHN0aWxsIGV4aXN0LCBmaXggdGhpcy5cclxuXHJcbnNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleXN0cm9rZXNcIikpIHtcclxuICAgICAgICBjb25zdCBwcmVzc2FibGVLZXlzID0gW1wid1wiLCBcImFcIiwgXCJzXCIsIFwiZFwiXTtcclxuICAgICAgICBwcmVzc2FibGVLZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2tleX1rZXlgKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgcHJlc3NlZEtleXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAvLyBJJ20gc3VwZXIgdGlyZWQgcmlnaHQgbm93IHNvIGlmIHRoZXJlcyBhIGJldHRlciB3YXkgdG8gZG8gdGhpcyBJIGRvbnQgcmVhbGx5IGNhcmUuXHJcbn0sIDEwMCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IHByZXNzZWRLZXlzW2Uua2V5XSA9IHRydWU7IH0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHsgZGVsZXRlIHByZXNzZWRLZXlzW2Uua2V5XTsgfSk7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVLZXlzdHJva2VzKCkge1xyXG4gICAgY29uc3Qga2V5c3Ryb2tlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBrZXlzdHJva2VzLmlkID0gXCJrZXlzdHJva2VzXCJcclxuICAgIGtleXN0cm9rZXMuc3R5bGUgPSBgZm9udC1zaXplOiAydmg7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTM1JSk7ZGlzcGxheTogZ3JpZDt3aWR0aDogZml0LWNvbnRlbnQ7aGVpZ2h0OiBmaXQtY29udGVudDtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDA7Ym90dG9tOiAwO2dyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBXIC5cIiBcIkEgUyBEXCI7Z2FwOiA1cHg7YFxyXG4gICAga2V5c3Ryb2tlcy5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIndrZXlcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDF2aDttaW4taGVpZ2h0OiA2dmg7bWluLXdpZHRoOiA2dmg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2ZvbnQtZmFtaWx5OiAnTWluZWNyYWZ0aWEnO2dyaWQtYXJlYTogVztcIj5XPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiYWtleVwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMXZoO21pbi1oZWlnaHQ6IDZ2aDttaW4td2lkdGg6IDZ2aDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7Zm9udC1mYW1pbHk6ICdNaW5lY3JhZnRpYSc7Z3JpZC1hcmVhOiBBO1wiPkE8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJza2V5XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxdmg7bWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IFM7XCI+UzwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImRrZXlcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDF2aDttaW4taGVpZ2h0OiA2dmg7bWluLXdpZHRoOiA2dmg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2ZvbnQtZmFtaWx5OiAnTWluZWNyYWZ0aWEnO2dyaWQtYXJlYTogRDtcIj5EPC9kaXY+YFxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoa2V5c3Ryb2tlcyk7XHJcbiAgICBNb2RBUEkuZGlzcGxheVRvQ2hhdCh7bXNnOiBcIktleXN0cm9rZXMgTW9kIGhhcyBiZWVuIExvYWRlZCFcIn0pXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=