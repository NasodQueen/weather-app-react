import { Moon } from "lunarphase-js";

export default function LunarPhase() {
  const date = new Date();
  const phase = Moon.lunarPhase(date);
  return `${phase} Moon`;
}
