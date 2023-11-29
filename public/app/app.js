import { timeoutPromise, delay, retry } from "./utils/promise-helpers.js"
import './utils/array-helpers.js'
import { notasService as service } from "./nota/servico.js"
import { debounceTime, takeUntil, pipe, partialize } from "./utils/operators.js"
import { EventEmitter } from "./utils/event-emitter.js"
import { Maybe } from "./utils/maybe.js"

// const sumItems = notas => notas
//     .$flatMap(nota => nota.itens)
//     .filter(item => item.codigo == '2143')
//     .reduce((total, item) => total + item.valor, 0)

// A função abaixo é um exmple do 'closure', onde para a função externa é passado o parametro 'code' e ela retorna uma outra função que recebe 'notas'. Por conta da estrutura de 'closure' a função interna retornada tem a capacidade de lembrar o contexto de quando foi declarada, ou seja, a função interna vai lembrar o parametro 'code'.

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500),
)

const action = operations(() => 
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(console.log)    
) 

document
.querySelector('#myButton')
.onclick = action



    