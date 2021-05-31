import { useState } from "react";

export const Contador = () => {
    const [valor, setvalor] = useState<number>(10)

    const acumular = (numero: number) => {
        setvalor(valor + numero);
    }

    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>

            <button
                className='btn btn-primary'
                onClick={() => acumular(1)}
            >
                +1
           </button>
           &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => acumular(-1)}
                >
                -1
           </button>
        </div>
    )
}
