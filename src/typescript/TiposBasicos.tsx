
export const TiposBasicos = () => {

    let nombre: string | number = 'José';
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: string[] = []; // 'Velocidad', 'Volar', 'Respirar en el agua'

    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre },
            { (estaActivo) ? 'activo' : 'no activo'}
        <br/>
        {poderes.join(', ')}
        </>
    )
}
