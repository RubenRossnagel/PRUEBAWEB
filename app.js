const API_BASE_URL = 'https://drrsystemas4.azurewebsites.net/Producto';
const API_TOKEN = 'A2063691-951B-454A-80AE-6839B53F8174.F8E174D2-E996-4ACF-A924-86F13A772775';

// Configuración de CORS
const corsProxy = 'https://cors-anywhere.herokuapp.com/';

// Función para hacer peticiones a la API
async function apiCall(endpoint, method = 'GET', body = null) {
    try {
        const response = await fetch(`${corsProxy}${API_BASE_URL}/${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: body ? JSON.stringify(body) : null
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error en la API:', error);
        throw error;
    }
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

        // Cargar productos
        await loadProducts();

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', debounce(loadProducts, 300));
        document.getElementById('familiaFilter').addEventListener('change', loadProducts);

        // Event listener para mostrar detalles
        document.getElementById('productsTableBody').addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row && row.dataset.productid) {
                showProductDetails(row.dataset.productid);
            }
        });

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
