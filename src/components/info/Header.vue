<template>
    <div class="info__header info-header">
        <h1 class="info-header__title">Krzysztof Meyer</h1>
        <h2 class="info-header__subtitle">
          Front-End developer 
        </h2>
        <div class="info-header__icons">
          <a 
            v-for="item in headerIcons"
            :key="item.icon"
            :href="item.link"
            target="_blank">
            <CommonIcon
            :iconName="item.icon" 
            :className="item.class" />
          </a>
        </div>
      </div>
</template>

<script setup lang="ts">
const headerIcons = ref([
  {
    icon: "github",
    class: "info-header__icons-item text-secondary-1",
    link: 'https://github.com/VKMStudioX'
  },
  {
    icon: "linkedin",
    class: "info-header__icons-item info-header__icons-item--linkedin",
    link: 'https://www.linkedin.com/in/krzysztof-meyer-01124420b/'
  },
  {
    icon: "gmail",
    class: "info-header__icons-item",
    link: 'mailto:vkmstudio@gmail.com'
  }
]);
</script>