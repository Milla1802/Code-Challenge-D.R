# Boas vindas ao repositório Code Challeng!

## Meus comentários

Este aqui é um projeto de um teste tecnico que estou fazendo para Digital Republic. Ao ler os requisitos do prejeto pensei em inúmeras formas de executá-lo, depois de um tempo achie que a melhor forma seria cria-lo como uma calculadora, estudei alguns projetos de calculadora em React e consegui ver algumas semelhanças que me auxiliariam. Foi utilizado React Hook e Context API na realização.  

---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _camilaam1802@gmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir Code-Challeng
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd Code-Challeng
  git clone git@github.com:Milla1802/Code-Challenge-D.R.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências se necessário:
```javascript
  cd code-challenge
  npm i
```

4. Por último, rode o comando **npm start** o projeto abrirá via browser, no caminho `http://localhost:3000/`.

---

## Requisitos do projeto

Uma aplicação web que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar.

# Regras de Negócio

1. Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros, mas podem possuir alturas e larguras diferentes
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
0,5 L
2,5 L
3,6 L
18 L
