# Generation Brasil - Teste Instrutor Front-End

Este repositório foi criado para armazenar os arquivos para o teste de instrutor Front-End da Generation Brasil.

O teste consiste na criação de um site de Secretária Online, feito em Angular, com uso de Bootstrap.

Durante o teste, utilizei e aprendi tecnologias como: NodeJS/ NPM / Angular 11 / Bootstrap 4.6 / NGX Bootstrap

## Para a instalação local do projeto

Efetuar o download ou clone deste projeto. 

Note que é necessário já possuir o NodeJS pré-instalado no computador.

```bash
https://github.com/tjfaccipieri/prova-generation.git
```
Após efetuado o processo acima, acessar a pasta pro projeto pelo Terminal/CMD/Powershell, e executar os seguintes comandos:

#### Instalar as dependências para o projeto
```bash
 npm install
```

```bash
 npm install -g @angular/cli
```

```bash
 ng serve -o
```

## Descrição da aplicação

A aplicação consiste em uma SPA (Single Page Application) criada com AngularJS 11, com uma barra de navegação e um rodapé fixos na tela, com o conteúdo central podendo ser alterado.

### Páginas internas
#### Home
Nesta aplicação, possuímos uma página HOME, com um texto explicativo, e um video introdutório à Generation Brasil.

#### Listar Participantes
Uma página com elementos de um CRUD (Creat/Read/Update/Delete) completo, gerando uma tabela dinâmica que busca os dados de todos os alunos (chamados aqui de Participantes), listando dados como ID, Nome, E-mail, Observações e Turma dos mesmos, bem como 2 botões ao final de cada linha, com as opções de editar ou deletar um participante. Caso deseje deletar um participante, uma tela de Modal será exibida, para dupla confirmação do processo.

#### Listar Turmas
Nesta página, temos um formulário para criação de novas turmas, com uso de validação de campos, tornando-os obrigatórios, e com tamanho mínimo de caracteres, com um botão para criação que ficará ativo apenas após o processo de validação. Logo abaixo, temos uma tabela que faz uso do recurso de Read, citado no CRUD acima, para gerar uma tabela dinâmica com todas as turmas disponíveis.

#### Criar Participante
Nesta ultima página, temos um formulário para a inserção de novos Participantes no banco de dados. Este formulário também conta com validação de campos, da mesma forma que o formulário para criação de turmas.


## Notas finais
Durante a confecção deste projeto, pude estudar, aprender e aperfeiçoar diversas técnicas de estilização e criação de sites em formato SPA, aprender muito mais sobre o uso das tecnologias: AngularJS / Bootstrap.

## License
[MIT](https://choosealicense.com/licenses/mit/)