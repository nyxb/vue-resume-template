import { createApp } from 'vue'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import PdfComponent from '../vue/pdf/Pdf.vue'
import { useData } from './data.js'

const data = useData()

export async function downloadPdf(filename = 'resume.pdf') {
   const pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
   })

   const sections = data.getSections()

   for (const section of sections) {
      const appContainer = document.createElement('div')
      document.body.appendChild(appContainer)

      const app = createApp(PdfComponent, { sectionData: section })
      app.mount(appContainer)

      await new Promise(resolve => setTimeout(resolve, 4000))

      const canvas = await html2canvas(appContainer)
      const imgData = canvas.toDataURL('image/png')

      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

      app.unmount()
      document.body.removeChild(appContainer)

      if (sections.indexOf(section) !== sections.length - 1)
         pdf.addPage()
   }

   pdf.deletePage(pdf.internal.getNumberOfPages())
   pdf.save(filename)
}
