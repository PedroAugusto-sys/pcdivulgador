# 🚀 Guia de Deploy no Netlify

Este guia vai te ajudar a fazer o deploy do portfólio no Netlify de forma rápida e fácil.

## 📋 Pré-requisitos

1. Conta no Netlify (crie em [netlify.com](https://www.netlify.com))
2. Repositório Git (GitHub, GitLab ou Bitbucket)
3. Node.js instalado (para testar localmente)

## 🔧 Passo a Passo

### Opção 1: Deploy via Interface Web (Mais Fácil) ⭐

1. **Prepare o repositório Git**
   - Faça commit de todos os arquivos
   - Faça push para seu repositório (GitHub, GitLab ou Bitbucket)

2. **Acesse o Netlify**
   - Vá para [app.netlify.com](https://app.netlify.com)
   - Faça login com sua conta

3. **Importe o projeto**
   - Clique em **"Add new site"**
   - Selecione **"Import an existing project"**
   - Escolha seu provedor Git (GitHub, GitLab ou Bitbucket)
   - Autorize o Netlify a acessar seus repositórios
   - Selecione o repositório `PCDivulgador`

4. **Configure o build**
   O Netlify detectará automaticamente o arquivo `netlify.toml`, mas verifique se está assim:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: Deixe em branco (usará a versão padrão) ou escolha `18.x` ou `20.x`

5. **Deploy**
   - Clique em **"Deploy site"**
   - Aguarde o build completar (geralmente 1-2 minutos)
   - Pronto! Seu site estará no ar! 🎉

6. **Configurar domínio personalizado (Opcional)**
   - Vá em **Site settings** > **Domain management**
   - Clique em **"Add custom domain"**
   - Siga as instruções para configurar seu domínio

### Opção 2: Deploy via Netlify CLI

1. **Instale o Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Faça login**
   ```bash
   netlify login
   ```
   Isso abrirá o navegador para autenticação.

3. **Instale as dependências do projeto**
   ```bash
   npm install
   ```

4. **Teste o build localmente**
   ```bash
   npm run build
   ```
   Verifique se a pasta `dist` foi criada sem erros.

5. **Inicialize o site no Netlify**
   ```bash
   netlify init
   ```
   - Escolha "Create & configure a new site"
   - Escolha seu time
   - Dê um nome ao site (ou deixe o padrão)
   - O comando de build já está configurado: `npm run build`
   - O diretório de publicação já está configurado: `dist`

6. **Faça o deploy**
   ```bash
   netlify deploy --prod
   ```

### Opção 3: Deploy via Drag & Drop

1. **Instale as dependências e faça o build**
   ```bash
   npm install
   npm run build
   ```

2. **Acesse o Netlify**
   - Vá para [app.netlify.com](https://app.netlify.com)
   - Faça login

3. **Arraste a pasta dist**
   - Na página inicial, arraste a pasta `dist` para a área de deploy
   - Aguarde o upload e deploy
   - Pronto! 🎉

   ⚠️ **Nota**: Com este método, você precisará fazer o deploy manualmente sempre que atualizar o site.

## ✅ Verificações Pós-Deploy

Após o deploy, verifique se:

1. ✅ O site carrega corretamente
2. ✅ A navegação entre páginas funciona (Home, Sobre, Projetos, Contato)
3. ✅ As rotas diretas funcionam (ex: `/projetos/1`)
4. ✅ As imagens carregam corretamente
5. ✅ O formulário de contato está funcionando
6. ✅ Os links de redes sociais estão corretos

## 🔄 Atualizações Futuras

Se você conectou o repositório Git ao Netlify:

- Toda vez que você fizer `git push` para a branch principal
- O Netlify detectará automaticamente
- Fará um novo build e deploy automaticamente
- Isso é chamado de **Continuous Deployment** (CD)

## 🐛 Solução de Problemas

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que o Node.js está na versão 18 ou superior
- Verifique os logs de build no Netlify

### Rotas não funcionam (404)
- Verifique se o arquivo `netlify.toml` está na raiz do projeto
- Verifique se o arquivo `public/_redirects` existe
- O arquivo `netlify.toml` já está configurado corretamente

### Imagens não carregam
- Verifique se a imagem `profile.jpg` está em `src/assets/`
- Verifique os caminhos das imagens nos componentes

## 📞 Suporte

Se tiver problemas, consulte:
- [Documentação do Netlify](https://docs.netlify.com/)
- [Documentação do Vite](https://vitejs.dev/)

---

**Boa sorte com o deploy! 🚀**

