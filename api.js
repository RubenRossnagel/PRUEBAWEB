const API_BASE_URL = 'https://drrsystemas4.azurewebsites.net/Producto';
const API_TOKEN = 'A2063691-951B-454A-80AE-6839B53F8174.F8E174D2-E996-4ACF-A924-86F13A772775';

async function getProducts() {
    try {
        const loadingElement = document.getElementById('loadingMessage');
        if (loadingElement) {
            loadingElement.textContent = 'Cargando productos...';
        }
        
        const response = await fetch(`${API_BASE_URL}/GetProducto`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData?.message || 
                `Error HTTP ${response.status}: ${response.statusText}`;
            throw new Error(errorMessage);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function getFamilias() {
    try {
        const response = await fetch(`${API_BASE_URL}/GetFamilia`, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error al obtener familias:', error);
        throw error;
    }
}
