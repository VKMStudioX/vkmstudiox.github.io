<template>
  <div class="load" ref="load">
  <pre class="term" ref="textarea">krzysztof@dev:~$ </pre>
</div>
</template>

<script setup>
import { output } from './outputData.js'
import { useStore } from '../../store/index'
import { storeToRefs } from 'pinia'

const store = useStore()
const { initialised } = storeToRefs(useStore())

onMounted(() => {

var textarea = document.querySelector('.term');
var speed = 50; //Writing speed in milliseconds
var text = 'sh krzysztof_portfolio.sh';

var i = 0;


function runner() {
  textarea.insertAdjacentHTML("beforeend",text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.insertAdjacentHTML("beforeend","<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 500);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.insertAdjacentHTML("beforeend","[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.insertAdjacentHTML("beforeend","[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.insertAdjacentHTML("beforeend","[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.insertAdjacentHTML("beforeend","[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.insertAdjacentHTML("beforeend","[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.insertAdjacentHTML("beforeend","<br>Initialising...<br>");
            console.log('initialised')
            initialised.value = true;
            window.scrollTo(0, 0);  
      }
    },10);
}

runner();

})

</script>

<style scoped>
html,
body {
  margin: 0 auto;
  height: 100%;
}

pre {
  padding: 0;
  margin: 0;
}

.load {
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  background: black;
}

.term {
  font-family: monospace;
  color: #fff;
  opacity: 0.8;
  font-size: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 10px;
  padding-left: 20px;
}

.term:after {
  content: "_";
  opacity: 1;
  animation: cursor 1s infinite;
}

@keyframes cursor {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>