#  Pokédex React - Meu Álbum de Pokémon  Pessoal

![Pokémon Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png)

Bem-vindo ao meu Álbum de Pokémon! Uma aplicação web desenvolvida com React que permite visualizar informações sobre os seus Pokémon favoritos, inspirada nos clássicos álbuns de figurinhas. Este projeto consome dados da [PokéAPI](https://pokeapi.co/) para fornecer detalhes atualizados.

---

**[ ➡️ ACESSE A APLICAÇÃO ONLINE AQUI ⬅️ ](https://680ff485308bf7132d0999f2--classy-parfait-a57704.netlify.app)**


---

## 📸 Screenshots



---

## ✨ Funcionalidades Principais

* **Visualização em Grade:** Exibe os Pokémon em um layout de grade, semelhante a um álbum de figurinhas.
* **Busca Inicial:** Carrega os primeiros 151 Pokémon (Geração 1) por padrão.
* **Página de Detalhes:** Clique em um Pokémon para ver informações detalhadas em uma página dedicada, incluindo:
    * Imagem (Artwork Oficial)
    * Nome e Número da Pokédex
    * Tipos (com cores e badges estilizadas)
    * Altura e Peso
    * Habilidades (normais e ocultas)
    * Stats Base
* **Rotas Dinâmicas:** Utiliza `react-router-dom` para navegação entre a lista e os detalhes de cada Pokémon (`/pokemon/:nome`).
* **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela (desktop, tablets, mobile).
* **Feedback Visual:** Indicadores de carregamento e mensagens de erro claras.
* **Estilo Temático:** Visual inspirado nas cores e elementos da franquia Pokémon.

---

## 🚀 Tecnologias Utilizadas

* **Frontend:**
    * [React](https://reactjs.org/) (v18+) - Biblioteca JavaScript para construção da interface.
    * [React Router DOM](https://reactrouter.com/) (v6+) - Para gerenciamento de rotas SPA.
    * [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições à PokéAPI.
    * CSS3 - Para estilização customizada (cores, layout, responsividade).
* **API:**
    * [PokéAPI (v2)](https://pokeapi.co/) - Fonte de dados dos Pokémon.
* **Build & Desenvolvimento:**
    * [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
    * [npm](https://www.npmjs.com/) / [Yarn](https://yarnpkg.com/) - Gerenciador de Pacotes.
    * [Create React App](https://create-react-app.dev/) - Toolchain para setup inicial do projeto React.
* **Versionamento:**
    * [Git](https://git-scm.com/) & [GitHub](https://github.com/) - Controle de versão e hospedagem do código.
* **Hospedagem:**
    * [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) *(Escolha qual você usou)* - Plataforma para deploy e hospedagem da aplicação online.

---

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina, siga os passos abaixo:

1.  **Pré-requisitos:**
    * Certifique-se de ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado.
    * Tenha o [Git](https://git-scm.com/) instalado.

2.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO_GITHUB/NOME_DO_SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO_GITHUB/NOME_DO_SEU_REPOSITORIO.git)
    cd NOME_DO_SEU_REPOSITORIO
    ```
    *(Substitua `SEU_USUARIO_GITHUB/NOME_DO_SEU_REPOSITORIO` pelo caminho real do seu repo)*

3.  **Instale as Dependências:**
    * Usando npm:
        ```bash
        npm install
        ```
    * Ou usando Yarn:
        ```bash
        yarn install
        ```

4.  **Inicie a Aplicação:**
    * Usando npm:
        ```bash
        npm start
        ```
    * Ou usando Yarn:
        ```bash
        yarn start
        ```

5.  **Acesse no Navegador:**
    Abra seu navegador e visite `http://localhost:3000` (ou a porta indicada no seu terminal).

---

## 👨‍💻 Autor

* **[Felipe Pucci Veloso]**

---

*Projeto desenvolvido como parte do trabalho prático da disciplina [Desenvolvimento de Software para Web] em [04/2025].*
