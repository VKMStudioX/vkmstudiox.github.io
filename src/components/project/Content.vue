<template>
  <div class="project-content">
    <div class="project-content__content">
      <h1 class="info-header__title">{{ content.title }}</h1>
      <span class="info__content-text project-content__text">
        {{ content.content }}
      </span>
    </div>

    <div class="project-content__links">
      <div
        v-for="item in content.links"
        :key="item.icon"
        class="project-content__link"
      >
        <a :href="item.link" target="_blank" class="">
          <CommonIcon :iconName="item.icon" :className="item.class" />
        </a>
        <a :href="item.link" target="_blank" class="">{{ item.type }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  content: object;
}

const props = withDefaults(defineProps<Props>(), {});
const { content } = toRefs(props);
</script>