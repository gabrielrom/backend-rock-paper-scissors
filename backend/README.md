# User Picking

**RF**

- O usuario deve poder escolher entre pedra, papel e tesoura;
- O usuario deve poder ver sua pontuacao;

**RN**

- O usuario so pode escolher apenas uma vez as opcoes;
- A pontuacao do usuario nao pode ser negativa;
- A escolha do usuario deve ser armazenada em um objeto, junto com a escolha do computador;
- O usuario vai sempre ser o primeiro a jogar;


# Computer Picking

**RF**
- O computador deve poder escolher entre pedra, papel e tesoura;

**RNF**
- A aleatoriedade da escolha podera ser feita com Math.random();

**RN**
- A escolha do computador vai ser aleatoria;
- O computador deve apenas poder escolher uma opcao;


# Processador do jogo
**RF**
- O processador do jogo deve poder acessar as escolhar do usuario e da maquina
**RN**
- caso usuario venca sera adicionado 1 ponto na sua pontuacao;
- caso a maquina venca sera tirado 1 ponto na pontuacao do usuario;
- O processador do jogo ira processar os casos de win ou lose com as opcoes;


