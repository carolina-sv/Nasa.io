#  NASA.io | Space Exploration Hub

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

> **Explore o cosmos através dos dados oficiais da NASA.** O NASA.io é uma plataforma web robusta que consome as APIs abertas da agência espacial para fornecer uma experiência visual e informativa sobre astronomia, exploração de Marte e objetos próximos à Terra.

---

## Preview

<p align="center">
 <img width="803" height="770" alt="image" src="https://github.com/user-attachments/assets/cecfab79-3449-4873-9298-33611dbe7d18" />
</p>

---

## Objetivo do Projeto

Este projeto foi desenvolvido para aplicar conceitos avançados de **Desenvolvimento Full Stack** e **Consumo de APIs Complexas**, focando em performance (lazy loading de imagens espaciais) e uma interface imersiva para o usuário final.

### Principais Funcionalidades:
- **APOD (Astronomy Picture of the Day):** Exibição diária da imagem astronômica com descrição detalhada.
- **Mars Rover Photos:** Galeria interativa com filtros por data e por câmera (Curiosity, Opportunity e Spirit).
- **NeoWs (Near Earth Object Web Service):** Monitoramento de asteroides próximos à Terra, incluindo dados de periculosidade e distância.
- **Busca Global:** Filtro por palavras-chave em toda a biblioteca de imagens da NASA.

---

## Tech Stack

### Front-end
- **React.js** (ou Angular) com **TypeScript** para tipagem forte.
- **Tailwind CSS** ou **Styled Components** para design system.
- **Lucide React** para iconografia espacial.

### Back-end & Integração
- **Axios** para requisições HTTP.
- **Context API / Redux** para gerenciamento de estado (cache de imagens).
- **NASA Open APIs** (api.nasa.gov).

---

## Arquitetura e Boas Práticas

O projeto foi estruturado seguindo padrões de **Arquitetura Limpa** e **Código Limpo**:

- **Componentização:** UI modular para reaproveitamento de cartões e filtros.
- **Resiliência:** Tratamento de erros global para falhas na API ou limites de taxa (Rate Limit).
- **Performance:** Otimização de imagens astronômicas de alta resolução para dispositivos móveis.
- **Responsividade:** Layout *mobile-first* adaptado para tablets e desktops.


---

## Como Rodar o Projeto

### Pré-requisitos
Antes de começar, você vai precisar de uma **NASA API KEY**. Você pode obter uma gratuitamente em [api.nasa.gov](https://api.nasa.gov/).

### Instalação

1. Clone o repositório:

   ```bash
   git clone [https://github.com/carolina-sv/nasa.io.git](https://github.com/carolina-sv/nasa.io.git)
    ```

2.Instale as dependências:

```bash
npm install
  ```

3.Configure o arquivo .env:

```bash
VITE_NASA_API_KEY=sua_chave_aqui
  ```

4.Inicie o servidor de desenvolvimento:

```bash
npm run dev
  ```
   

## 👤 Autor
Carolina Viana
LinkedIn: Carolina Viana
Portfolio: carolina-sv
