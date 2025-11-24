# estudo-playwright

Projeto de estudo com Playwright para testes end-to-end (E2E) do site de exemplo
https://www.saucedemo.com/inventory.html.

Este repositório contém testes automatizados (escritos em TypeScript).

**Resumo**

- **Objetivo:** Aprender e demonstrar o uso do Playwright para testes E2E.
- **Site alvo:** `https://www.saucedemo.com/inventory.html`
- **Ferramenta:** Playwright (Node.js / TypeScript)

**Pré-requisitos**

- Node.js (versão 16 ou superior recomendada)
- npm ou yarn

No Windows PowerShell, por exemplo, verifique/instale o Node.js em https://nodejs.org/.

**Instalação**

1. Instale dependências do projeto:

```powershell
npm install
```

2. Instale os navegadores do Playwright (apenas se ainda não estiverem instalados):

```powershell
npx playwright install
```

3. (Opcional) Gere tipos/compilações se necessário:

```powershell
npm run build
```

**Como rodar os testes**

- Rodar todos os testes:

```powershell
npx playwright test
```

- Rodar um arquivo de teste específico (ex.: `tests/Login.spec.ts`):

```powershell
npx playwright test tests/Login.spec.ts
```

- Rodar apenas no Chromium (se existir configuração de projetos no `playwright.config.ts`):

```powershell
npx playwright test --project=chromium
```

**Relatórios & resultados**

- Após executar os testes, o Playwright normalmente salva um relatório em `playwright-report/`.
- Para abrir o relatório interativo (no navegador):

```powershell
npx playwright show-report
```

- Relatórios e artefatos adicionais podem ser encontrados em `test-results/`.
