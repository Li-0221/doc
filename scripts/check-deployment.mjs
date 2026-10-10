import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const output = resolve('.output/public')
const base = '/doc/'

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? htmlFiles(path) : path.endsWith('.html') ? [path] : []
  })
}

assert.ok(existsSync(output), 'Generate the site before checking deployment paths')

const invalid = []
for (const file of htmlFiles(output)) {
  const html = readFileSync(file, 'utf8')
  for (const [, url] of html.matchAll(/\b(?:href|src)="(\/[^\"]*)"/g)) {
    // Docus adds this extra favicon link independently of Nuxt's base-aware icon.
    if (url !== '/favicon.ico' && !url.startsWith('//') && !url.startsWith(base)) {
      invalid.push(`${relative(output, file)}: ${url}`)
    }
  }
}

const index = readFileSync(join(output, 'index.html'), 'utf8')
assert.ok(/href="\/doc\/_nuxt\/[^\"]+\.css"/.test(index), 'The stylesheet must use the Pages base path')
assert.ok(index.includes('href="/doc/vue/vue3"'), 'Navigation must use the Pages base path')
assert.ok(index.includes('href="/doc/resume"'), 'Homepage must link to the resume')
const standard = readFileSync(join(output, 'engineering/standard.html'), 'utf8')
assert.ok(standard.includes('src="/doc/images/Prettier.png"'), 'Local images must use static Pages URLs')
assert.ok(existsSync(join(output, 'images/Prettier.png')), 'The referenced image must exist in the Pages output')
const resume = readFileSync(join(output, 'resume.html'), 'utf8')
assert.ok(resume.includes('href="/doc/li-li-resume-v4.pdf"'), 'Resume download must use the Pages base path')
assert.ok(existsSync(join(output, 'li-li-resume-v4.pdf')), 'The resume PDF must exist in the Pages output')
assert.ok(invalid.length === 0, `Root-relative links must start with ${base}:\n${invalid.slice(0, 10).join('\n')}`)

console.log('GitHub Pages asset and navigation paths are valid')
