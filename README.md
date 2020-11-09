# desafio-javascript
Repositório com o desafio técnico Javascript Software Developer IdWall

Como funciona o desafio
Para nossa primeira etapa de avaliação técnica, propomos um teste composto de 6 pequenos desafios, onde queremos avaliar conhecimentos sobre lógica de programação e Javascript básico. Os códigos podem ser encontrados no diretório challenges e devem ser resolvidos de acordo com seus respectivos enunciados.

Para auxiliar você na resolução dos problemas, deixamos a suíte de testes automatizados já funcionando. Siga o seguinte fluxo:

# Instala as dependências do projeto
npm install

# Para rodar os testes para todos os desafios
npm run test:all

# Para rodar o teste para um desafio específico
npm run test:challenge:1

# Segue um breve resumo de como foram feitos cada um dos exercícios:

Exercício 1:
Passei o arr por parâmetro com o prefixo Spread Operator(...), para que cada item seja iterado, depois com uma Arrow Function, ultilizei a função reduce, passei como primeiro argumento o valor inicial e o total e no segundo argumento fiz a soma desses valores.

Exercício 2: 
Foi criada uma função com o numero como parâmetro.
Na primeira verificação condicional, usei o objeto "arguments" para verificar se o parâmetro é diferente de 1, ou se o tipo dele é diferente do número, eu retorno a função.
Depois, tenho duas variáveis declaradas, a inicial que começa com 1 e a soma que começa zerada. 
Temos um while, que enquanto inicio for menor que o numero passado no parâmetro, ele entra na condição que chama a função já criada isPrime com o inicio no parâmetro e incrementa a soma com o número do início, e depois retorna o valor de soma já atualizado.

Exercício 03:
Declarei a função MDC, com os dois numeros como parâmetro. Dentro da função declarei uma variável resto e usei um laço de repetiçao do, que enquanto a variável for igual ao resto de a por b(do parâmetro), o a recebe o b como tributo e o b recebe a variável resto enquanto dentro do While, o resto seja diferente de 0.
Depois retorno o a, que traz o resultado do cálculo.

Exercício 04:

Declarei uma const users que retorna um objeto que instância do usuário ao id e ao nome, outra const reports que retorna o report do parâmetro com a função reduce, que traz nos dois parâmetros a conta com usuário e suas instâncias de id, usuário e um Spread para percorrer todo resultado, e um objeto vazio. Por fim uma outra const result, que retorna um array id, que tem como atributo as instâncias de id, user e o report(que com o Object.keys traz o report em ordem).
Na const normalizeData, foram criados três "consts", a primeira com id, usuário e report desmenbrado um a um(com o Spread Operator), a segunda definindo o usuário e report e a terceira definindo o resultado.
O return chama as duas últimas consts e exibe o resultado.

Exercício 05:

Dentro da const doRequest passamos o setLoading como verdadeiro(Parâmetro). chamamos a api().then conforme o enunciado e seus dois parâmetros, o primeiro percorrendo o response e atribuindo valor falso para o setError e o setLoading,e o segundo é que caso não percorra, é lançada uma exception com a Resposta inválida.
Depois chamamos o catch para manipulação da rejeição, no caso, quando o setLoading for falso.

Exercício 06:

criei duas const, uma height e outra width com expressões regulares(entre /.../) como atributos. Dentro da RegexEsp começa com o height ou o width, e a flag d* verifica se é algum dígito entre [0 - 9]. A função .exec realiza a busca da Regex dentro de htmlTemplate passado por parâmetro.
No return foram feitas duas condicionais ternárias, uma para height e outra para width, pegando a primeira posição tanto de uma como a outra.

