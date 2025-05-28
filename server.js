const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

// Configuración de la API
const API_BASE_URL = process.env.API_BASE_URL || 'https://drrsystemas4.azurewebsites.net/Producto';
const API_TOKEN = process.env.API_TOKEN || 'A2063691-951B-454A-80AE-6839B53F8174.F8E174D2-E996-4ACF-A924-86F13A772775';

// Ruta para hacer peticiones a la API
app.get('/api/:endpoint', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${req.params.endpoint}`, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error en la API:', error);
        res.status(error.response?.status || 500).json({
            error: error.message,
            details: error.response?.data
        });
    }
});

// Servir archivos estáticos
app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
