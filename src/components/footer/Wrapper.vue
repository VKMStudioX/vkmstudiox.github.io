<template>
  <div class="page-layout main-layout-max footer-background">
    <div class="main-layout footer">
      <div class="footer__icons">
        <a 
            v-for="item in footerIcons"
            :key="item.icon"
            :href="item.link"
            target="_blank">
            <CommonIcon 
            :iconName="item.icon" 
            :className="item.class" />
        </a>
        </div>
        <span class="footer__text">
            <CommonIcon iconName="copyright" className="footer__icon--copyright" /> Krzysztof Meyer 2022</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const footerIcons = ref([
   {
    icon: "github",
    class: "info-header__icons-item text-white",
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
