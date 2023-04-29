FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e o package-lock.json para o contêiner
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código-fonte para o contêiner
COPY . .

# Define a porta que o servidor Vite usará
EXPOSE 3300

# Inicia o servidor Vite
CMD ["npm", "run", "dev"]