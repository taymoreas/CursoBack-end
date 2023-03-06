function multiplicacao(num1, num2){
    let soma = 0
    let num = 0

    do{
        soma = soma + num2

        num++
    }while(num < num1)

    console.log(soma)
}

multiplicacao(6, 5)