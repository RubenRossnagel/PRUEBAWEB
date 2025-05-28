async function getProducts() {
    try {
        const loadingElement = document.getElementById('loadingMessage');
        if (loadingElement) {
            loadingElement.textContent = 'Cargando productos...';
        }
        
        // Usar datos locales
        return LOCAL_DATA.productos;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function getFamilias() {
    try {
        // Usar datos locales
        return LOCAL_DATA.familias;
    } catch (error) {
        console.error('Error al obtener familias:', error);
        throw error;
    }
}
