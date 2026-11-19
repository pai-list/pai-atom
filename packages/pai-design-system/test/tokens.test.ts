import { describe, it, expect } from 'vitest';
import StyleDictionary from 'style-dictionary';
import { readFileSync } from 'node:fs';
import { mkdtempSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

describe('pai-design-tokens', () => {
  it('compiles tokens to CSS variables', () => {
    const out = mkdtempSync(path.join(os.tmpdir(), 'sd-'));
    const sd = StyleDictionary.extend({
      source: [new URL('../tokens/**/*.json', import.meta.url).pathname],
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: out + '/',
          files: [{ destination: 'tokens.css', format: 'css/variables' }],
        },
      },
    });
    sd.buildAllPlatforms();
    const css = readFileSync(out + '/tokens.css', 'utf8');
    expect(css).toContain('--colors-primary');
    expect(css).toContain('--spacing-4');
  });
});