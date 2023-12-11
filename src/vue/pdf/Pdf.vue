<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useData } from '../../composables/data.js'
import { usePdfModeStore } from '../../stores/pdfModeStore'

import ContactSection from '../sections/contact/ContactSection.vue'
import CoverSection from '../sections/cover/CoverSection.vue'

import GallerySection from '../sections/gallery/GallerySection.vue'
import InfoSection from '../sections/info/InfoSection.vue'
import ThreadsSection from '../sections/threads/ThreadsSection.vue'
import TimelineSection from '../sections/timeline/TimelineSection.vue'
import DefaultSection from './PdfSectionTemplate.vue'

// Definieren Sie ein Objekt mit allen Abschnittskomponenten
const SECTION_VUE_COMPONENTS = {
   DefaultSection,
   ContactSection,
   CoverSection,
   GallerySection,
   InfoSection,
   ThreadsSection,
   TimelineSection,
}

const data = useData()
const pdfModeStore = usePdfModeStore()

// Hilfsfunktion, um Komponenten basierend auf ihrem Namen zu erhalten
function _getSectionComponentByName(componentName) {
   return SECTION_VUE_COMPONENTS[componentName] || DefaultSection
}

onMounted(() => {
   pdfModeStore.enablePdfMode()
})

onUnmounted(() => {
   pdfModeStore.disablePdfMode()
})
</script>

<template>
   <div id="pdf-content" class="pdf-content">
      <!-- Iterieren über die Abschnitte und rendern jeder Sektionskomponente -->
      <component
         :is="_getSectionComponentByName(section.component)"
         v-for="section in data.getSections()"
         :key="section.id"
         :section-data="section"
      />
   </div>
</template>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.pdf-content {
  background-color: white;
}

.pdf-content > .section {
  padding: 0;
}
</style>
