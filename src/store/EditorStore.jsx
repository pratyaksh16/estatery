import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useEditorStore = create(devtools(set => ({
  checkmarkSearchFilter: [],
  manualSearchFilter: ["All","All"],

  setState: (stateName, payload) => {
    set(state => {
      return state[stateName] = payload
    })

  },
})))