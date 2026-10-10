<script setup lang="ts">
const resumeUrl = 'https://resume.inwe-ai.com/'

definePageMeta({ layout: 'default', header: false, footer: false })

useHead({
  title: '简历已迁移',
  meta: [{ 'http-equiv': 'refresh', content: `0;url=${resumeUrl}` }],
  link: [{ rel: 'canonical', href: resumeUrl }],
})
</script>

<template>
  <main class="resume-redirect">
    <p>简历已迁移至 <a :href="resumeUrl">resume.inwe-ai.com</a>。</p>
  </main>
</template>

<style scoped>
.resume-redirect { display: grid; min-height: 60vh; place-items: center; padding: 24px; color: #344b43; text-align: center; }
.resume-redirect a { color: #176b57; text-decoration: underline; }
</style>
