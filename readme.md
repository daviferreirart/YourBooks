# Disciplina da Cadeira de Estágio Supervisionado 2 da UNI7

###  Instalar dependências e rodar aplicação em localhost.
    -- npm install
    -- npx lerna bootstrap = install packages
    -- npx lerna run devStart --scope yourbooks-api --stream = rodar aplicação back
    -- npx lerna run devStart --scope yourbooks-web --stream = rodar aplicação web
>   Note: Foi utilizado o docker para o armazenamento de dados do Postgres do lado do backend, então será necessário ser feita a configuração local do docker.
