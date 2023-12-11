/**
 * Created by Dennis Ollhoff on 08.23.2023
 * Main router.
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useData } from '../composables/data.js'
import RouterView from '../vue/core/RouterView.vue'
import Pdf from '../vue/pdf/Pdf.vue'

export function createAppRouter() {
   const data = useData()
   const sections = data.getSections()
   const homeSection = sections[0] || { id: 'home' }

   /** Create Home */
   const routeList = [{
      path: '/',
      name: homeSection.id,
      component: RouterView,
   }]

   /** Create Section Routes */
   for (let i = 1; i < sections.length; i++) {
      const sectionId = sections[i].id

      routeList.push({
         path: `/${sectionId}`,
         name: sectionId,
         component: RouterView,
      })
   }

   /** Create Pdf Preview */
   routeList.push({
      path: '/pdf-preview',
      name: 'PdfPreview',
      component: Pdf,
   })

   /** Wildcard Route */
   routeList.push({
      path: '/:pathMatch(.*)*',
      redirect: '/',
   })

   return createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: routeList,
   })
}
