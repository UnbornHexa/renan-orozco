# Painel Meteorológico - Aplicação Full Stack

Uma aplicação full-stack completa que coleta dados meteorológicos, processa através de um sistema de filas, armazena no MongoDB e exibe em um dashboard React moderno com insights alimentados por IA e previsões futuras.

## 🎥 Vídeo Demonstrativo

Assista ao vídeo demonstrativo da aplicação: [https://youtu.be/QQtlQ7t_f1k](https://youtu.be/QQtlQ7t_f1k)

## 🏗️ Arquitetura

A aplicação consiste em 5 serviços principais:

1. **Serviço Python** - Coleta dados meteorológicos da API Open-Meteo (incluindo previsões diárias) e publica no RabbitMQ
2. **Worker Go** - Consome mensagens do RabbitMQ e encaminha para a API NestJS
3. **API NestJS** - API backend com MongoDB, autenticação, endpoints meteorológicos e geração de insights
4. **Frontend React** - Dashboard moderno com Vite, Tailwind CSS e shadcn/ui
5. **Infraestrutura** - Containers MongoDB e RabbitMQ

## 🚀 Início Rápido

### Pré-requisitos

- Docker e Docker Compose instalados
- Git

### Executando com Docker Compose

1. Clone o repositório:
```bash
git clone <repository-url>
cd "Renan Orozco"
```

2. Configure as variáveis de ambiente (opcional - valores padrão funcionam para desenvolvimento):
```bash
# O arquivo .env já existe com valores padrão
# Se quiser personalizar, edite o arquivo .env na raiz do projeto

# As variáveis mais importantes para alterar em produção são:
# - JWT_SECRET: Use uma chave forte e aleatória
# - MONGO_ROOT_PASSWORD: Senha do MongoDB
# - RABBITMQ_PASS: Senha do RabbitMQ
# - DEFAULT_USER_PASSWORD: Senha do usuário padrão
```

**⚠️ IMPORTANTE**: O arquivo `.env` já contém valores padrão que funcionam para desenvolvimento. Para produção, **altere todas as senhas e o JWT_SECRET**!

3. Inicie todos os serviços:
```bash
docker-compose up -d
```

4. Aguarde todos os serviços ficarem prontos (pode levar alguns minutos na primeira execução)

5. Acesse a aplicação:
- **Frontend**: http://localhost:5173 (ou porta configurada em `FRONTEND_PORT`)
- **API**: http://localhost:3000/api (ou porta configurada em `API_PORT`)
- **Gerenciamento RabbitMQ**: http://localhost:15672 (usuário/senha configurados em `RABBITMQ_USER`/`RABBITMQ_PASS`)
- **MongoDB**: localhost:27017 (ou porta configurada em `MONGO_PORT`)

### Credenciais Padrão

- **E-mail**: admin@example.com
- **Senha**: 123456

## 📦 Detalhes dos Serviços

### Coletor Meteorológico Python

**Localização**: `weather-collector/`

Coleta dados meteorológicos da API Open-Meteo a cada minuto (configurável) e publica na fila RabbitMQ. Coleta tanto dados atuais quanto previsões horárias (24h) e previsões diárias (7 dias).

**⚠️ Importante sobre dados históricos:**
- A API Open-Meteo fornece apenas dados **atuais** e **previsões futuras**
- **Não é possível** recuperar dados históricos de horas/dias anteriores se o sistema não estava coletando no momento
- Os dados históricos disponíveis são **apenas os que foram coletados** desde que o sistema está rodando
- Para ter um histórico completo, o sistema precisa estar rodando continuamente

**Variáveis de Ambiente**:
- `RABBITMQ_URL`: URL de conexão do RabbitMQ (padrão: amqp://admin:admin123@rabbitmq:5672)
- `WEATHER_API_URL`: URL da API Open-Meteo (padrão: https://api.open-meteo.com/v1/forecast)
- `API_URL`: URL da API NestJS para buscar usuários com localização
- `COLLECTION_INTERVAL`: Intervalo de coleta em segundos (padrão: 60 = 1 minuto)

**Executando manualmente**:
```bash
cd weather-collector
pip install -r requirements.txt
python main.py
```

### Worker Go

**Localização**: `go-worker/`

Consome dados meteorológicos do RabbitMQ, valida e envia para a API NestJS. Processa tanto dados atuais quanto previsões futuras.

**Variáveis de Ambiente**:
- `RABBITMQ_URL`: URL de conexão do RabbitMQ
- `API_URL`: Endpoint da API NestJS para logs meteorológicos
- `QUEUE_NAME`: Nome da fila RabbitMQ (padrão: weather_data)

**Executando manualmente**:
```bash
cd go-worker
go mod download
go run main.go
```

### API NestJS

**Localização**: `backend/`

API RESTful com as seguintes funcionalidades:
- Armazenamento e recuperação de dados meteorológicos
- Gerenciamento de usuários (CRUD)
- Autenticação JWT
- Insights meteorológicos alimentados por IA
- Previsões futuras (análise de dados dos próximos 7 dias)
- Exportação CSV/XLSX com filtro de período
- Integração opcional com API Pokemon

**Endpoints**:

#### Meteorologia
- `POST /api/weather/logs` - Criar log meteorológico (usado pelo worker Go)
- `GET /api/weather/logs` - Listar logs meteorológicos (paginado, com filtros opcionais)
- `GET /api/weather/logs/latest` - Obter dados meteorológicos mais recentes
- `GET /api/weather/logs/:id` - Obter log meteorológico específico
- `GET /api/weather/insights` - Obter insights gerados por IA (inclui alertas e previsões futuras)
- `GET /api/weather/export/csv?dateStart=YYYY-MM-DD&dateEnd=YYYY-MM-DD` - Exportar dados meteorológicos como CSV (com filtro de período opcional)
- `GET /api/weather/export/xlsx?dateStart=YYYY-MM-DD&dateEnd=YYYY-MM-DD` - Exportar dados meteorológicos como XLSX (com filtro de período opcional)
- `DELETE /api/weather/logs/:id` - Excluir log meteorológico

#### Autenticação
- `POST /api/auth/login` - Fazer login e obter token JWT

#### Usuários
- `GET /api/users` - Listar todos os usuários
- `POST /api/users` - Criar novo usuário
- `GET /api/users/:id` - Obter usuário por ID
- `PATCH /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Excluir usuário
- `GET /api/users/with-locations` - Listar usuários com localização (usado pelo coletor Python)
- `GET /api/users/profile/me` - Obter perfil do usuário autenticado

#### Localização (Países, Estados e Cidades)
- `GET /api/users/countries` - Listar todos os países do mundo
- `GET /api/users/states/:countryCode` - Listar estados/províncias de um país
- `GET /api/users/cities/:countryCode/:stateCode` - Listar cidades de um estado

#### Pokemon (Opcional)
- `GET /api/pokemon` - Listar Pokémon (paginado)
- `GET /api/pokemon/:id` - Obter detalhes do Pokémon

**Variáveis de Ambiente**:
- `MONGODB_URI`: String de conexão do MongoDB (construída automaticamente a partir de MONGO_ROOT_USERNAME, MONGO_ROOT_PASSWORD, etc.)
- `JWT_SECRET`: Chave secreta para tokens JWT
- `PORT` ou `API_PORT`: Porta da API (padrão: 3000)
- `NODE_ENV`: Ambiente de execução (development/production)
- `DEFAULT_USER_EMAIL`: E-mail do administrador padrão
- `DEFAULT_USER_PASSWORD`: Senha do administrador padrão
- `COUNTRY_STATE_CITY_API_KEY`: (Opcional) API key da CountryStateCity API para buscar países, estados e cidades do mundo todo. [Obter API key gratuita](https://countrystatecity.in/). Se não fornecida, o sistema usa uma lista limitada de países principais. Para o Brasil, sempre usa a API do IBGE (gratuita).
- `CORS_ORIGINS`: Origens permitidas para CORS (separadas por vírgula)

**Executando manualmente**:
```bash
cd backend
npm install
npm run start:dev
```

### Frontend React

**Localização**: `frontend/`

Aplicação React moderna com:
- Dashboard meteorológico com dados em tempo real
- Visualização de insights de IA
- Alertas meteorológicos em tempo real
- Previsões futuras (próximos 7 dias)
- Gráficos interativos com filtros de intervalo e período
- Interface de gerenciamento de usuários
- Explorador de Pokemon com busca em tempo real
- Funcionalidade de exportação CSV/XLSX com seleção de período

**Páginas**:
- `/` - Dashboard com dados meteorológicos, insights, alertas e previsões futuras
- `/users` - Gerenciamento de usuários (CRUD)
- `/pokemon` - Explorador de Pokemon com paginação e busca

**Funcionalidades do Dashboard**:
- **Cards de Dados Atuais**: Temperatura, Umidade, Velocidade do Vento, Precipitação
- **Painel de Insights**: Estatísticas, tendências, índice de conforto, classificação
- **Alertas**: Alertas automáticos de condições extremas (temperatura, umidade, precipitação, vento)
- **Previsões Futuras**: Previsões para os próximos 7 dias (chuva forte, muito sol, calor/frio extremo)
- **Gráficos Interativos**:
  - Gráfico de Temperatura e Umidade (linha)
  - Gráfico de Velocidade do Vento (barras)
  - Filtros de intervalo: 1min, 5min, 30min, 1h
  - Filtros de período: Seleção de data inicial e final
  - Limite automático: 15 pontos no mobile, 30 no desktop (quando não há filtro de período)
- **Exportação**: Modal de confirmação com seleção de período para exportar CSV/XLSX

**Funcionalidades do Explorador de Pokemon**:
- Listagem paginada de Pokémon
- Busca em tempo real por nome
- Visualização detalhada de cada Pokémon
- Layout responsivo (modal no mobile, sidebar no desktop)

**Variáveis de Ambiente**:
- `VITE_API_URL`: URL da API backend (padrão: http://localhost:3000/api)

**Executando manualmente**:
```bash
cd frontend
npm install
npm run dev
```

## 🔄 Fluxo de Dados

1. **Serviço Python** → Coleta dados meteorológicos da API Open-Meteo (atuais + previsões)
2. **Serviço Python** → Publica dados na fila RabbitMQ (`weather_data`)
3. **Worker Go** → Consome mensagens do RabbitMQ
4. **Worker Go** → Valida e encaminha dados para a API NestJS
5. **API NestJS** → Armazena dados no MongoDB (incluindo previsões diárias)
6. **Frontend React** → Busca dados da API NestJS e exibe
7. **Sistema de Insights** → Analisa dados e gera alertas e previsões futuras

## 🤖 Insights de IA

O sistema gera insights alimentados por IA a partir de dados meteorológicos incluindo:

### Análise Estatística
- Temperatura média, mínima e máxima
- Umidade média
- Velocidade do vento média
- Número de pontos de dados analisados

### Tendências
- Tendência de temperatura (subindo/descendo/estável)
- Variação de temperatura entre períodos recentes e antigos

### Índice de Conforto
- Cálculo baseado em temperatura, umidade e velocidade do vento
- Escala de 0-100
- Níveis: Muito Confortável, Confortável, Moderado, Desconfortável, Muito Desconfortável

### Classificação do Clima
- Classificação automática: Frio, Quente, Agradável, Chuvoso, Moderado

### Alertas Automatizados
- **Temperatura Alta**: > 30°C (Aviso) ou > 35°C (Alerta)
- **Temperatura Baixa**: < 10°C (Aviso) ou < 5°C (Alerta)
- **Alta Umidade**: > 80%
- **Precipitação**: > 5mm
- **Vento Forte**: > 30 km/h

### Previsões Futuras
- **Chuva Forte**: Detecta chuva forte esperada nos próximos 7 dias
- **Muito Sol**: Identifica dias com muito sol e temperatura alta
- **Calor Extremo**: Alerta para temperaturas máximas > 35°C
- **Frio Intenso**: Alerta para temperaturas mínimas < 5°C
- Formato das previsões: "no dia DD/MM, dia-da-semana"

### Resumos em Linguagem Natural
- Resumo do clima dos últimos 7 dias (limitado)
- Condições atuais
- Classificação geral

Os insights são gerados usando o endpoint `/api/weather/insights` e podem ser acionados:
- Automaticamente quando novos dados chegam
- Sob demanda via frontend
- Com limites personalizados para pontos de dados analisados

## 📊 Funcionalidades

### Dashboard Meteorológico

#### Visualização de Dados
- Exibição de dados meteorológicos em tempo real
- Cards de temperatura, umidade, velocidade do vento e precipitação
- Atualização automática a cada minuto

#### Gráficos Interativos
- **Gráfico de Temperatura e Umidade**: Gráfico de linha com duas séries
- **Gráfico de Velocidade do Vento**: Gráfico de barras
- **Filtros de Intervalo**: 1min, 5min, 30min, 1h
- **Filtros de Período**: Seleção de data inicial e final para visualizar períodos específicos
- **Limite Inteligente**: 
  - Mobile: máximo 15 pontos
  - Desktop: máximo 30 pontos
  - Quando há filtro de período: mostra todos os pontos do período selecionado
- **Responsivo**: Adaptação automática para mobile e desktop

#### Painel de Insights
- Estatísticas detalhadas (médias, mín/máx)
- Tendências de temperatura
- Índice de conforto
- Classificação do clima
- **Alertas**: Exibidos em laranja, lado a lado com Previsões Futuras no desktop
- **Previsões Futuras**: Exibidas em azul, com formato "no dia DD/MM, dia-da-semana"

#### Exportação de Dados
- **Modal de Confirmação**: Abre ao clicar em Exportar CSV/XLSX
- **Seleção de Período**: Campos opcionais de data inicial e final
- **Exportação Filtrada**: Exporta apenas os registros do período selecionado
- **Formatos**: CSV e XLSX

### Gerenciamento de Usuários
- Operações CRUD completas
- Autenticação baseada em JWT
- Criação de usuário administrador padrão na inicialização
- Ativação/desativação de usuários
- Seleção de localização (país, estado, cidade)
- Integração com API CountryStateCity (quando API key fornecida)

### Explorador de Pokemon (Opcional)
- Navegar por Pokémon com paginação (20 por página)
- **Busca em Tempo Real**: Filtra Pokémon por nome conforme você digita
- Visualizar informações detalhadas do Pokémon
- Exibição de tipos, habilidades e estatísticas
- Layout responsivo: modal no mobile, sidebar no desktop

## 🐳 Serviços Docker

O `docker-compose.yml` define os seguintes serviços:

- **mongodb**: Banco de dados MongoDB 7
- **rabbitmq**: RabbitMQ com interface de gerenciamento
- **api**: API backend NestJS
- **weather-collector**: Coletor de dados meteorológicos Python
- **go-worker**: Worker Go para RabbitMQ
- **frontend**: Aplicação frontend React

Todos os serviços estão interconectados via redes Docker e configurados com dependências apropriadas. Todas as variáveis sensíveis são lidas do arquivo `.env`.

## 🔧 Desenvolvimento

### Desenvolvimento Backend

```bash
cd backend
npm install
npm run start:dev  # Modo watch
npm run build      # Build de produção
npm run lint       # Verificar código
```

### Desenvolvimento Frontend

```bash
cd frontend
npm install
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run lint       # Verificar código
```

### Desenvolvimento Worker Go

```bash
cd go-worker
go mod download
go run main.go
```

### Desenvolvimento Serviço Python

```bash
cd weather-collector
pip install -r requirements.txt
python main.py
```

## 📝 Variáveis de Ambiente

O projeto já inclui um arquivo `.env` com valores padrão que funcionam para desenvolvimento. Todas as variáveis sensíveis foram movidas para este arquivo.

### Arquivo .env

O arquivo `.env` contém todas as configurações necessárias:

- **MongoDB**: Credenciais e configurações do banco de dados
- **RabbitMQ**: Credenciais e portas do message broker
- **API NestJS**: JWT Secret, porta, usuário padrão, CORS
- **Weather Collector**: URL da API e intervalo de coleta
- **Frontend**: Porta e URL da API

### Valores Padrão (Desenvolvimento)

O arquivo `.env` já está configurado com valores padrão que permitem executar o sistema imediatamente:

```bash
# MongoDB
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=admin123
MONGO_DATABASE=weather_db
MONGO_PORT=27017

# RabbitMQ
RABBITMQ_USER=admin
RABBITMQ_PASS=admin123
RABBITMQ_PORT=5672
RABBITMQ_MANAGEMENT_PORT=15672

# API NestJS
JWT_SECRET=your-super-secret-jwt-key-change-in-production-please-use-a-strong-random-key
API_PORT=3000
NODE_ENV=development
DEFAULT_USER_EMAIL=admin@example.com
DEFAULT_USER_PASSWORD=123456
COUNTRY_STATE_CITY_API_KEY=QVVQOFg0T3NheE5zVjZ4angzcUkzYkNWcVB5VFhLSkRoZWs5WEJsWA==
CORS_ORIGINS=http://localhost:5173,http://localhost:3000

# Weather Collector
WEATHER_API_URL=https://api.open-meteo.com/v1/forecast
COLLECTION_INTERVAL=60

# Frontend
FRONTEND_PORT=5173
VITE_API_URL=http://localhost:3000/api
```

### ⚠️ IMPORTANTE para Produção

**Antes de usar em produção, altere obrigatoriamente:**

1. `JWT_SECRET`: Gere uma chave forte e aleatória (mínimo 32 caracteres)
2. `MONGO_ROOT_PASSWORD`: Use uma senha forte
3. `RABBITMQ_PASS`: Use uma senha forte
4. `DEFAULT_USER_PASSWORD`: Altere a senha do usuário padrão

### Personalizando Configurações

Se quiser alterar as configurações, edite o arquivo `.env` na raiz do projeto. O `docker-compose.yml` lê automaticamente essas variáveis.

**Exemplo de geração de JWT_SECRET seguro:**
```bash
# Linux/Mac
openssl rand -base64 32

# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

## 🧪 Testes

### Testes de Endpoints da API

Use ferramentas como Postman, cURL ou a aplicação frontend para testar endpoints.

Exemplo de login:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"123456"}'
```

Exemplo de obtenção de logs meteorológicos (requer autenticação):
```bash
curl -X GET http://localhost:3000/api/weather/logs \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

Exemplo de exportação CSV com filtro de período:
```bash
curl -X GET "http://localhost:3000/api/weather/export/csv?dateStart=2025-12-01&dateEnd=2025-12-07" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -o weather-logs.csv
```

## 📦 Tecnologias Utilizadas

### Backend
- **NestJS** - Framework Node.js progressivo
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - Modelagem de objetos MongoDB
- **JWT** - Autenticação
- **ExcelJS** - Geração de arquivos Excel
- **TypeScript** - JavaScript com tipagem
- **Axios** - Cliente HTTP

### Frontend
- **React** - Biblioteca UI
- **Vite** - Ferramenta de build
- **TypeScript** - JavaScript com tipagem
- **Tailwind CSS** - CSS utilitário
- **shadcn/ui** - Componentes UI
- **Recharts** - Biblioteca de gráficos
- **React Router** - Roteamento
- **Lucide React** - Ícones

### Coleta e Processamento de Dados
- **Python 3.11** - Coleta de dados meteorológicos
- **Go 1.21** - Worker RabbitMQ
- **RabbitMQ** - Fila de mensagens
- **API Open-Meteo** - Fonte de dados meteorológicos (atuais e previsões)

### Infraestrutura
- **Docker** - Containerização
- **Docker Compose** - Orquestração multi-container

## 🐛 Solução de Problemas

### Serviços não estão iniciando
- Verifique os logs do Docker: `docker-compose logs [service-name]`
- Certifique-se de que as portas não estão em uso
- Verifique se o Docker tem recursos suficientes alocados

### Problemas de conexão com o banco de dados
- Aguarde o MongoDB ficar totalmente pronto (pode levar 30-60 segundos)
- Verifique as credenciais do MongoDB no arquivo `.env`
- Verifique a conectividade de rede entre serviços

### Frontend não está conectando à API
- Certifique-se de que a API está rodando e acessível
- Verifique a variável de ambiente `VITE_API_URL` no arquivo `.env`
- Verifique as configurações de CORS no NestJS (variável `CORS_ORIGINS`)

### Dados meteorológicos não estão aparecendo
- Verifique os logs do coletor Python: `docker-compose logs weather-collector`
- Verifique se o RabbitMQ está rodando: `docker-compose logs rabbitmq`
- Verifique os logs do worker Go: `docker-compose logs go-worker`
- Certifique-se de que a API está recebendo dados: `docker-compose logs api`
- Verifique se há usuários cadastrados com localização configurada

### Por que não vejo dados de horas/dias anteriores?
- A API Open-Meteo **não fornece dados históricos** do passado
- Apenas dados coletados desde que o sistema está rodando estarão disponíveis
- Se o sistema ficou parado, não haverá dados do período parado
- **Solução**: Mantenha o sistema rodando continuamente para construir um histórico completo

### Previsões futuras não aparecem
- Verifique se o coletor Python está coletando previsões diárias (deve estar configurado)
- Verifique os logs: `docker-compose logs weather-collector`
- Certifique-se de que os dados estão sendo salvos com o campo `dailyForecast`

### Gráficos não mostram dados
- Verifique se há dados meteorológicos coletados
- Tente ajustar os filtros de intervalo (1min, 5min, 30min, 1h)
- Use o filtro de período para visualizar dados de datas específicas
- No mobile, o limite é de 15 pontos; no desktop, 30 pontos

### Problemas ao construir imagens Docker (timeout, erro de conexão)

Se você encontrar erros como `TLS handshake timeout` ou `failed to resolve source metadata` ao construir as imagens:

**Solução 1: Pull manual das imagens base**
```bash
# Baixe as imagens base manualmente antes de construir
docker pull node:20-alpine
docker pull mongo:7
docker pull rabbitmq:3-management
docker pull golang:1.21-alpine
docker pull alpine:latest
docker pull python:3.11-slim

# Depois tente construir novamente
docker-compose build
```

**Solução 2: Verificar conectividade com Docker Hub**
```bash
# Teste a conectividade com Docker Hub
curl -I https://registry-1.docker.io/v2/

# Verifique as configurações de DNS do Docker
docker info | grep -i dns
```

**Solução 3: Reconstruir apenas o serviço com problema**
```bash
# Se apenas um serviço falhar, reconstrua apenas ele
docker-compose build frontend  # ou api, go-worker, etc.
```

**Solução 4: Limpar cache e tentar novamente**
```bash
# Limpe o cache de build do Docker e tente novamente
docker builder prune -f
docker-compose build --no-cache
```

**Solução 5: Configurar mirror registry (se disponível)**
Se você estiver em uma região com acesso limitado ao Docker Hub, configure um mirror registry no arquivo `/etc/docker/daemon.json` (Linux) ou nas configurações do Docker Desktop (Windows/Mac).

**Nota**: Os erros de timeout geralmente são temporários e relacionados à conectividade de rede. Aguarde alguns minutos e tente novamente.

## 🚂 Deploy no Railway

O projeto está configurado para deploy no Railway. Siga estes passos:

### 1. Configuração Inicial

1. **Criar um novo projeto** no Railway
2. **Adicionar um serviço** e conectar ao repositório Git
3. **Root Directory**: Deixe vazio ou como `.` (raiz) - os arquivos `railway.json` e `Procfile` já estão configurados

### 2. Variáveis de Ambiente Obrigatórias

Configure as seguintes variáveis de ambiente no Railway:

#### ⚠️ CRÍTICO - MongoDB
- `MONGODB_URI` ou `MONGO_URI` - **String de conexão do MongoDB**
  - **Opção 1 (Recomendado)**: MongoDB do Railway
    - No projeto Railway, clique em **"New"** → **"Database"** → **"Add MongoDB"**
    - O Railway criará automaticamente `MONGO_URI`
    - No serviço da API, adicione: `MONGODB_URI` = valor de `MONGO_URI` do MongoDB
  - **Opção 2**: MongoDB Atlas (Cloud - Gratuito)
    - Crie conta em [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
    - Crie um cluster gratuito (M0)
    - Configure Network Access: Adicione `0.0.0.0/0`
    - Configure Database Access: Crie usuário com senha
    - Obtenha connection string: `mongodb+srv://user:pass@cluster.mongodb.net/weather_db`
    - Adicione como variável `MONGODB_URI` no Railway

#### Outras Variáveis Obrigatórias
- `JWT_SECRET` - Chave secreta para JWT (gere uma chave forte, mínimo 32 caracteres)
- `PORT` - Porta da aplicação (Railway define automaticamente via variável `PORT`)
- `NODE_ENV` - `production`

#### Variáveis Opcionais mas Recomendadas
- `DEFAULT_USER_EMAIL` - Email do usuário padrão (padrão: `admin@example.com`)
- `DEFAULT_USER_PASSWORD` - Senha do usuário padrão
- `CORS_ORIGINS` - Origens permitidas para CORS (ex: `https://your-frontend.railway.app`)

### 3. Deploy Automático

O Railway detectará automaticamente a configuração:
- **Build**: `cd backend && npm install && npm run build` (via `railway.json`)
- **Start**: `cd backend && npm run start:prod` (via `Procfile` ou `railway.json`)

### 4. Verificação

Após o deploy, verifique:
1. **Health Check**: `https://your-app.railway.app/api/health`
2. **API Endpoint**: `https://your-app.railway.app/api`
3. **Logs**: Verifique os logs no Railway para erros

### 5. Troubleshooting Railway

**Erro: `getaddrinfo ENOTFOUND mongodb` ou `Unable to connect to the database`** ⚠️
- **Causa**: A variável `MONGODB_URI` não está configurada no Railway
- **Solução**: Configure o MongoDB conforme seção 2 acima
- **Verificação**: Nos logs, deve aparecer `MONGODB_URI: definida` (não "não definida")

**Erro: `MongoServerError: Authentication failed`** 🔐
- **Causa**: Connection string configurada, mas usuário/senha incorretos
- **Soluções**:
  1. Verifique se a connection string está completa e correta
  2. Se a senha tem caracteres especiais (`@`, `#`, `%`), faça URL encoding:
     - `@` → `%40`, `#` → `%23`, `%` → `%25`
  3. Recrie o MongoDB no Railway ou use MongoDB Atlas

**Erro: "Railpack could not determine how to build the app"**
- **Solução**: Verifique se o Root Directory está como `.` (raiz) ou `backend`
- O Nixpacks detectará automaticamente o Node.js pelo `package.json`

**Erro: "Cannot find module '/app/dist/main.js'"**
- **Solução**: O build deve executar `npm install` (instala devDependencies como @nestjs/cli)
- O start command usa `npm run start:prod` que executa `prestart:prod` fazendo build automaticamente

### 6. Deploy do Frontend (Opcional)

**Opção 1: Railway**
1. Crie um novo serviço no Railway
2. Configure Root Directory como: `frontend`
3. Build Command: `npm install && npm run build`
4. Start Command: `npm run preview` (ou configure um servidor estático)

**Opção 2: Outras Plataformas**
- Use Vercel, Netlify, ou Cloudflare Pages para o frontend
- Configure `VITE_API_URL` apontando para a API no Railway

### Arquivos de Configuração

O projeto inclui os seguintes arquivos para deploy no Railway:
- ✅ `package.json` (raiz) - Scripts de build e start
- ✅ `railway.json` - Configuração do Railway
- ✅ `Procfile` - Comando de start para o Railway
- ✅ `backend/nixpacks.toml` - Configuração alternativa de build (Nixpacks)

## 📄 Licença

Este projeto foi criado para fins educacionais/demonstrativos.

## 👤 Autor

Renan Orozco

---

## ✅ Checklist de Funcionalidades

### Coleta de Dados
- ✅ Python coleta dados meteorológicos da API Open-Meteo
- ✅ Coleta dados atuais (temperatura, umidade, vento, precipitação)
- ✅ Coleta previsões horárias (próximas 24 horas)
- ✅ Coleta previsões diárias (próximos 7 dias)
- ✅ Python envia dados para RabbitMQ

### Processamento
- ✅ Worker Go consome do RabbitMQ e encaminha para NestJS
- ✅ Validação de dados no worker Go
- ✅ Retry automático em caso de falha

### Armazenamento
- ✅ NestJS armazena dados no MongoDB
- ✅ Armazena dados atuais e previsões (horárias e diárias)
- ✅ Indexação por timestamp e localização

### API Backend
- ✅ NestJS expõe endpoints meteorológicos
- ✅ NestJS gera insights de IA
- ✅ NestJS gera alertas automáticos
- ✅ NestJS gera previsões futuras
- ✅ NestJS exporta CSV/XLSX com filtro de período
- ✅ NestJS implementa CRUD de usuários + autenticação
- ✅ NestJS integra com API Pokemon (opcional)
- ✅ Endpoints de localização (países, estados, cidades)

### Frontend
- ✅ Frontend React com Vite + Tailwind + shadcn/ui
- ✅ Dashboard exibe dados meteorológicos em tempo real
- ✅ Dashboard exibe insights de IA
- ✅ Dashboard exibe alertas meteorológicos
- ✅ Dashboard exibe previsões futuras
- ✅ Gráficos interativos com filtros de intervalo
- ✅ Gráficos com filtros de período (data inicial/final)
- ✅ Limite inteligente de pontos (15 mobile, 30 desktop)
- ✅ Modal de exportação com seleção de período
- ✅ Interface de gerenciamento de usuários
- ✅ Página exploradora de Pokemon com busca em tempo real
- ✅ Layout responsivo (mobile e desktop)

### Infraestrutura
- ✅ Docker Compose orquestra todos os serviços
- ✅ Todas as variáveis sensíveis em arquivo .env
- ✅ Valores padrão funcionam out-of-the-box
- ✅ TypeScript no backend e frontend
- ✅ README completo e atualizado
