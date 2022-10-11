<template>
  <div class="project-technologies">
    <div
      v-for="item in technologies"
      :key="item.icon"
      class="project-technologies__item"
    >
      <CommonIcon :iconName="item.icon" :className="item.class" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  technologies: object[];
}

const props = withDefaults(defineProps<Props>(), {});
const { technologies } = toRefs(props);
</script>