# Como publicar este projeto no GitHub

Passos rápidos (PowerShell):

1) Autentique o `gh` (recomendado):

```powershell
gh auth login
```

2) Criar repositório e enviar (opção A - usando `gh`):

```powershell
cd 'C:\Users\Usuario\Projetos Python\landing-backend-python'
gh repo create <seu-usuario>/landing-backend-python --public --source=. --remote=origin --push
```

3) Ou (opção B - sem `gh`):

```powershell
cd 'C:\Users\Usuario\Projetos Python\landing-backend-python'
git remote add origin https://github.com/<seu-usuario>/landing-backend-python.git
git branch -M main
git push -u origin main
```

4) Depois de enviar, habilite GitHub Pages nas configurações do repositório (branch `main` / pasta `/`), ou faça deploy em Netlify/Vercel.

Notas:
- Os links para perfis foram removidos do `index.html` por segurança antes do commit. Atualize-os manualmente se desejar.
- Se desejar, eu posso gerar automaticamente um `CNAME` ou fluxo de deploy para GitHub Pages.
