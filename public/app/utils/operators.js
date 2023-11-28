
export const partialize = (fn, ...args) => fn.bind(null, ...args) 

// Segue a ordem funcional matemática, ou seja, as funções mais internas são as primeiras. Ordem de chamada é da direita para a esquerda
export const compose = (...fns) => value => fns.reduceRight((previousValue, fn) => fn(previousValue), value)

// Segue a ordem funcional de leitura, ou seja, as funções externas são as primeiras e passam seu valor para a próxima a direita. Ordem de chamada é da esquerda para a direita, assim como o de leitura
export const pipe = (...fns) => value => fns.reduce((previousValue, fn) => fn(previousValue), value)

export const takeUntil = (times, fn) => 
    () => {
        if(times-- > 0) fn()
    }

    // Ou assim:
    // () => times-- > 0 && fn()

export const debounceTime = (milisseconds, fn) => {

    // Essa parte só funciona a primeira vez que a função é invocada, nas subsequentes ela não faz mais nada. Isso é por conta da closure
    let timer = 0

    // Cada vez subsequente que o debounceTime é chamado o que é referenciado é essa função interna.
    return () => {
        clearTimeout(timer)
        timer = setTimeout(fn, milisseconds)
    }
}

/* Observações:
    ° Cada instância de uma closure é independente da outra, ou seja, o valor na memória é único para cada instância.

    Ex:

    function outerFunction() {
        let outerVariable = 0;

        function innerFunction() {
            outerVariable++;
            console.log(outerVariable);
        }

        return innerFunction;
    }

    const firstInstance = outerFunction();
    const secondInstance = outerFunction();

    firstInstance();  // Outputs: 1
    firstInstance();  // Outputs: 2

    secondInstance(); // Outputs: 1 (independent of the firstInstance)
    


*/

// export const abc = () => {

//     let a = 0
//     console.log('first invocation');

//     return () => {
//         a++
//         console.log(a);
//         if (a > 1) {
//             console.log('Subsequent');
//         } else {
//             console.log('Still part of the first');
//         }

//     }

// }