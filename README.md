# Portfólio Digital - PC Divulgador

Portfólio profissional de **Paulo Cesar Junior**, especialista em divulgação artística de música sertaneja. Desenvolvido com React.js, CSS Modules e Animate.css, transmitindo confiança e profissionalismo.

## 🚀 Tecnologias

- **React.js** - Framework JavaScript para construção da interface
- **React Router DOM** - Roteamento e navegação entre páginas
- **CSS Modules** - Estilização com escopo local
- **Animate.css** - Animações e transições fluidas
- **React Icons** - Biblioteca de ícones
- **Vite** - Build tool e servidor de desenvolvimento

## 📋 Funcionalidades

- ✅ **Home** - Apresentação com slogan impactante e foto de perfil
- ✅ **Sobre** - Narrativa profissional e habilidades técnicas/pessoais
- ✅ **Projetos** - Galeria de 15 projetos com detalhes completos
- ✅ **Contato** - Formulário de contato e links diretos (Email, WhatsApp, Instagram)
- ✅ **Design Responsivo** - Totalmente adaptável para Desktop, Tablet e Mobile
- ✅ **Animações** - Transições suaves com Animate.css
- ✅ **Navegação Suave** - Menu responsivo com scroll behavior

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd PCDivulgador
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📦 Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para visualizar o build de produção:

```bash
npm run preview
```

## 🌐 Deploy no Netlify

O projeto está configurado para deploy no Netlify. Existem duas formas de fazer o deploy:

### Opção 1: Deploy via Netlify CLI

1. Instale o Netlify CLI globalmente:
```bash
npm install -g netlify-cli
```

2. Faça login no Netlify:
```bash
netlify login
```

3. Inicialize o projeto:
```bash
netlify init
```

4. Siga as instruções e escolha:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Faça o deploy:
```bash
netlify deploy --prod
```

### Opção 2: Deploy via Interface Web (Recomendado)

1. Acesse [netlify.com](https://www.netlify.com) e faça login
2. Clique em "Add new site" > "Import an existing project"
3. Conecte seu repositório Git (GitHub, GitLab ou Bitbucket)
4. Configure as opções de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Clique em "Deploy site"

O Netlify detectará automaticamente o arquivo `netlify.toml` e usará as configurações definidas.

### Configurações do Netlify

O arquivo `netlify.toml` já está configurado com:
- Comando de build: `npm run build`
- Diretório de publicação: `dist`
- Redirects para SPA (Single Page Application) - necessário para o React Router funcionar

## 📁 Estrutura do Projeto

```
PCDivulgador/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Layout/
│   ├── data/
│   │   └── projects.js
│   ├── styles/
│   │   └── global.css
│   ├── assets/
│   │   └── profile.jpg
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

## 🎨 Paleta de Cores

- **Primária**: Azul marinho escuro (#1a2a3a, #2c3e50)
- **Secundária**: Cinza grafite (#34495e, #7f8c8d)
- **Destaque**: Mostarda (#f39c12)
- **Alternativa**: Verde floresta (#27ae60)
- **Fundo**: Branco (#ffffff) e Cinza claro (#ecf0f1)

## 📱 Responsividade

O site foi desenvolvido com abordagem **Mobile-First**, com breakpoints em:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🔗 Links de Contato

- **Email**: pcdivulgador2010@gmail.com
- **WhatsApp**: (62) 98134-3471
- **Instagram**: @pc_divulgador

## 📝 Licença

Este projeto é de propriedade de Paulo Cesar Junior. Todos os direitos reservados.

---

Desenvolvido com ❤️ para destacar talentos sertanejos
