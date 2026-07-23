<!-- ═══════════ PAI-ATOM · Design System Primitives ═══════════ -->
<!-- Stack: TypeScript, design tokens, ABI specification    -->
<!-- Updated: 23 July 2026                                  -->
<!-- ═══════════════════════════════════════════════════════ -->

<div align="center">
  <img src="https://img.shields.io/badge/status-alpha-FF6B6B?style=flat-square&labelColor=0D1117" />
  <img src="https://img.shields.io/github/license/pai-list/pai-atom?style=flat-square&color=00A36C&labelColor=0D1117" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&labelColor=0D1117" />
</div>

# ⚛ PAI Atom

**Immutable PaiSkill ABI — the canonical specification for agent skill interfaces in the PAI Universe.**

THE ATOM defines the primitive types, function signatures, and event schemas that every PAI agent skill must implement. It is the **single source of truth** for cross-agent interoperability.

---

## ❯ What's Inside

| File | Purpose |
|:-----|:--------|
| [`DESIGN.md`](DESIGN.md) | Full design system specification & token values |
| `package.json` | Published as `@pai/atom` on npm |
| `src/` (planned) | TypeScript type definitions & validators |

---

## ❯ Quick Start

```bash
npm install @pai/atom
```

```typescript
import { PaiSkillABI, PaiPrimitiveType } from '@pai/atom';

const mySkill: PaiSkillABI = {
  name: "identity-verify",
  inputs: [{ name: "did", type: PaiPrimitiveType.String }],
  outputs: [{ name: "credential", type: PaiPrimitiveType.Credential }],
};
```

---

## ❯ Related

- [`pai-list/pai-skills`](https://github.com/pai-list/pai-skills) — Skills registry that uses ATOM types
- [`pai-list/pai-agent-kit`](https://github.com/pai-list/pai-agent-kit) — Runtime that executes ATOM-compliant skills

---

## ❯ License

MIT © [PAI Ecosystem](https://github.com/pai-list)

---

*The smallest unit of agent capability.*
