<template>
  <ConsoleLoader v-if="!initialised" />
  <div v-if="initialised" class="page-layout main-layout-max info-background">
    <div class="main-layout info">
      <InfoHeader />
      <InfoContent />
      <InfoSkills />
    </div>
  </div>
  <ProjectWrapper v-if="initialised" />
  <FooterWrapper v-if="initialised" />
</template>

<script setup lang="ts">
import { useStore } from "~/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { initialised } = storeToRefs(store);
</script>

<route>
{
  name: "glowna",
  meta: {
    layout: 'default'
  }
}
</route>
