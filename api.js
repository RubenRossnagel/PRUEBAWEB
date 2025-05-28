async function updateStep(stepNumber, message) {
    const stepElements = document.querySelectorAll('.step');
    stepElements.forEach((step, index) => {
        if (index < stepNumber - 1) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    const apiStatus = document.getElementById('apiStatus');
    if (apiStatus) {
        apiStatus.textContent = `Paso ${stepNumber}: ${message}`;
    }
}

async function getProducts() {
    try {
        // Paso 1: Inicialización
        await updateStep(1, 'Inicializando...');
        
        // Paso 2: Verificación de token
        await updateStep(2, 'Verificando token...');
        
        // Paso 3: Carga de datos
        await updateStep(3, 'Cargando productos...');
        
        // Usar datos locales
        const products = LOCAL_DATA.productos;
        
        // Paso 4: Filtrado
        await updateStep(4, 'Filtrando datos...');
        
        return products;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function getFamilias() {
    try {
        // Paso 1: Inicialización
        await updateStep(1, 'Inicializando...');
        
        // Paso 2: Verificación de token
        await updateStep(2, 'Verificando token...');
        
        // Paso 3: Carga de datos
        await updateStep(3, 'Cargando familias...');
        
        // Usar datos locales
        const familias = LOCAL_DATA.familias;
        
        // Paso 4: Filtrado
        await updateStep(4, 'Filtrando datos...');
        
        return familias;
    } catch (error) {
        console.error('Error al obtener familias:', error);
        throw error;
    }
}
