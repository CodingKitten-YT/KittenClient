const { CreateMenu } = require("./GUI/Menu");
const { StartupModules } = require("./GUI/Modules");

StartupModules();

window.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() == "insert") {
    CreateMenu();
  }
});
