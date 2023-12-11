<script setup>
import { computed } from 'vue'
import SectionTemplate from '../_templates/SectionTemplate.vue'
import { useData } from '../../../composables/data.js'
import { useNavigation } from '../../../composables/navigation.js'

import { usePdfModeStore } from '../../../stores/pdfModeStore'

// Stellen Sie sicher, dass der Pfad korrekt ist

const props = defineProps({
   sectionData: Object,
})
const data = useData()
const navigation = useNavigation()
const pdfModeStore = usePdfModeStore()

const coverTitle = computed(() => {
   const localeData = props.sectionData.content.locales[navigation.selectedLanguage]
   const textToDisplay = navigation.isAllAtOnceMode() ? localeData.welcome : localeData.welcomeShort

   if (pdfModeStore.isPdfMode) {
      const spanContentMatch = textToDisplay.match(/<span[^>]*>(.*?)<\/span>/i)
      return spanContentMatch ? spanContentMatch[1] : textToDisplay
   }

   return textToDisplay
})
</script>

<template>
   <SectionTemplate :section-data="props.sectionData">
      <!-- Title -->
      <h1 class="cover-title display-1" v-html="coverTitle" />

      <!-- Divider, Info Items, Description, Social Links... -->
   </SectionTemplate>
</template>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.cover-title {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: bold;
}

.solid-divider {
    @include media-breakpoint-up($navigation-sidebar-breakpoint) {
        display: none;
    }
}

.info-list {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-bottom: 2.5rem),
        lg: (margin-bottom: 2rem),
        md: (margin-bottom: 1.2rem)
    ))
}
</style>
