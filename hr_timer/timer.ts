import { NS_PER_SEC } from './constants.ts'

const runningTimers: { [_: string]: number } = {}

export function timerStart(timerDesc: string) {
  if (runningTimers[timerDesc]) {
    throw new Error(`"${timerDesc}" timer is already running.`)
  } else {
    runningTimers[timerDesc] = performance.now()
  }
}

export function timerEnd(timerDesc: string) {
  if (!runningTimers[timerDesc]) {
    throw new Error(`"${timerDesc}" timer doesn't exists.`)
  } else {
    const start = runningTimers[timerDesc]

    delete runningTimers[timerDesc]
    return (performance.now() - start) * NS_PER_SEC
  }
}
