<script setup lang="ts">
import { joinURL } from 'ufo'
import { resume } from '~/data/resume'

definePageMeta({ layout: 'default', header: false, footer: false })

const pdfUrl = joinURL(useRuntimeConfig().app.baseURL, 'li-li-resume-v4.pdf')

useHead({ titleTemplate: '%s' })

useSeoMeta({
  title: '李立 | 高级前端工程师',
  description: '李立的网页简历：高级前端工程师，具备 React、Vue、Next.js、Nuxt、FastAPI 和前端工程化经验。',
  ogTitle: '李立 | 高级前端工程师',
  ogDescription: '前端深度、全栈交付与工程化实践。',
})
</script>

<template>
  <div class="resume-page">
    <header class="site-nav">
      <div class="nav-inner">
        <NuxtLink class="brand" to="/" aria-label="返回文档首页">
          <span class="brand-mark">LL</span>
          <span>李立<span class="brand-separator"> / </span>简历</span>
        </NuxtLink>
        <NuxtLink class="docs-link" to="/">
          技术文档
          <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" />
        </NuxtLink>
      </div>
    </header>

    <main class="resume-main">
      <ResumeHero
        :name="resume.name"
        :title="resume.title"
        :summary="resume.summary"
        :phone="resume.phone"
        :email="resume.email"
        :pdf-url="pdfUrl"
      />

      <div class="resume-content">
        <ResumeExperience class="experience" :experience="resume.experience" />
        <aside class="sidebar">
          <ResumeSkills :skills="resume.skills" />
          <section class="education" aria-labelledby="education-heading">
            <div class="section-heading">
              <span>03</span>
              <h2 id="education-heading">教育经历</h2>
            </div>
            <h3>{{ resume.education.school }}</h3>
            <p>{{ resume.education.degree }}</p>
            <span class="education-period">{{ resume.education.period }}</span>
          </section>
        </aside>
      </div>
    </main>

    <footer class="resume-footer">
      <span>李立 · 网页简历</span>
      <a :href="`mailto:${resume.email}`">联系我 <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
    </footer>
  </div>
</template>

<style scoped>
.resume-page { min-height: 100vh; background: #fcfdfb; color: #233b35; font-family: "PingFang SC", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif; }
.site-nav { border-bottom: 1px solid #e1e9e3; background: #f5f8f4; }
.nav-inner, .resume-main, .resume-footer { width: min(100% - 64px, 1120px); margin: 0 auto; }
.nav-inner { display: flex; align-items: center; justify-content: space-between; min-height: 64px; gap: 20px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: #204b40; font-size: 14px; font-weight: 700; text-decoration: none; }
.brand-mark { display: grid; place-items: center; width: 29px; height: 29px; border: 1px solid #7eab99; color: #256f59; font: 700 13px/1 Georgia, serif; }
.brand-separator { color: #9bad9e; }
.docs-link { display: inline-flex; align-items: center; gap: 4px; color: #416357; font-size: 13px; text-decoration: none; }
.docs-link:hover, .resume-footer a:hover { color: #17735c; text-decoration: underline; }
.resume-content { display: grid; grid-template-columns: minmax(250px, 300px) minmax(0, 1fr); gap: clamp(48px, 7vw, 105px); padding: 56px 0 92px; }
.sidebar { display: flex; grid-column: 1; grid-row: 1; flex-direction: column; gap: 54px; }
.experience { grid-column: 2; grid-row: 1; }
.education { padding-top: 28px; border-top: 1px solid #d6e2d9; }
.section-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 28px; }
.section-heading span { color: #ae6d55; font-size: 13px; font-weight: 700; }
h2 { margin: 0; color: #173a36; font-size: 23px; line-height: 1.35; }
h3 { margin: 0 0 5px; color: #25483d; font-size: 16px; }
.education p { margin: 0 0 6px; color: #576d62; font-size: 13px; }
.education-period { color: #788b80; font-size: 12px; }
.resume-footer { display: flex; justify-content: space-between; gap: 20px; padding: 22px 0 34px; border-top: 1px solid #dbe6de; color: #819288; font-size: 12px; }
.resume-footer a { display: inline-flex; align-items: center; gap: 3px; color: #416357; text-decoration: none; }
@media (max-width: 760px) {
  .nav-inner, .resume-main, .resume-footer { width: min(100% - 36px, 1120px); }
  .resume-content { grid-template-columns: 1fr; gap: 48px; padding: 42px 0 70px; }
  .sidebar { grid-column: 1; grid-row: 2; gap: 38px; }
  .experience { grid-column: 1; grid-row: 1; }
  .education { padding-top: 25px; }
}
@media print {
  .site-nav, .resume-footer { display: none; }
  .resume-page { background: #fff; }
  .resume-content { gap: 32px; }
}
</style>
