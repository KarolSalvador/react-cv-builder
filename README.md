# Gerador de Currículo Interativo com Visualização em Tempo Real

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Sobre o projeto

Este projeto é uma aplicação web interativa desenvolvida para simplificar a criação de currículos. Ele guia o usuário por um formulário passo a passo para inserir dados pessoais, experiências, formação e habilidades, com uma visualização do currículo sendo gerada e atualizada em tempo real.

![Demonstração do Gerador de Currículo](https://github.com/KarolSalvador/react-cv-builder/blob/main/src/assets/demonstracao.gif.gif?raw=true)

### 💻 Instalação e Execução

Para iniciar o prjoeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone [URL_DO_SEU_REPOSITÓRIO]
   cd react-cv-builder
   ```

2. **Instale as dependências:**  
   Utilize um dos gerenciadores de pacotes listados no arquivo `package.sjon` para instalar todas as dependências do projeto.  
   O projeto utiliza a biblioteca `html2canvas-pro` para permitir a exportação do currículo em formato PDF. Essa biblioteca será instalada automaticamente com o comando abaixo.

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn
   ```

   ou

   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**  
   Execute o script `dev` para rodar a aplicação em modo de desenvolvimento.

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173`.

4. **Para gerar a versão de produção:**  
   Execute o script `build` para criar uma versão otimizada do projeto. Os arquivos finais serão gerados na pasta `dist`.
   ```bash
   npm run build
   ```

### 📝 Licença

Este projeto está licenciado sob os termos da [Licença MIT](https://opensource.org/licenses/MIT).

### 🤝 Contribuição

Contribuições, sugestões e relatórios de bugs são muito bem-vindos! Se você deseja contribuir para este projeto, siga os passos abaixo:

1.  **Faça um Fork do Repositório:** Clique no botão "Fork" no canto superior direito deste repositório.

2.  **Clone o seu Fork:** Clone o projeto para a sua máquina local.
    ```bash
    git clone [https://github.com/seu-usuario/react-cv-builder.git](https://github.com/seu-usuario/react-cv-builder.git)
    ```
3.  **Crie uma nova Branch:** Crie uma branch para a sua contribuição.

    ```bash
    git checkout -b nome-da-sua-branch
    ```

4.  **Faça suas Alterações:** Faça as modificações necessárias no código.

5.  **Commit suas Alterações:** Crie um commit com uma mensagem clara e descritiva.
    ```bash
    git commit -m "feat: sua nova funcionalidade"
    ```
6.  **Envie para o Repositório Remoto:** Envie as alterações para o seu fork no GitHub.
    ```bash
    git push origin nome-da-sua-branch
    ```
7.  **Abra um Pull Request:** Vá para o seu repositório no GitHub e abra um novo Pull Request com suas alterações. Certifique-se de descrever o que foi alterado e por que.

---

Seu `pull request` será revisado e, se aprovado, as suas alterações serão mescladas. Agradecemos por sua colaboração!
