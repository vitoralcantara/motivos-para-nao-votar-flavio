# Dossiê: Razões Documentadas para Não Votar em Flávio

Site estático leve, moderno e responsivo com curadoria de fatos apurados, votações e declarações públicas pautadas exclusivamente em veículos da grande imprensa.

---

## 🚀 Como testar localmente

Abra o terminal nesta pasta e execute:
```bash
python3 -m http.server 3333
```
Em seguida, acesse no navegador: `http://localhost:3333`

---

## 📂 Estrutura do Projeto

- **`index.html`**: Estrutura semântica da página, metadados SEO e OpenGraph para compartilhamento em redes.
- **`style.css`**: Design moderno com tema dark elegante, micro-animações, cards com alto contraste e design responsivo para mobile.
- **`data.js`**: Base de dados dos tópicos. Para adicionar um novo fato, basta incluir um novo item no array `topicsData`.
- **`app.js`**: Lógica de busca em tempo real, filtros por categoria, expansão de contexto (*accordion*), links diretos com âncora (`#id`) e botão de compartilhamento para WhatsApp.

---

## ✍️ Como adicionar novos tópicos no `data.js`

Cada tópico segue o formato simples:

```javascript
{
  id: "identificador-unico",
  title: "Título direto e objetivo do fato apurado",
  category: "Programas Sociais", // Categoria (gera filtro automático)
  date: "20/10/2026",
  sourceName: "Nome do Veículo (ex: Folha de S.Paulo, G1, Estadão)",
  sourceUrl: "https://link-da-materia.com",
  bullets: [
    "Primeiro ponto factual apurado na reportagem.",
    "Segundo ponto com dados ou contexto oficial.",
    "Consequência ou desdobramento documentado."
  ],
  fullContext: "Parágrafo detalhado com o contexto da apuração jornalística para o leitor que clicar em 'Ver contexto'."
}
```

---

## 🌐 Como publicar gratuitamente

1. **GitHub Pages**:
   - Crie um repositório no GitHub com esses arquivos.
   - Acesse **Settings > Pages** e selecione a branch `main` e a pasta `/root`.
2. **Vercel ou Netlify**:
   - Basta arrastar a pasta do projeto para o painel do Netlify/Vercel ou conectar ao repositório do GitHub. O deploy é imediato.
