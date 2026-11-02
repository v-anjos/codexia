# Codexia — Protótipo navegável v0.1

Plataforma web gamificada de introdução à programação em C.

## Executar

Abra `index.html` no navegador ou rode `python3 -m http.server 8080` nesta pasta e visite http://localhost:8080.

## Recursos implementados

- Dashboard responsivo em dark mode
- Trilha demonstrativa com quatro lições e desbloqueio sequencial
- Quizzes com feedback, XP e progresso salvos em localStorage
- Editor de texto para C com verificação *heurística* de estrutura
- Conquistas e perfil de demonstração

## Limitações importantes

Este é um protótipo frontend sem autenticação, backend, compilação ou execução de C. A verificação do editor não é um compilador e pode produzir falsos positivos ou negativos. O progresso é local ao navegador. O conteúdo pedagógico é demonstrativo, não um curso completo. Não utilize este protótipo como produto de produção sem implementar e testar as camadas de segurança, persistência e acessibilidade.

## Próxima etapa

Migrar os componentes para React + TypeScript + Vite, configurar rotas, testes e API NestJS; construir serviço isolado de execução de C.
