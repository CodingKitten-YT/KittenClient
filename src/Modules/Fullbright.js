let int;

export function FullbrightOn() {
  clearInterval(int);
  int = setInterval(function () {
    ModAPI.blocks.air.lightValue = 10;
    ModAPI.blocks.water.lightValue = 10;
    ModAPI.blocks.air.reload();
    ModAPI.blocks.water.reload();
  }, 5000);
}

export function FullbrightOff() {
  clearInterval(int);
  int = setInterval(function () {
    ModAPI.blocks.air.lightValue = 1;
    ModAPI.blocks.water.lightValue = 1;
    ModAPI.blocks.air.reload();
    ModAPI.blocks.water.reload();
  }, 5000);
}
