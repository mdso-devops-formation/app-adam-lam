CREATE DATABASE IF NOT EXISTS mdso;

USE mdso;

CREATE TABLE IF NOT EXISTS mdsoMember (
        id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        lastName VARCHAR(100),
        mail VARCHAR(100),
        status VARCHAR(100)
);
