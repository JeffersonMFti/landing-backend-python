# Landing page — Desenvolvedor Back-end Python

Resumo
- Projeto: landing page estática que apresenta serviços, skills e projetos do desenvolvedor.
- Objetivo: servir como peça de portfólio, com foco em clareza, performance e usabilidade.

Habilidades aplicadas
- HTML5, CSS3 (Tailwind via CDN)
- JavaScript (ES6+), microinterações e animações
- tsParticles (fundo interativo) e Framer Motion (CDN)
- Design responsivo, acessibilidade básica e performance

Como rodar localmente
```powershell
cd 'C:\Users\Usuario\Projetos Python\landing-backend-python'
python -m http.server 8000
# Abra http://localhost:8000
```

Publicação
- Use `gh` para criar o repositório e enviar os commits, ou adicione o remote manualmente e dê push.

Instruções rápidas (local):

- Abra um servidor estático na pasta do projeto e acesse `index.html` no navegador. Exemplo (PowerShell):

```powershell
cd 'C:\Users\Usuario\Projetos Python\landing-backend-python'
python -m http.server 8000
# Abra http://localhost:8000
```

- As dependências usadas via CDN: Tailwind CSS, tsParticles, Framer Motion (opcional).

Como publicar no GitHub (passos recomendados):

1) Autenticar o GitHub CLI (`gh`) no seu ambiente (PowerShell):

```powershell
gh auth login
```

Siga o assistente interativo (recomendo autenticação via browser). Se preferir, configure uma variável `GH_TOKEN` com um token de acesso pessoal.

2) Criar o repositório remoto (exemplo):

```powershell
cd 'C:\Users\Usuario\Projetos Python\landing-backend-python'
gh repo create <seu-usuario>/landing-backend-python --public --source=. --remote=origin --push
```

Ou, manualmente (se preferir criar repo via web):

```powershell
git remote add origin https://github.com/<seu-usuario>/landing-backend-python.git
git branch -M main
git push -u origin main
```

Observações de privacidade e preparação:
- Os links para perfis pessoais foram removidos do `index.html` por solicitação. Antes de publicar, atualize os links de projeto ou redes sociais conforme desejar.
- Se quiser reduzir o impacto das partículas em dispositivos móveis, posso adicionar um toggle "Desempenho" que salva a preferência no `localStorage`.

Personalização e deploy:
- Atualize textos e links em `index.html`.
- Ajuste cores em `styles.css`.
- Para deploy estático rápido: GitHub Pages ou Netlify funcionam bem.

Licença: livre para uso e modificação.
