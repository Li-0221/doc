<script setup lang="ts">
defineProps<{
  name: string
  title: string
  summary: string
  phone: string
  email: string
  pdfUrl: string
}>()
</script>

<template>
  <section class="hero" aria-labelledby="resume-name">
    <div class="hero-main">
      <p class="eyebrow">RESUME / 李立</p>
      <h1 id="resume-name">{{ name }}</h1>
      <p class="role">{{ title }}</p>
      <p class="summary">{{ summary }}</p>
      <div class="actions">
        <a class="primary-action" :href="pdfUrl" download>
          <UIcon name="i-lucide-download" aria-hidden="true" />
          下载 PDF 简历
        </a>
        <a class="secondary-action" :href="`mailto:${email}`">
          <UIcon name="i-lucide-mail" aria-hidden="true" />
          邮件联系
        </a>
      </div>
    </div>
    <div class="contact" aria-label="联系方式">
      <span class="contact-label">CONTACT</span>
      <a :href="`tel:${phone}`">
        <UIcon name="i-lucide-phone" aria-hidden="true" />
        {{ phone }}
      </a>
      <a :href="`mailto:${email}`">
        <UIcon name="i-lucide-mail" aria-hidden="true" />
        {{ email }}
      </a>
      <a href="https://tripguru.ai/" target="_blank" rel="noopener noreferrer">
        <UIcon name="i-lucide-external-link" aria-hidden="true" />
        tripguru.ai
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: minmax(0, 1fr) 270px; gap: 64px; padding: 56px 0 52px; border-bottom: 1px solid #cbd6d1; }
.eyebrow, .contact-label { color: #44796d; font: 700 12px/1.4 ui-sans-serif, system-ui, sans-serif; }
h1 { margin: 13px 0 12px; color: #142d2d; font: 700 64px/1.16 "Songti SC", "Noto Serif CJK SC", serif; }
.role { margin: 0; color: #214c47; font-size: 20px; font-weight: 650; line-height: 1.6; }
.summary { max-width: 770px; margin: 26px 0 0; color: #455956; font-size: 15px; line-height: 1.95; }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.actions a { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 42px; padding: 0 17px; border-radius: 5px; font-size: 14px; font-weight: 650; text-decoration: none; transition: background-color .18s, border-color .18s, transform .18s; }
.actions a:hover { transform: translateY(-2px); }
.actions .primary-action { background: #1c6256; color: #fff; }
.actions .primary-action:hover { background: #124c43; }
.actions .secondary-action { border: 1px solid #a5bdb3; color: #224940; }
.actions .secondary-action:hover { border-color: #1c6256; background: #edf5f1; }
.contact { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; align-self: end; padding: 20px 0 4px 23px; border-left: 2px solid #c6d7cf; }
.contact-label { margin-bottom: 2px; }
.contact a { display: inline-flex; align-items: center; gap: 10px; color: #324d49; font-size: 14px; text-decoration: none; overflow-wrap: anywhere; }
.contact a:hover { color: #147561; text-decoration: underline; }
.contact :deep(svg) { flex: none; width: 16px; height: 16px; color: #378574; }
@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; gap: 36px; padding: 44px 0 42px; }
  h1 { font-size: 48px; }
  .role { font-size: 18px; }
  .summary { margin-top: 20px; }
  .contact { gap: 13px; align-self: auto; padding: 0 0 0 16px; }
}
</style>
