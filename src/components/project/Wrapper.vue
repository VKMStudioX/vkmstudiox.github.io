<template>
  <div
    v-for="project in projects"
    :key="project.id"
    class="page-layout page-layout--project main-layout-max"
  >
    <ProjectContent :content="project.content" />
    <ProjectTechnologies :technologies="project.technologies" />
    <ProjectSlides :slides="project.slides" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProjectsStore } from "~/store/projects";

const projectsStore = useProjectsStore();
const { projects } = storeToRefs(projectsStore);
</script>
