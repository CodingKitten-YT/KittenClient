export function Init(name) {
    ModAPI.require("settings");
    var gamma = 1000
    const Data = JSON.parse(localStorage.getItem("SCMM-MODS"));
    const ModuleIndex = Data.findIndex((e) => e.name === name);

    if (ModuleIndex !== 1 && !Data[ModuleIndex].enabled) {
        ModAPI.settings.gammaSetting = gamma
        ModAPI.settings.reload()
    } else {
        ModAPI.settings.gammaSetting = 1
        ModAPI.settings.reload()
    }
}
