# primereact-styled-tailwind-starter
Primereact sandbox and archtecture implementations

# Estrutura de Pastas - Projeto React 19

Esta é uma sugestão de estrutura de pastas para um projeto com React 19, focada em escalabilidade, organização e boas práticas de desenvolvimento.

## Estrutura de Pastas

```plaintext
/meu-projeto-react
|
|-- public/
|   |-- favicon.ico
|   |-- index.html
|   |-- robots.txt
|   `-- manifest.json
|
|-- src/
|   |-- assets/
|   |   |-- fonts/
|   |   `-- images/
|   |
|   |-- components/
|   |   |-- features/
|   |   |-- layout/
|   |   `-- ui/
|   |
|   |-- context/ (ou store/)
|   |
|   |-- hooks/
|   |
|   |-- lib/ (ou utils/)
|   |
|   |-- pages/ (ou routes/)
|   |
|   |-- services/ (ou api/)
|   |
|   |-- styles/
|   |   `-- main.css
|   |
|   |-- App.jsx
|   `-- main.jsx
|
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
`-- vite.config.js
```

## Detalhes dos Diretórios

### `public/`

Contém arquivos estáticos que não são processados pelo bundler (como o Vite). Eles são copiados diretamente para a pasta de build final.

*   **`favicon.ico`, `robots.txt`, `manifest.json`**: Assets públicos e metadados da aplicação.

### `src/`

O coração da sua aplicação, onde todo o código-fonte reside.

*   **`assets/`**: Para recursos como imagens, fontes, etc., que serão processados e otimizados durante o build.

*   **`components/`**:
    *   `ui/`: Componentes de UI puros e reutilizáveis (ex: `Button.jsx`, `Input.jsx`).
    *   `layout/`: Componentes que definem a estrutura da página (ex: `Header.jsx`, `Footer.jsx`).
    *   `features/`: Componentes mais complexos e específicos de uma funcionalidade (ex: `NewsFeed/`).

*   **`context/`** (ou `store/`): Para gerenciamento de estado global (Context API, Redux, Zustand).

*   **`hooks/`**: Para hooks customizados que encapsulam lógica reutilizável (ex: `useAuth.js`, `useFetch.js`).

*   **`lib/`** (ou `utils/`): Funções utilitárias genéricas (ex: formatação de datas, constantes).

*   **`pages/`** (ou `routes/`): Componentes que representam uma página inteira da aplicação, geralmente associados a uma rota.

*   **`services/`** (ou `api/`): Módulos responsáveis pela comunicação com APIs externas.

*   **`styles/`**: Para arquivos de estilização globais.

*   **`App.jsx`**: Componente raiz da aplicação, onde o roteamento principal é configurado.

*   **`main.jsx`**: Ponto de entrada da aplicação React, onde o componente `App` é renderizado no DOM.

### Arquivos na Raiz

*   **`.eslintrc.cjs`**: Configuração do ESLint para padronização de código.
*   **`.gitignore`**: Especifica arquivos e pastas a serem ignorados pelo Git.
*   **`index.html`**: Ponto de entrada HTML principal para o Vite.
*   **`package.json`**: Gerencia as dependências e scripts do projeto.
*   **`postcss.config.js`, `tailwind.config.js`**: Arquivos de configuração para PostCSS e Tailwind CSS.
*   **`vite.config.js`**: Arquivo de configuração do Vite.
