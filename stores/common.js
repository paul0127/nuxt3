import { defineStore } from 'pinia'

export const commonStore = defineStore('common', {
  state: () => ({
    activeBtn: null,
  }),
  actions: {
    btnToggle(btn) {
      if (btn == this.activeBtn) {
        this.activeBtn = null
      } else {
        this.activeBtn = btn
      }
    },
    clearBtnToggle() {
        this.activeBtn = null
    },
  },
})
