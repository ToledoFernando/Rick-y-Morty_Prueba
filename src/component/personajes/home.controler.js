export const getPage = async (api) => {
    const respuesta = await fetch(api);
    const result = respuesta.json();
    return result;
}