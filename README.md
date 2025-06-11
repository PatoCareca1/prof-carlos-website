# Website Acadêmico - Prof. Carlos André

Este é o repositório para o website acadêmico do Professor Carlos André, desenvolvido com tecnologias web modernas para criar uma plataforma rica em informações e interativa.

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias no front-end:

- **[React](https://react.dev/)** - Uma biblioteca JavaScript para construir interfaces de usuário.
- **[Vite](https://vitejs.dev/)** - Uma ferramenta de build moderna que oferece uma experiência de desenvolvimento extremamente rápida.
- **[TypeScript](https://www.typescriptlang.org/)** - Um superset do JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)** - Um framework CSS utility-first para criar designs customizados rapidamente.
- **[React Router](https://reactrouter.com/)** - Para roteamento e navegação declarativa no lado do cliente.

---

## Como Começar (Getting Started)

Siga os passos abaixo para configurar o ambiente de desenvolvimento localmente.

### Pré-requisitos

Antes de começar, garanta que você tenha os seguintes softwares instalados na sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PatoCareca1/prof-carlos-website.git](https://github.com/PatoCareca1/prof-carlos-website.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd prof-carlos-website
    ```

3.  **Instale as dependências com Yarn:**
    ```bash
    yarn install
    ```
    *(Este comando lerá o arquivo `package.json` e instalará todos os pacotes necessários.)*

---

## Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos com o Yarn:

### `yarn dev`

Roda o aplicativo em modo de desenvolvimento com Fast Refresh.
Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para visualizá-lo no navegador. A página irá recarregar automaticamente se você fizer edições no código.

### `yarn build`

Compila e otimiza o aplicativo para produção na pasta `dist`.
Este comando agrupa o React corretamente e otimiza o build para a melhor performance.

### `yarn lint`

Executa o ESLint para analisar o código em busca de problemas e garantir a consistência do estilo de código.

### `yarn preview`

Inicia um servidor local estático para pré-visualizar o build de produção que foi gerado na pasta `dist`. É uma ótima maneira de verificar o resultado final antes de fazer o deploy.