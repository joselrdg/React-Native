import { type } from 'os'
import React from 'react'

// type, class, interface

interface Persona {
    nombre: string,
    edad: number,
    direeccion: Direeccion
}

interface Direeccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Jose',
        edad: 35,
        direeccion: {
            pais: 'Canda',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>

        </>
    )
}
