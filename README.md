<h3 align="center">
  Desafio Backend Mutant
</h3>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Sobre o desafio

Nesse desafio, você desenvolverá uma aplicação que consuma os dados de uma webapi e armazene os dados no banco de dados.

## Iniciando projeto

Para iniciar o projeto clone esse repositório pra sua maquína com o comando
`git clone https://github.com/josevitorjr/desafio_mutant.git` após a conclusão, navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

Para baixar o container rode o comando `docker pull josevitorr/desafio_mutant:mutant_mysql` no seu terminal.

### Roteiro do desafio

- Backend - Responsável por consumir os dados das API’s, aplicar as regras
necessárias e armazenar os dados no DB;

- Swagger ou Postman - Responsável pela documentação da API desenvolvida, será
utilizado pelo entrevistador para validar o seu teste;

### Funcionalidades da aplicação

- **`Listar os usuários da fake API`**: A aplicação deve conseguir listar os usuários da fake API https://jsonplaceholder.typicode.com/users .

- **`Adicionar usuários da fake API`**: A aplicação deve conseguir salvar os usuários com as seguintes condições:
  - O usuário deve estar hospedado em suítes
  - A inclusão deve ser feita em ordem alfabética.

### Rotas da aplicação

- **`GET /users`**: Será utilizada para atender a função **`Baixar Dados`**, essa rota deve retornar as informações da Fake API.

- **`POST /users`**: Será utilizada para atender a função **`Salvar Dados`**, essa rota deve receber os usuários da Fake API.

### Específicação dos testes

Em cada teste, tem uma breve descrição do que sua aplicação deve cumprir para que o teste passe.

Para esse desafio, temos os seguintes testes:

- **`should be able to list users`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados, todos os produtos que são retornadas do Fake API.

- **`should be able to create a new users`**: Para que esse teste passe, sua aplicação deve criar apenas os usuários que estejam hospedados em suítes.

## :calendar: Entrega

Esse desafio deve ser entregue atráves do github, envie o link do repositório que você fez suas alterações.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

