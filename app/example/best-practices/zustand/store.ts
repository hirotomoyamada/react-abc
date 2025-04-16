import { create } from "zustand"

interface Store {
  selectedIdMap: { [key: number]: boolean }
  setSelectedId: (id: number, selected: boolean) => void
}

export const useStore = create<Store>((set) => ({
  selectedIdMap: {},
  setSelectedId: (id: number, selected: boolean) => {
    set((state) => {
      return { selectedIdMap: { ...state.selectedIdMap, [id]: selected } }
    })
  },
}))
