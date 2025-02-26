# API de Criação de Mesas de RPG

Esta é uma API desenvolvida com **AdonisJS 6** para gestão de mesas de RPG, permitindo criar, listar e gerenciar mesas e jogadores.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **AdonisJS 6**
- **VineJS**
- **Lucid ORM**
- **PostgreSQL**

---

## 📌 Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/Bruno-bhab/roleplay-api.git
   cd api-rpg
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Copie o arquivo de variáveis de ambiente:

   ```sh
   cp .env.example .env
   ```

4. Configure o banco de dados no arquivo **.env**:

   ```sh
   DB_CONNECTION=sqlite  # Ou outro banco suportado
   DB_DATABASE=./database.sqlite
   ```

5. Rode as migrações:

   ```sh
   node ace migration:run
   ```

6. Inicie o servidor:
   ```sh
   node ace serve --watch
   ```

---

## ✅ Testes

Para rodar os testes:

```sh
node ace test
```

---

## 🛠 Contribuição

1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas modificações (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

---

## 📜 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.
