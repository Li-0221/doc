<script setup lang="ts">
import type { ResumeSkill } from '~/data/resume'

defineProps<{ skills: ResumeSkill[] }>()
</script>

<template>
  <section aria-labelledby="skills-heading">
    <div class="section-heading">
      <span>02</span>
      <h2 id="skills-heading">技术能力</h2>
    </div>
    <div class="skill-groups">
      <div v-for="skill in skills" :key="skill.title" class="skill-group">
        <h3>{{ skill.title }}</h3>
        <div class="skill-list">
          <span v-for="item in skill.items" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 28px; }
.section-heading span { color: #ae6d55; font-size: 13px; font-weight: 700; }
h2 { margin: 0; color: #173a36; font-size: 23px; line-height: 1.35; }
.skill-groups { display: grid; gap: 26px; }
h3 { margin: 0 0 11px; color: #42675f; font-size: 13px; font-weight: 700; }
.skill-list { display: flex; flex-wrap: wrap; gap: 7px; }
.skill-list span { display: inline-flex; align-items: center; min-height: 27px; padding: 3px 8px; border: 1px solid #d7e3dc; border-radius: 4px; background: #f5f8f5; color: #435e57; font-size: 12px; line-height: 1.35; }
</style>
