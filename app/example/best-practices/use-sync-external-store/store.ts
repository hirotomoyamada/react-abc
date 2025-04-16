import { runIfFunc } from "@yamada-ui/react"

interface State {
  [key: number]: boolean
}

function createStore() {
  let state: State = {}
  const listeners = new Set<() => void>()

  return {
    getSnapshot: function () {
      return state
    },
    getSnapshotWithId: function (id: number) {
      return function () {
        return state[id]
      }
    },
    setState: function (newState: ((prevState: State) => State) | State) {
      state = runIfFunc(newState, state)
      listeners.forEach((listener) => listener())
    },
    subscribe: function (listener: () => void) {
      listeners.add(listener)

      return function () {
        listeners.delete(listener)
      }
    },
  }
}

export const store = createStore()
