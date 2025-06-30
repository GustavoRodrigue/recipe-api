Receita API

Uma pequena API em NestJS para criar, listar e buscar receitas.

Optei por não realizar o deploy da aplicação em uma plataforma gratuita. Em vez disso, criei uma imagem Docker e a disponibilizei publicamente no Docker Hub, permitindo que qualquer pessoa possa baixá-la e executá-la localmente para fins de teste.

Obs: Rode todos os comando sem o ## 


Como rodar 

Baixa o repositorio no github usando o comando;

## git clone <repo-url>

Depois na pasta do código abra o vscode:

## cd recipe-api

Depois instale as bibliotecas usando o coamdo:

## npm install

Para rodar o código digite o comando

## npm run start



Como rodar via docker:

Primeiro Digite no terminal o comando:

## docker pull gustavorodrigues/recipe-api

E para rodar o digite o seguinte comando:

## docker run -p 3000:3000 gustavorodrigues/recipe-api


