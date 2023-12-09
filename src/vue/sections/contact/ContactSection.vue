<script setup>
import SectionTemplate from '../_templates/SectionTemplate.vue'

// import SubHeading from '../_templates/SubHeading.vue'

// import ContactForm from './ContactForm.vue'
import ContactOptions from './ContactOptions.vue'

/**
 * @property {object} sectionData
 */
const props = defineProps({
   sectionData: Object,
})
</script>

<template>
   <SectionTemplate :section-data="props.sectionData">
      <!-- Form -->
      <!-- <ContactForm /> -->

      <!-- SubHeading -->
      <!-- <SubHeading
         :title="props.sectionData.content.locales.subtitle"
         :description="props.sectionData.content.locales.subtitleDescription"
         class="mt-4"
      /> -->

      <!-- Contact Items -->
      <ContactOptions :items="props.sectionData.content.items" />
   </SectionTemplate>
</template>

<style lang="scss" scoped>
</style>
