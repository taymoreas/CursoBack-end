function primeiroEUltimo (elementos)
{
    const primeiroElemento = elementos.shift()
    const segundoElemento = elementos.pop()

    return[primeiroElemento, segundoElemento]
}

 console.log(primeiroEUltimo(["batata", 1,2,3, "frita"]))