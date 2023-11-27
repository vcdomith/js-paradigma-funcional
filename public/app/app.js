import { handleStatus, log } from "./utils/promise-helpers.js"
import './utils/array-helpers.js'
import { notasService as service } from "./nota/servico.js"

// const sumItems = notas => notas
//     .$flatMap(nota => nota.itens)
//     .filter(item => item.codigo == '2143')
//     .reduce((total, item) => total + item.valor, 0)

// A função abaixo é um exmple do 'closure', onde para a função externa é passado o parametro 'code' e ela retorna uma outra função que recebe 'notas'. Por conta da estrutura de 'closure' a função interna retornada tem a capacidade de lembrar o contexto de quando foi declarada, ou seja, a função interna vai lembrar o parametro 'code'.

document
.querySelector('#myButton')
.onclick = () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)






