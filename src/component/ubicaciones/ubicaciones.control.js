const getlocation = async (api) => {
    const respuesta = await fetch(api);
    const result = respuesta.json();
    return result;
}

export default getlocation;