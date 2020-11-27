# Projeto Lista de Receita - Receitaria

Este é um projeto responsivo com a API Pública [MealDB](https://www.themealdb.com/api.php).

## Instruções de instalação

Para instalar as dependências, você pode executar no diretório do projeto o seguinte comando:

#### `yarn install`

Para iniciar o projeto, você pode executar:

#### `yarn start`

Abra [http://localhost:3000](http://localhost:3000) para vê-lo no navegador.

## Login

O login é uma propriedade na Store que define se o usuário está logado e, se estiver, ele tem acesso a outras rotas, como `/recipes` e `/recipes/:id`. Ele não é uma autenticação real.

Para este projeto, o usuário e a senha são:

```
user: admin
password: admin
```

## Tecnologias Utilizadas

- [Create React App](https://github.com/facebook/create-react-app): utilizado para fazer o bootstrap da estrutura do projeto.

- [React Router](https://reactrouter.com/): ferramenta utilizada para lidar com as rotas em uma single-page application.

- [Redux](redux.js.org/): utilizado para gerenciar o estado da aplicação.

- [Material UI](https://material-ui.com/): biblioteca de componentes React utilizado para fazer todo design do projeto.

- [React Select](https://react-select.com/home): utilizado para fazer o Select das categorias das receitas.

## Considerações sobre o Projeto

A API MealDB não apresentava nenhum endpoint que retornava todas as receitas, então a solução foi [filtrar por categorias](https://www.themealdb.com/api/json/v1/1/categories.php) utilizando o React Select.

Com a categoria escolhida, uma lista com as fotos, nome e link para mais detalhes da receita aparece utilizando outro endpoint, [filtrando por categoria](https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood).
Para essa visualização, foi utilizado o componente Grid List do Material UI.

Ao clicar no botão de Detalhes, a página da receita escolhida é renderizada. Nesta página, há, além da foto e do nome da receita, os Ingredientes e o Modo de Preparo. Ao final da página, é incluído um link do YouTube de preparação da receita. Todas as informações foram retiradas do [endpoint com filtro por ID](https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772).
