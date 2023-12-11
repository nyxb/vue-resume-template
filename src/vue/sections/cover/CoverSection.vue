<script setup>
import { computed } from 'vue'
import SectionTemplate from '../_templates/SectionTemplate.vue'
import InlineList from '../../widgets/InlineList.vue'
import SocialLinks from '../../widgets/SocialLinks.vue'

import { usePdfModeStore } from '../../../stores/pdfModeStore'

// Pfad anpassen

const props = defineProps({
   sectionData: Object,
})
const pdfModeStore = usePdfModeStore()

const coverTitle = computed(() => {
   const welcomeText = props.sectionData.content.locales.welcome
   if (pdfModeStore.isPdfMode) {
      const spanContentMatch = welcomeText.match(/<span[^>]*>(.*?)<\/span>/i)
      return spanContentMatch ? `<span class='text-primary'>${spanContentMatch[1]}</span>` : welcomeText
   }
   return welcomeText
})
</script>

<template>
   <SectionTemplate :section-data="props.sectionData">
      <!-- Titel -->
      <h1 class="cover-title display-1" v-html="coverTitle" />

      <!-- Divider -->
      <hr class="solid-divider ms-1 me-1">

      <!-- Info-Elemente -->
      <InlineList class="info-list" :items="props.sectionData.content.items.contactListItems" />

      <!-- Beschreibung -->
      <p class="cover-description lead text-normal mb-4 mb-md-5" v-html="props.sectionData.content.locales.bio" />

      <!-- Social Links -->
      <SocialLinks :items="props.sectionData.content.items.socialCircles" />
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
