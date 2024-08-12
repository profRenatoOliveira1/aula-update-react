CREATE TABLE pessoas (
    id serial PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11),
    data_nascimento DATE,
    telefone VARCHAR(11),
    endereco VARCHAR(255),
    altura INT,
    peso INT
);

INSERT INTO pessoas (nome, cpf, data_nascimento, telefone, endereco, altura, peso) VALUES
    ('Diogo Martin Isaac Farias', '65680749181', '2002-02-22', '38988727840', 'Praça Vicente Mota, 976', 192, 97),
    ('Heloise Lara Bárbara da Rocha', '40087701359', '1957-06-13', '86994039916', 'Rua José Mentor, 158', 164, 76),
    ('Benício Ian Barros', '90339671890', '2000-07-26', '53994591549', 'Rua Visconde do Rio Branco, 532', 176, 83),
    ('Giovana Luiza Barbosa', '25834792055', '1993-10-19', '11987654321', 'Rua Flores, 213', 165, 68),
    ('Gabriel Henrique Costa', '32165498703', '1988-11-23', '21999887766', 'Avenida Central, 1020', 180, 85),
    ('Laura Beatriz Souza', '96385274102', '1995-03-05', '31999665544', 'Rua das Palmeiras, 456', 170, 70),
    ('Felipe Oliveira Santos', '74185296307', '2001-09-15', '62999996633', 'Rua das Rosas, 789', 178, 77),
    ('Mariana Clara Almeida', '15975348601', '1972-12-08', '71999882255', 'Avenida Paulista, 101', 160, 60),
    ('Rafael Alves Pereira', '75315984206', '1990-04-11', '81999445566', 'Rua das Hortências, 350', 185, 90),
    ('Isabela Lima Fernandes', '98765432109', '1983-01-29', '61999337788', 'Rua das Margaridas, 590', 168, 65),
    ('Lucas Eduardo Gonçalves', '65498732100', '1997-05-17', '41999884477', 'Rua das Orquídeas, 112', 175, 80),
    ('Ana Júlia Rodrigues', '32109876543', '2003-08-22', '21999441133', 'Rua dos Girassóis, 325', 162, 58),
    ('Pedro Miguel Ribeiro', '14725836905', '1992-02-03', '21999338899', 'Avenida dos Jacarandás, 678', 182, 82),
    ('Fernanda Alves Souza', '85296374106', '1979-07-19', '51999557766', 'Rua dos Cedros, 209', 158, 55),
    ('Thiago Henrique Lima', '36985214703', '2000-10-30', '32999446622', 'Rua das Palmeiras, 451', 177, 75),
    ('Alice Carolina Castro', '96374185209', '1998-06-25', '21999663377', 'Rua das Acácias, 120', 172, 67),
    ('Matheus Gonçalves Nunes', '85214796308', '1985-03-12', '11999224455', 'Avenida dos Coqueiros, 456', 190, 88),
    ('Sofia Vitória Rocha', '45678912307', '2002-11-14', '81999117788', 'Rua das Oliveiras, 876', 166, 62),
    ('Guilherme Cardoso Moreira', '36974125806', '1994-05-07', '21999001122', 'Rua dos Ciprestes, 985', 184, 86);

