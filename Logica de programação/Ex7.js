function minimomaximo(numero, minimo, maximo, inclusivo)
{
    switch(inclusivo){
        case true:
            if(numero >= minimo && numero <= maximo)
            {
    
                console.log(`retornou true`)
                return true
            }else
            {
                
                console.log(`retornou false`)
                return false
                
            break;

            }
        
            case false:
            if(numero > minimo && numero < maximo)
            {
                
                console.log(`retornou true1`)
                return true
            }else
            {
                
                console.log(`retornou false1`)
                return false

            }
            break;
        
            default:
                if(numero > minimo && numero < maximo)
                {

                    console.log(`retornou true2`)
                    return true

                }else
                {
                    
                    console.log(`retornou false2`)
                    return false

                }
    }
}
minimomaximo (3, 3, 150, true)