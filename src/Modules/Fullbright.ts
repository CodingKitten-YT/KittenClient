let int;

export function Init(name) {
  const Data = JSON.parse(localStorage.getItem("SCMM-MODS"));
  const ModuleIndex = Data.findIndex((e) => e.name === name);

  if (ModuleIndex !== 1 && !Data[ModuleIndex].enabled) {
    clearInterval(int);
    int = setInterval(function () {
      // dont remove the //@ts-ignore comments.
      //@ts-ignore
      ModAPI.blocks.air.lightValue = 10;
      //@ts-ignore
      ModAPI.blocks.water.lightValue = 10;
      //@ts-ignore
      ModAPI.blocks.air.reload();
      //@ts-ignore
      ModAPI.blocks.water.reload();
    }, 5000);
  } else {
    clearInterval(int);
    int = setInterval(function () {
      //@ts-ignore
      ModAPI.blocks.air.lightValue = 1;
      //@ts-ignore
      ModAPI.blocks.water.lightValue = 1;
      //@ts-ignore
      ModAPI.blocks.air.reload();
      //@ts-ignore
      ModAPI.blocks.water.reload();
    }, 5000);
  }
}

//I think i broke this idk i cant tell