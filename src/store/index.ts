import { acceptHMRUpdate, defineStore } from 'pinia'


export interface MainState {
  initialised: boolean
}

export const useStore = defineStore('main', {
  state(): MainState {
    return {
      initialised: false,
    }
  },
  actions: {},
  getters: {
  },
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
