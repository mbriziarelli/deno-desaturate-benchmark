import { NS_PER_MICRO, NS_PER_MS, NS_PER_SEC } from "./constants.ts";

function formatTime(nanoseconds: number) {
  let formatted: string;

  if (nanoseconds >= NS_PER_SEC) {
    formatted = `${(nanoseconds / NS_PER_SEC).toFixed(3)}s`;
  } else if (nanoseconds >= NS_PER_MS) {
    formatted = `${(nanoseconds / NS_PER_MS).toFixed(3)}ms`;
  } else if (nanoseconds >= NS_PER_MICRO) {
    formatted = `${(nanoseconds / NS_PER_MICRO).toFixed(3)}μs`;
  } else {
    formatted = `${nanoseconds.toFixed(3)}ns`;
  }

  return formatted;
}

export function displayTime(timerDesc: string, nanoseconds: number) {
  console.log(`${timerDesc}${formatTime(nanoseconds)}`);
}
