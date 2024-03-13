let multiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let primerValor = parseInt(prompt("introduce un número del 1 al 10"))
    let segundoValor = parseInt(prompt("introduce otro número (mayor que el anterior)"))
    for (i=primerValor; i<= segundoValor; i++){
        multiplicar.forEach(element => {
            console.log(element*i)
        });
        
    }
