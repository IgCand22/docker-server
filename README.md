# 📦 Docker-server

API REST desenvolvida em **Node.js** utilizando **Express**, **MySQL** e **Docker**, com foco em simplicidade, organização e facilidade de execução em qualquer ambiente.

O projeto foi containerizado para eliminar dependências locais e padronizar o ambiente de desenvolvimento.

---

## 🧠 Sobre o projeto

Esta API permite o gerenciamento de **Qualquer Coisa**, oferecendo endpoints para criação e listagem de registros.  
Foi desenvolvida com boas práticas de organização de código, uso de pool de conexões e comunicação entre containers via Docker Compose.

O projeto está aberto a **feedbacks, melhorias e contribuições**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Docker
- Docker Compose

---

## ⚙️ Instalação e execução

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/IgCand22/docker-server.git
cd docker-server
```

### 2️⃣ Rodar conteineres com docker compose
```bash
docker-compose up --build
```

### 3️⃣ Parar conteineres
```bash
// Parar conteineres sem excluir volumes
docker-compose down

// Parar conteineres excluindo volumes
docker-compose down -v
```
