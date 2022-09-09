
# Mais Fit (Em desenvolvimento) - Projeto OPE/TCC

Esse projeto tem por objetivo de criar um gerenciador de pedidos de marmitas fitness online.

## Integrantes do Grupo:

- **Karoline Ferreira dos Santos**
- **Anedino dos Santos**
- **Augusto Roberto Santos Frota Reis**
- **Kauan Amorim da Silva**
- **Rhuan Eugênio Abadias Carvalho**
- **Luciano Neves**


## Configuração do ambiente de desenvolvimento

1. git clone
2. python3 -m venv .venv
3. ative o ambiente virtual
4. na pasta onde se encontra o arquivo setup.py (root do projeto)  execute pip3 install -e .
5. configure o arquivo settings com os dados do seu banco de dados
6. crie o banco de dados
7. no terminal, dentro do diretório do projeto, execute: django-admin makemigrations   e em seguida    django-admin migrate
8. caso os comandos acima não funcionem, efetue o seguinte comando no terminal: export DJANGO_SETTINGS_MODULE=mfit.settings
9. rode o servidor usando o comando: python manage.py runserver

OBS: Se der erro em uma instalação de determinada biblioteca, leia a documentação da mesma.
