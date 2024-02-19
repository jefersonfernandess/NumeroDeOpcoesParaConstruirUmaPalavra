# Numero de opções para construir uma palavra

### Tarefa
Você recebe um target worde um array of strings. Sua tarefa é contar de quantas maneiras você pode construir uma palavra-alvo a partir das strings do array. Você precisa usar a string inteira do array quantas vezes forem necessárias, mas não pode remover caracteres dessas strings menores.

### Exemplo
Para palavras examplee arrays de destino ['exa','exam','ple'], há apenas uma opção de como fazer isso: pegar strings 'exam'e 'ple'. Então você deve retornar 1neste caso.

Para palavra alvo examplee array ['exa','exam','ple', 'mple']temos 2 opções: 'exa'+'mple'e 'exam'+'ple'. Neste caso você deve retornar 2.

Para palavra alvo examplee array ['exa','ple']não podemos construir palavra alvo, então retornar 0 para tal caso.