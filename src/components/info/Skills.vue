<template>
      <div class="info__skills">
        <div class="info-skills">
          <div
            v-for="item in skillsIcons"
            :key="item.icon"
            class="info-skills__item"
          >
            <CommonIcon :iconName="item.icon" :className="item.class" />
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
const skillsIcons = ref([
  {
    icon: "vue",
    class: "info-skills__item--icon",
  },
  {
    icon: "vite",
    class: "info-skills__item--icon",
  },
  {
    icon: "sass",
    class: "info-skills__item--icon",
  },
  {
    icon: "css3",
    class: "info-skills__item--icon",
  },
  {
    icon: "html5",
    class: "info-skills__item--icon",
  },
  {
    icon: "js",
    class: "info-skills__item--icon",
  },
  {
    icon: "ts",
    class: "info-skills__item--icon",
  },
  {
    icon: "laravel",
    class: "info-skills__item--icon",
  },
]);
</script>
