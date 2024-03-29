ModAPI.require("player")

export function Init(name) {
    const Data = JSON.parse(localStorage.getItem("SCMM-MODS"));
    const ModuleIndex = Data.findIndex((e) => e.name === name);
    ModAPI.addEventListener("update", function (){
        if (ModuleIndex !== 1 && !Data[ModuleIndex].enabled) {
            // this prevents anticheats thinking this is a hacked client
            if(ModAPI.player.moveForward != 0 && !ModAPI.player.isSneaking() && !ModAPI.player.isBlocking()){
            // TODO: add a hunger check so it would only enable togglesprint if hunger is more than 6
                ModAPI.player.setSprinting({flag: true})
                ModAPI.player.reload()
            } else {
                ModAPI.player.setSprinting({flag: false})
                ModAPI.player.reload()
            }
        } else {
            ModAPI.player.setSprinting({flag: false})
            ModAPI.player.reload()
        }
    })
}