# DESIGN_SYSTEM — LoL Role Mastery

## Produto
Escolha uma função, pratique fundamentos e registre evidências da sua evolução. É uma autoavaliação, não um ranking oficial.

## Taste Skill — tokens
CSS `styles.css`: fundo `#0c1629`, primária `#91d8f4`, secundária `#d4baf9`, tipografia do sistema, foco amarelo de alto contraste, espaçamentos de 4–64 px e raios 10/18/30 px.

## Web Design Guidelines
- Navegação com skip link, formulário rotulado e botões semânticos, resultados em `aria-live`.
- Teclado e foco visível; alvos móveis com altura de pelo menos 44px; layout a partir de 320px.
- Respeito a `prefers-reduced-motion`; excluir/importar backup substitutivo exige confirmação.
- Texto de usuário sempre inserido via `textContent`, nunca HTML não confiável.

## Awesome Design / Image-to-Code
O repositório original era apenas um README, portanto esta identidade visual foi criada de forma própria (ilustração CSS, emblema SVG), sem alegar que havia imagens/capturas convertidas. UI com cartões e resumos acessíveis.

## Dados e segurança
Armazenamento local `lol-role-mastery-local-v1`, schema `{version:1,product,entries}`, até 200 registros e importação JSON até 1 MiB. Validação de ID, data, strings, opções e inteiros. Sem API, chaves, sync, banco, login ou cookies de rastreamento. Backup deve ser guardado pelo usuário. Progresso é autodeclarado e dados fictícios só entram por escolha explícita.

## Revisão interpretativa
Autoavaliação de 1 a 5 é subjetiva e não corresponde a elo, MMR ou ranking oficial.

## QA
Workflow GitHub Actions executa validação estática e Playwright 5 resoluções com capturas, teste de criação, edição, persistência LocalStorage, exportação, busca, filtros, exclusão e overflow. A publicação usa apenas assets estáticos em `gh-pages/(root)`.

## Direção visual exclusiva
Dojo de habilidades: reestruturação da hierarquia, cartões, densidade e tratamento de dados em `identity.css`, preservando o núcleo JS e o LocalStorage. QA visual com cinco resoluções.

## Trilha de funções
Cinco cards de papel (Topo, Selva, Meio, Atirador, Suporte), exibindo revisões manuais e a próxima habilidade do histórico local. `Ver treinos` usa o filtro existente; `Preparar exercício` inicia rascunho não salvo, preservando esquema e backup LocalStorage. Playwright verifica os cinco cards, progressbars, filtro e rascunho.

## Visual QA mobile — 28/10/2026
Capturas reais Playwright 320/390px revisadas. Correção do skip link oculto por `clip-path` fora do foco e visível ao focar com teclado. Banner de apresentação reduzido em telas pequenas para priorizar os fluxos de treino. QA automatizado acrescenta validação de foco sem abrir APIs externas.

## Accessibility QA — 28/10/2026
Testes Playwright de Tab/Shift+Tab, skip link para a área principal, foco visível, rótulos e contraste dos inputs e placeholders (4,5:1), botões/links e campos com altura mínima de 44px. Layout e dados existentes preservados; teste automático direcionado não substitui auditoria WCAG integral.

## Navegação móvel do currículo
Menu responsivo até 650px com acesso direto a Trilha por função, Diário e Novo treino. Aparência de pergaminho/dojo preservada. Detalhes nativos por teclado com fechamento em Escape e ao navegar, sem dependências, banco ou mudança no LocalStorage. Playwright testa fluxo em cinco larguras.

## Navegação contextual desktop
Destinos: Trilha por função, Diário, Novo treino. Testes Playwright garantem todos os IDs existentes, navegação ao primeiro recurso e ausência de menu desktop nas larguras mobile. Badge decorativo removido no tablet estreito. CSS independente da versão mobile.
