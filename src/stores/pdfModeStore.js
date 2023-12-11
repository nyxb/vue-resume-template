import { defineStore } from 'pinia'

export const usePdfModeStore = defineStore('pdfMode', {
   state: () => ({
      isPdfMode: false,
   }),
   actions: {
      enablePdfMode() {
         this.isPdfMode = true
      },
      disablePdfMode() {
         this.isPdfMode = false
      },
   },
})
