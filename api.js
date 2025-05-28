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
        
        // Paso 2: Conectando al proxy
        await updateStep(2, 'Conectando al proxy...');
        
        // Paso 3: Haciendo petición a la API
        await updateStep(3, 'Haciendo petición a la API...');
        
        const response = await fetch('proxy.php?endpoint=GetProducto');
        const data = await response.json();
        
        // Paso 4: Procesando respuesta
        await updateStep(4, 'Procesando respuesta...');
        
        if (data.error) {
            throw new Error(data.error + (data.details ? ': ' + data.details : ''));
        }
        
        return data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function getFamilias() {
    try {
        // Paso 1: Inicialización
        await updateStep(1, 'Inicializando...');
        
        // Paso 2: Conectando al proxy
        await updateStep(2, 'Conectando al proxy...');
        
        // Paso 3: Haciendo petición a la API
        await updateStep(3, 'Haciendo petición a la API...');
        
        const response = await fetch('proxy.php?endpoint=GetFamilia');
        const data = await response.json();
        
        // Paso 4: Procesando respuesta
        await updateStep(4, 'Procesando respuesta...');
        
        if (data.error) {
            throw new Error(data.error + (data.details ? ': ' + data.details : ''));
        }
        
        return data;
    } catch (error) {
        console.error('Error al obtener familias:', error);
        throw error;
    }
}
