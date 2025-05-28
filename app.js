// URLs completas de las APIs
const PRODUCT_API_URL = 'proxy.php?endpoint=GetProducto';
const FAMILIA_API_URL = 'proxy.php?endpoint=GetFamilia';

// Función para hacer peticiones a la API
async function apiCall(endpoint, method = 'GET', body = null) {
    try {
        console.log('Llamando a:', endpoint);
        
        const response = await fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : null
        });
        
        console.log('Respuesta:', response);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Error de API:', {
                status: response.status,
                statusText: response.statusText,
                errorData: errorData
            });
            
            const errorMessage = errorData?.error || 
                errorData?.message || 
                `HTTP error! status: ${response.status} - ${response.statusText}`;
            
            updateDiagnostic('apiStatus', 'error', 'Conexión fallida');
            updateDiagnostic('tokenStatus', 'error', 'Token no válido');
            updateDiagnostic('lastError', 'error', errorMessage);
            
            throw new Error(errorMessage);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        
        updateDiagnostic('apiStatus', 'success', 'Conexión exitosa');
        updateDiagnostic('tokenStatus', 'success', 'Token válido');
        updateDiagnostic('lastError', 'success', '-');
        
        return data;
    } catch (error) {
        console.error('Error en la API:', error);
        
        // Intentar obtener más detalles del error
        let errorMessage = error.message;
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            errorMessage = 'No se pudo establecer conexión con el servidor. Verifica tu conexión a internet.';
        }
        
        updateDiagnostic('apiStatus', 'error', 'Error de conexión');
        updateDiagnostic('tokenStatus', 'error', 'Token no válido');
        updateDiagnostic('lastError', 'error', errorMessage);
        
        throw error;
    }
}

// Función para hacer peticiones a la API
async function apiCall(endpoint, method = 'GET', body = null) {
    try {
        console.log('Llamando a:', endpoint);
        
        const response = await fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : null
        });
        
        console.log('Respuesta:', response);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Error de API:', {
                status: response.status,
                statusText: response.statusText,
                errorData: errorData
            });
            
            const errorMessage = errorData?.error || 
                errorData?.message || 
                `HTTP error! status: ${response.status} - ${response.statusText}`;
            
            updateDiagnostic('apiStatus', 'error', 'Conexión fallida');
            updateDiagnostic('tokenStatus', 'error', 'Token no válido');
            updateDiagnostic('lastError', 'error', errorMessage);
            
            throw new Error(errorMessage);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        
        updateDiagnostic('apiStatus', 'success', 'Conexión exitosa');
        updateDiagnostic('tokenStatus', 'success', 'Token válido');
        updateDiagnostic('lastError', 'success', '-');
        
        return data;
    } catch (error) {
        console.error('Error en la API:', error);
        
        // Intentar obtener más detalles del error
        let errorMessage = error.message;
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            errorMessage = 'No se pudo establecer conexión con el servidor. Verifica tu conexión a internet.';
        }
        
        updateDiagnostic('apiStatus', 'error', 'Error de conexión');
        updateDiagnostic('tokenStatus', 'error', 'Token no válido');
        updateDiagnostic('lastError', 'error', errorMessage);
        
        throw error;
    }
}

// Función para hacer peticiones a la API
async function apiCall(endpoint, method = 'GET', body = null) {
    try {
        console.log('Llamando a:', endpoint);
        console.log('Token:', API_TOKEN);
        
        const response = await fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: body ? JSON.stringify(body) : null
        });
        
        console.log('Respuesta:', response);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('Error de API:', {
                status: response.status,
                statusText: response.statusText,
                errorData: errorData
            });
            
            const errorMessage = errorData?.message || 
                `HTTP error! status: ${response.status} - ${response.statusText}`;
            
            updateDiagnostic('apiStatus', 'error', 'Conexión fallida');
            updateDiagnostic('tokenStatus', 'error', 'Token no válido');
            updateDiagnostic('lastError', 'error', errorMessage);
            
            throw new Error(errorMessage);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        
        updateDiagnostic('apiStatus', 'success', 'Conexión exitosa');
        updateDiagnostic('tokenStatus', 'success', 'Token válido');
        updateDiagnostic('lastError', 'success', '-');
        
        return data;
    } catch (error) {
        console.error('Error en la API:', error);
        
        // Intentar obtener más detalles del error
        let errorMessage = error.message;
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            errorMessage = 'No se pudo establecer conexión con el servidor. Verifica tu conexión a internet.';
        }
        
        updateDiagnostic('apiStatus', 'error', 'Error de conexión');
        updateDiagnostic('tokenStatus', 'error', 'Token no válido');
        updateDiagnostic('lastError', 'error', errorMessage);
        
        throw error;
    }
}

// Función para hacer peticiones a la API
async function apiCall(endpoint, method = 'GET', body = null) {
    try {
        const url = `${API_BASE_URL}/${endpoint}`;
        console.log('Llamando a:', url);
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: body ? JSON.stringify(body) : null
        });
        
        console.log('Respuesta recibida:', {
            status: response.status,
            statusText: response.statusText
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const error = errorData?.message || `HTTP error! status: ${response.status}`;
            console.error('Error detallado:', error);
            
            // Actualizar diagnóstico
            updateDiagnostic('apiStatus', 'error', 'Conexión fallida');
            updateDiagnostic('tokenStatus', 'error', 'Token no válido');
            updateDiagnostic('lastError', 'error', error);
            
            throw new Error(error);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        
        // Actualizar diagnóstico
        updateDiagnostic('apiStatus', 'success', 'Conexión exitosa');
        updateDiagnostic('tokenStatus', 'success', 'Token válido');
        updateDiagnostic('lastError', 'success', '-');
        
        return data;
    } catch (error) {
        console.error('Error en la API:', error);
        
        // Actualizar diagnóstico
        updateDiagnostic('apiStatus', 'error', 'Error de conexión');
        updateDiagnostic('tokenStatus', 'error', 'Token no válido');
        updateDiagnostic('lastError', 'error', error.message);
        
        throw error;
    }
}

// Función para actualizar el diagnóstico
function updateDiagnostic(elementId, statusType, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        
        // Mostrar el panel de diagnóstico si hay un error
        if (statusType === 'error') {
            document.getElementById('diagnosticPanel').classList.add('show');
        } else {
            // Ocultar el panel si no hay errores
            const hasErrors = document.querySelectorAll('.diagnostic-info span.error').length > 0;
            if (!hasErrors) {
                document.getElementById('diagnosticPanel').classList.remove('show');
            }
        }
    }
}

// Función para actualizar el estado
function updateStatus(message, statusType = 'loading') {
    const statusMessage = document.getElementById('statusMessage');
    const statusIcon = statusMessage.querySelector('.status-icon');
    const statusText = statusMessage.querySelector('.status-text');
    
    if (statusIcon && statusText) {
        statusIcon.className = 'status-icon';
        statusIcon.classList.add(statusType);
        statusText.textContent = message;
    }
}

// Función para actualizar la tabla de productos
document.addEventListener('DOMContentLoaded', async () => {
    try {
        updateStatus('Conectando con la API...', 'loading');
        
        // Verificar conexión inicial
        try {
            await apiCall(FAMILIA_API_URL);
            updateStatus('Conexión exitosa', 'success');
        } catch (error) {
            updateStatus('Error de conexión', 'error');
            throw error;
        }

        // Cargar familias
        const familias = await apiCall(FAMILIA_API_URL);
        const familiaSelect = document.getElementById('familiaFilter');
        familias.forEach(familia => {
            const option = document.createElement('option');
            option.value = familia.FamiliaID;
            option.textContent = familia.Nombre;
            familiaSelect.appendChild(option);
        });

        // Event listeners
        document.getElementById('searchButton').addEventListener('click', loadProducts);
        document.getElementById('searchInput').addEventListener('input', debounce(loadProducts, 300));
        document.getElementById('familiaFilter').addEventListener('change', loadProducts);

        // Event listener para mostrar detalles
        document.getElementById('productsTableBody').addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row && row.dataset.productid) {
                showProductDetails(row.dataset.productid);
            }
        });

        // Cargar productos por primera vez
        await loadProducts();

    } catch (error) {
        console.error('Error al cargar la aplicación:', error);
        updateStatus('Error al cargar la aplicación', 'error');
        showError('Error al cargar la aplicación. Por favor, inténtalo de nuevo.');
    }
});

// Función para cargar productos
async function loadProducts() {
    try {
        // Mostrar mensaje de carga
        showLoading(true);

        // Obtener productos
        const products = await apiCall(PRODUCT_API_URL);
        
        // Obtener valores de filtros
        const searchInput = document.getElementById('searchInput').value.trim();
        const familiaFilter = document.getElementById('familiaFilter').value;
        
        // Filtrar productos
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.descripcionLarga.toLowerCase().includes(searchInput.toLowerCase());
            const matchesFamilia = !familiaFilter || product.FamiliaID === parseInt(familiaFilter);
            return matchesSearch && matchesFamilia;
        });
        
        // Actualizar tabla
        const tbody = document.getElementById('productsTableBody');
        tbody.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No se encontraron productos</td></tr>';
        } else {
            filteredProducts.forEach(product => {
                const row = document.createElement('tr');
                row.dataset.productid = product.ProductoID;
                row.innerHTML = `
                    <td>${product.codigo}</td>
                    <td>${product.descripcionLarga}</td>
                    <td>${product.stock}</td>
                    <td>${product.codigoBarra}</td>
                    <td>${product.PrecioFormateado}</td>
                    <td>${new Date(product.fechaModif).toLocaleDateString()}</td>
                `;
                tbody.appendChild(row);
            });
        }
        
        // Ocultar mensaje de carga
        showLoading(false);
        
    } catch (error) {
        console.error('Error al cargar productos:', error);
        showError('Error al cargar los productos. Por favor, inténtalo de nuevo.');
        showLoading(false);
    }
}

// Función para mostrar mensaje de carga
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #1a73e8;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .error-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    </style>
`);

function showLoading(show) {
    const loading = document.getElementById('loading');
    if (!loading) {
        const container = document.querySelector('.container');
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading';
        loadingDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            display: ${show ? 'flex' : 'none'};
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        loadingDiv.innerHTML = `
            <div style="text-align: center;">
                <div class="spinner"></div>
                <p style="margin-top: 10px;">Cargando...</p>
            </div>
        `;
        container.appendChild(loadingDiv);
    } else {
        loading.style.display = show ? 'flex' : 'none';
    }
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // Eliminar el mensaje de error después de 5 segundos
    setTimeout(() => errorDiv.remove(), 5000);
}

// Función para actualizar la tabla de productos
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Cargar familias
        const familias = await apiCall('GetFamilia');
        const familiaSelect = document.getElementById('familiaFilter');
        familias.forEach(familia => {
            const option = document.createElement('option');
            option.value = familia.FamiliaID;
            option.textContent = familia.Nombre;
            familiaSelect.appendChild(option);
        });

        // Event listeners
        document.getElementById('searchButton').addEventListener('click', loadProducts);
        document.getElementById('searchInput').addEventListener('input', debounce(loadProducts, 300));
        document.getElementById('familiaFilter').addEventListener('change', loadProducts);

        // Event listener para mostrar detalles
        document.getElementById('productsTableBody').addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row && row.dataset.productid) {
                showProductDetails(row.dataset.productid);
            }
        });

        // Cargar productos por primera vez
        await loadProducts();

    } catch (error) {
        console.error('Error al cargar la aplicación:', error);
        showError('Error al cargar la aplicación. Por favor, inténtalo de nuevo.');
    }
});

// Función para cargar productos
async function loadProducts() {
    try {
        // Mostrar mensaje de carga
        showLoading(true);

        // Obtener productos
        const products = await apiCall('GetProducto');
        
        // Obtener valores de filtros
        const searchInput = document.getElementById('searchInput').value.trim();
        const familiaFilter = document.getElementById('familiaFilter').value;
        
        // Filtrar productos
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.descripcionLarga.toLowerCase().includes(searchInput.toLowerCase());
            const matchesFamilia = !familiaFilter || product.FamiliaID === parseInt(familiaFilter);
            return matchesSearch && matchesFamilia;
        });
        
        // Actualizar tabla
        const tbody = document.getElementById('productsTableBody');
        tbody.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No se encontraron productos</td></tr>';
        } else {
            filteredProducts.forEach(product => {
                const row = document.createElement('tr');
                row.dataset.productid = product.ProductoID;
                row.innerHTML = `
                    <td>${product.codigo}</td>
                    <td>${product.descripcionLarga}</td>
                    <td>${product.stock}</td>
                    <td>${product.codigoBarra}</td>
                    <td>${product.PrecioFormateado}</td>
                    <td>${new Date(product.fechaModif).toLocaleDateString()}</td>
                `;
                tbody.appendChild(row);
            });
        }
        
        // Ocultar mensaje de carga
        showLoading(false);
        
    } catch (error) {
        console.error('Error al cargar productos:', error);
        showError('Error al cargar los productos. Por favor, inténtalo de nuevo.');
        showLoading(false);
    }
}

// Función para mostrar detalles del producto
async function showProductDetails(productId) {
    try {
        // Mostrar mensaje de carga
        showLoading(true);

        const products = await apiCall('GetProducto');
        const product = products.find(p => p.ProductoID === parseInt(productId));

        if (product) {
            document.getElementById('productDetails').style.display = 'block';
            document.getElementById('productCode').textContent = product.codigo;
            document.getElementById('productDescription').textContent = product.descripcionLarga;
            document.getElementById('productStock').textContent = product.stock;
            document.getElementById('productBarcodes').textContent = product.codigoBarra;
            document.getElementById('productPrice').textContent = product.PrecioFormateado;
            document.getElementById('productDate').textContent = new Date(product.fechaModif).toLocaleString();
        }
        
        // Ocultar mensaje de carga
        showLoading(false);

    } catch (error) {
        console.error('Error al mostrar detalles:', error);
        showError('Error al mostrar los detalles del producto.');
        showLoading(false);
    }
}

// Función para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para actualizar la tabla de productos
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Cargar familias
        const familias = await apiCall('GetFamilia');
        const familiaSelect = document.getElementById('familiaFilter');
        familias.forEach(familia => {
            const option = document.createElement('option');
            option.value = familia.FamiliaID;
            option.textContent = familia.Nombre;
            familiaSelect.appendChild(option);
        });

        // Event listeners
        document.getElementById('searchButton').addEventListener('click', loadProducts);
        document.getElementById('searchInput').addEventListener('input', debounce(loadProducts, 300));
        document.getElementById('familiaFilter').addEventListener('change', loadProducts);

        // Event listener para mostrar detalles
        document.getElementById('productsTableBody').addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row && row.dataset.productid) {
                showProductDetails(row.dataset.productid);
            }
        });

        // Cargar productos por primera vez
        await loadProducts();

    } catch (error) {
        console.error('Error al cargar la aplicación:', error);
    }
});

// Función para cargar productos
async function loadProducts() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const familiaFilter = document.getElementById('familiaFilter').value;

    try {
        const products = await apiCall('GetProducto');
        
        // Filtrar productos
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.descripcionLarga.toLowerCase().includes(searchInput.toLowerCase());
            const matchesFamilia = !familiaFilter || product.FamiliaID === parseInt(familiaFilter);
            return matchesSearch && matchesFamilia;
        });

        // Actualizar tabla
        const tbody = document.getElementById('productsTableBody');
        tbody.innerHTML = '';

        filteredProducts.forEach(product => {
            const row = document.createElement('tr');
            row.dataset.productid = product.ProductoID;
            row.innerHTML = `
                <td>${product.codigo}</td>
                <td>${product.descripcionLarga}</td>
                <td>${product.stock}</td>
                <td>${product.codigoBarra}</td>
                <td>${product.PrecioFormateado}</td>
                <td>${new Date(product.fechaModif).toLocaleDateString()}</td>
            `;
            tbody.appendChild(row);
        });

    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Función para mostrar detalles del producto
async function showProductDetails(productId) {
    try {
        const products = await apiCall('GetProducto');
        const product = products.find(p => p.ProductoID === parseInt(productId));

        if (product) {
            document.getElementById('productDetails').style.display = 'block';
            document.getElementById('productCode').textContent = product.codigo;
            document.getElementById('productDescription').textContent = product.descripcionLarga;
            document.getElementById('productStock').textContent = product.stock;
            document.getElementById('productBarcodes').textContent = product.codigoBarra;
            document.getElementById('productPrice').textContent = product.PrecioFormateado;
            document.getElementById('productDate').textContent = new Date(product.fechaModif).toLocaleString();
        }
    } catch (error) {
        console.error('Error al mostrar detalles:', error);
    }
}

// Función para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
