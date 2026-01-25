USE docker-db;

CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(35) NOT NULL,
    qtd_massagem INT 
);

CREATE TABLE IF NOT EXISTS massagens (
    id_massagem INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data_massagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tempo INT DEFAULT 60,

    CONSTRAINT fk_cliente_massagens
        FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente)
);

INSERT INTO clientes (nome, qtd_massagem) VALUES ("Igor Candido", 0);

INSERT INTO massagens (id_cliente, data_massagem, tempo) VALUES (1, "2026-01-15", 120);