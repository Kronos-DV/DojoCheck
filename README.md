# DojoCheck

Aplicação web responsiva para demonstrar o controle de alunos, treinos e presenças de uma turma de Jiu-Jitsu.

## Teste no iPhone

1. Abra o link do GitHub Pages no Safari.
2. Toque em **Compartilhar** e depois **Adicionar à Tela de Início** para usar como app.
3. Cadastre alunos, crie treinos e faça chamadas. As alterações ficam nesse aparelho e navegador.

## Recursos

- Cadastro, busca e filtro de alunos por faixa.
- Criação de treinos e chamada com marcação de presença.
- Resumo mensal e exportação CSV.
- Interface adaptada para celular, com suporte a uso offline após o primeiro carregamento.
- Dados de exemplo restauráveis para repetir o teste.

## Limites do protótipo

Os dados ficam apenas no armazenamento local do navegador e não sincronizam com outros aparelhos. Use dados fictícios durante o teste. Login, permissões por perfil, check-in por QR Code, sincronização e backend seguro ainda precisam ser implementados antes do uso real por um dojo. A API em `backend/` é apenas uma estrutura inicial.

## Desenvolvimento

Abra `frontend/index.html` por um servidor HTTP local. A interface não usa bibliotecas externas; o backend inicial usa Node.js, Express, SQLite e bcrypt.