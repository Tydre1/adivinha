
# Adivinhe o Número - 7 Days of Code Challenge

**Adivinhe o Número** é um pequeno jogo criado como parte do desafio 7 Days of Code. O objetivo é adivinhar um número entre 1 e 10 gerado aleatoriamente. O jogador terá um número limitado de tentativas para acertar o número correto.

## Como Jogar

1. Abra o arquivo `index.html` em um navegador da web.

2. Um prompt será exibido pedindo para você adivinhar um número entre 1 e 10.

3. Digite um número e clique em OK.

4. Você receberá feedback se o número que você adivinhou é maior ou menor do que o número correto.

5. Continue adivinhando até acertar o número ou até atingir o limite de tentativas.

6. Após acertar o número, uma mensagem de parabéns será exibida, juntamente com o número correto e o número de tentativas que você utilizou.

7. Se desejar jogar novamente, clique em OK no prompt de confirmação. Caso contrário, clique em Cancelar para encerrar o jogo.

## Tecnologias Utilizadas

- HTML
- JavaScript

## Desafios

- Criar uma função que gere um número aleatório entre 1 e 10.
- Implementar um loop para permitir múltiplas tentativas até que o jogador acerte o número.
- Exibir mensagens de feedback conforme o jogador faz suas tentativas.
- Incluir uma opção para jogar novamente após acertar o número.

## 7 Days of Code

Este projeto faz parte do desafio 7 Days of Code, no qual desenvolvedores são incentivados a criar um projeto por dia durante sete dias consecutivos. O desafio visa melhorar habilidades de programação, promover a criatividade e aprimorar o pensamento lógico.

🎉 Divirta-se jogando e boa sorte! 🎉

---

## Código do Jogo

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivinhe o número</title>
</head>
<body>
    
    <script src="guess.js"></script>
</body>
</html>
```

```javascript
let correctNumber;

// acertar o número de 1 - 10
function randomNumber() {
    return Math.round(Math.random() * (10 - 1 + 1) + 1);
}

// Restante do código...
```

---

Feito com ❤️ por [André Barbosa](https://www.linkedin.com/in/andr%C3%A9-barbosa229/).
