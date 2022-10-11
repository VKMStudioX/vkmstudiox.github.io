<template>
  <IconComputer v-if="iconName === 'computer'" :class="className" />
  <IconCode v-if="iconName === 'code'" :class="className" />
  <IconTerminal v-if="iconName === 'terminal'" :class="className" />
  <IconVue v-if="iconName === 'vue'" :class="className" />
  <IconVite v-if="iconName === 'vite'" :class="className" />
  <IconSass v-if="iconName === 'sass'" :class="className" />
  <IconCSS3 v-if="iconName === 'css3'" class="common-icon--css3" :class="className"/>
  <IconHTML5 v-if="iconName === 'html5'" class="common-icon--html5" :class="className" />
  <IconJS v-if="iconName === 'js'" :class="className" />
  <IconTS v-if="iconName === 'ts'" :class="className" />
  <IconLaravel v-if="iconName === 'laravel'" :class="className" />
  <IconPHP v-if="iconName === 'php'" :class="className" />
  <IconReact v-if="iconName === 'react'" :class="className" />
  <IconAngular v-if="iconName === 'angular'" :class="className" />
  <IconExpress v-if="iconName === 'express'" :class="className" class="common-icon--express" />
  <IconNodeJS v-if="iconName === 'nodejs'" :class="className" />
  <IconMongoDB v-if="iconName === 'mongodb'" :class="className" />
  <IconHeart v-if="iconName === 'heart'" :class="className" />
  <IconOne v-if="iconName === 'one'" :class="className" />
  <IconGitHub v-if="iconName === 'github'" :class="className" />
  <IconLinkedIn v-if="iconName === 'linkedin'" :class="className" />
  <IconGmail v-if="iconName === 'gmail'" :class="className" />
  <IconWWW v-if="iconName === 'www'" :class="className" />
  <IconCopyright v-if="iconName === 'copyright'" :class="className" /> 
</template>

<script setup lang="ts">
import IconComputer from '~icons/noto/desktop-computer';
import IconCode from "~icons/line-md/document-code";
import IconTerminal from "~icons/ant-design/code-filled";
import IconVue from "~icons/logos/vue";
import IconVite from "~icons/logos/vitejs";
import IconReact from "~icons/logos/react";
import IconAngular from "~icons/logos/angular-icon";
import IconLaravel from "~icons/logos/laravel";
import IconJS from "~icons/vscode-icons/file-type-js-official";
import IconTS from "~icons/vscode-icons/file-type-typescript-official";
import IconPHP from "~icons/logos/php";
import IconSass from '~icons/logos/sass';
import IconCSS3 from '~icons/cib/css3-shiled';
import IconHTML5 from '~icons/cib/html5';
import IconExpress from '~icons/simple-icons/express';
import IconNodeJS from '~icons/logos/nodejs-icon';
import IconMongoDB from '~icons/logos/mongodb-icon';
import nodeRed from '~icons/cib/node-red';
import IconHeart from "~icons/fluent-emoji/red-heart";
import IconOne from "~icons/ic/round-looks-one";
import IconGitHub from "~icons/fa-brands/github-square";
import IconLinkedIn from "~icons/logos/linkedin-icon";
import IconGmail from "~icons/logos/google-gmail";
import IconWWW from "~icons/iconoir/internet";
import IconCopyright from "~icons/fa-regular/copyright";

interface Props {
  iconName: string
  className: string
}
const props = withDefaults(defineProps<Props>(), {})
const { iconName, className } = toRefs(props)
</script>
