<script setup lang="ts">
import type { ResumeExperience } from '~/data/resume'

defineProps<{ experience: ResumeExperience[] }>()
</script>

<template>
  <section aria-labelledby="experience-heading">
    <div class="section-heading">
      <span>01</span>
      <h2 id="experience-heading">工作经历</h2>
    </div>
    <div class="timeline">
      <article v-for="job in experience" :key="job.company" class="job">
        <div class="job-heading">
          <div>
            <h3>{{ job.company }}</h3>
            <p class="job-role">{{ job.role }}</p>
          </div>
          <span class="period">{{ job.period }}</span>
        </div>
        <div v-for="(section, index) in job.sections" :key="section.title || index" class="job-section">
          <h4 v-if="section.title">{{ section.title }}</h4>
          <ul>
            <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 28px; }
.section-heading span { color: #ae6d55; font-size: 13px; font-weight: 700; }
h2 { margin: 0; color: #173a36; font-size: 23px; line-height: 1.35; }
.timeline { border-left: 1px solid #c8d9d0; margin-left: 6px; }
.job { position: relative; padding: 0 0 38px 27px; }
.job:last-child { padding-bottom: 0; }
.job::before { position: absolute; top: 8px; left: -5px; width: 9px; height: 9px; border: 2px solid #2a806a; border-radius: 50%; background: #fff; content: ""; }
.job-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; margin-bottom: 20px; }
h3 { margin: 0; color: #203e37; font-size: 20px; line-height: 1.4; }
.job-role { margin: 3px 0 0; color: #677b73; font-size: 13px; }
.period { flex: none; color: #6d8179; font-size: 12px; white-space: nowrap; }
.job-section + .job-section { margin-top: 22px; }
h4 { margin: 0 0 9px; color: #297560; font-size: 14px; font-weight: 700; line-height: 1.5; }
ul { display: grid; gap: 8px; margin: 0; padding-left: 19px; }
li { padding-left: 1px; color: #40554d; font-size: 14px; line-height: 1.82; }
li::marker { color: #9fb9a9; }
@media (max-width: 600px) {
  .job-heading { flex-direction: column; align-items: flex-start; gap: 3px; }
  .job { padding-left: 22px; }
}
</style>
