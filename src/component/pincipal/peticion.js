export const getOp = async ()=>{
    const Op = await fetch("https://rickandmortyapi.com/api")
    const resultado = Op.json()
    return resultado;
}