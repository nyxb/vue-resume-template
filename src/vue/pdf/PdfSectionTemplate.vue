<script setup>
import { computed } from 'vue'
import { useNavigation } from '../../composables/navigation.js'
import { useData } from '../../composables/data.js'

const props = defineProps({
   sectionData: Object,
})

const data = useData()
const navigation = useNavigation()

const classList = computed(() => {
   let classList = 'section'
   if (props.sectionData.cover)
      classList += ' section-cover'
   return classList
})

const sectionTitle = computed(() => {
   return data.getString(props.sectionData.id)
})
</script>

<template>
   <!-- Website Section -->
   <section :id="props.sectionData.id" :class="classList">
      <!-- Section Container -->
      <div v-if="props.sectionData.content" class="section-container">
         <!-- Section Header -->
         <div v-if="props.sectionData.content.locales.title" class="section-header">
            <!-- Title -->
            <h1 class="section-title mb-1 mb-lg-2 fw-bold text-uppercase" v-html="sectionTitle" />

            <!-- Divider -->
            <hr class="solid-divider ms-1 me-1 mb-3 mb-lg-4">

            <!-- Description -->
            <p v-if="props.sectionData.content.locales.description" class="lead text-muted" v-html="props.sectionData.content.locales.description" />
         </div>

         <!-- Section Content -->
         <div class="section-content">
            <slot />
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.section {
    display: flex;
    flex-direction: column;

    &-cover {
        background-color: white;
    }
}

.section-container {
    width: min(100%, $max-content-width);
    padding: 1.5rem 1.5rem;
}

.section-header {
    margin-bottom: 2rem;
}
</style>
