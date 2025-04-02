
export const liteRTEditorFiles = {
  "todo": {
    "title": "To do",
    "description": "To do",
    "static": {
      '/index.html': {
        code: `<!DOCTYPE html>
<html>

<head>
  <title>WebNN / Lite RT in Static HTML5</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>
  <script src="/index.js"></script>
</body>

</html>`},
      '/index.js': {
        active: true,
        code: `document.getElementById("app").innerHTML = '// Lite RT + Static HTML5';
`},
    },
    "vanilla": {
      '/index.js': {
        active: true,
        code: `document.getElementById("app").innerHTML = '// LiteRT + Vanilla JavaScript';
` },
    },
    "svelte": {
      '/App.svelte': {
        active: true,
        code: `<script>
  let name = '// LiteRT + Svelte';
</script>

<main>
  {name}
</main>
`}
    },
    "react": {
      '/App.js': {
        active: true,
        code: `export default function App() {
  return <div>// LiteRT + React</div>
}`},
    },
    "vue": {
      '/src/App.vue': {
        active: true,
        code: `<template>
  <div>{{ msg }}</div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('// LiteRT + Vue');
</script>
`},
    }
  }
}