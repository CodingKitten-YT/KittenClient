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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5c3Ryb2tlcy1tb2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFlBQVkscUJBQXFCO0FBQ2pDLENBQUMsUUFBUTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTixDQUFDO0FBQ0Q7QUFDQSxpREFBaUQsb0JBQW9CLDRCQUE0QjtBQUNqRywrQ0FBK0MsNEJBQTRCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlDQUFpQyxjQUFjLG1CQUFtQixvQkFBb0IsbUJBQW1CLFNBQVMsVUFBVSxxQ0FBcUMsU0FBUztBQUNqTixrRUFBa0UsZUFBZSxjQUFjLHdCQUF3QixvQkFBb0IsMkJBQTJCLGFBQWE7QUFDbkwsNkNBQTZDLGdCQUFnQixlQUFlLGNBQWMsd0JBQXdCLG9CQUFvQiwyQkFBMkIsYUFBYTtBQUM5Syw2Q0FBNkMsZ0JBQWdCLGVBQWUsY0FBYyx3QkFBd0Isb0JBQW9CLDJCQUEyQixhQUFhO0FBQzlLLDZDQUE2QyxnQkFBZ0IsZUFBZSxjQUFjLHdCQUF3QixvQkFBb0IsMkJBQTJCLGFBQWE7QUFDOUs7QUFDQTtBQUNBLDBCQUEwQix1Q0FBdUM7QUFDakUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tleXN0cm9rZXMtbW9kLy4vc3JjL01haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XHJcblxyXG5sZXQgSXNJbkdhbWUgPSBmYWxzZTtcclxubGV0IHByZXNzZWRLZXlzID0ge307XHJcblxyXG5jb25zdCBDaGVja0ZvclBsYXllciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmIChJc0luR2FtZSkgeyBDcmVhdGVLZXlzdHJva2VzKCk7IGNsZWFySW50ZXJ2YWwoQ2hlY2tGb3JQbGF5ZXIpOyB9XHJcbiAgICAgZWxzZSB7IGlmIChNb2RBUEkucGxheWVyKSB7IElzSW5HYW1lID0gdHJ1ZTsgfSB9XHJcbn0sIDEwMCk7IC8vIFdoZW4gdGhlIHBsYXllciBleGl0cyB0aGUgd29ybGQgdGhlIGtleXN0cm9rZXMgc3RpbGwgZXhpc3QsIGZpeCB0aGlzLlxyXG5cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5c3Ryb2tlc1wiKSkge1xyXG4gICAgICAgIGNvbnN0IHByZXNzYWJsZUtleXMgPSBbXCJ3XCIsIFwiYVwiLCBcInNcIiwgXCJkXCJdO1xyXG4gICAgICAgIHByZXNzYWJsZUtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7a2V5fWtleWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBwcmVzc2VkS2V5c1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IC8vIEknbSBzdXBlciB0aXJlZCByaWdodCBub3cgc28gaWYgdGhlcmVzIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzIEkgZG9udCByZWFsbHkgY2FyZS5cclxufSwgMTAwKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7IGUucHJldmVudERlZmF1bHQoKTsgcHJlc3NlZEtleXNbZS5rZXldID0gdHJ1ZTsgfSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkgeyBkZWxldGUgcHJlc3NlZEtleXNbZS5rZXldOyB9KTtcclxuXHJcbmZ1bmN0aW9uIENyZWF0ZUtleXN0cm9rZXMoKSB7XHJcbiAgICBjb25zdCBrZXlzdHJva2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGtleXN0cm9rZXMuaWQgPSBcImtleXN0cm9rZXNcIlxyXG4gICAga2V5c3Ryb2tlcy5zdHlsZSA9IGBmb250LXNpemU6IDJ2aDt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAtMzUlKTtkaXNwbGF5OiBncmlkO3dpZHRoOiBmaXQtY29udGVudDtoZWlnaHQ6IGZpdC1jb250ZW50O3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDtib3R0b206IDA7Z3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIFcgLlwiIFwiQSBTIERcIjtnYXA6IDVweDtgXHJcbiAgICBrZXlzdHJva2VzLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwid2tleVwiIHN0eWxlPVwibWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IFc7XCI+VzwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImFrZXlcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDF2aDttaW4taGVpZ2h0OiA2dmg7bWluLXdpZHRoOiA2dmg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2ZvbnQtZmFtaWx5OiAnTWluZWNyYWZ0aWEnO2dyaWQtYXJlYTogQTtcIj5BPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwic2tleVwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMXZoO21pbi1oZWlnaHQ6IDZ2aDttaW4td2lkdGg6IDZ2aDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7Zm9udC1mYW1pbHk6ICdNaW5lY3JhZnRpYSc7Z3JpZC1hcmVhOiBTO1wiPlM8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJka2V5XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxdmg7bWluLWhlaWdodDogNnZoO21pbi13aWR0aDogNnZoO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmb250LWZhbWlseTogJ01pbmVjcmFmdGlhJztncmlkLWFyZWE6IEQ7XCI+RDwvZGl2PmBcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGtleXN0cm9rZXMpO1xyXG4gICAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogXCJLZXlzdHJva2VzIE1vZCBoYXMgYmVlbiBMb2FkZWQhXCJ9KVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9