<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Configuración de la API
$apiConfig = [
    'base_url' => 'https://drrsystemas4.azurewebsites.net/Producto',
    'token' => 'A2063691-951B-454A-80AE-6839B53F8174.F8E174D2-E996-4ACF-A924-86F13A772775'
];

// Obtener el endpoint de la URL
$endpoint = $_GET['endpoint'] ?? '';
if (empty($endpoint)) {
    http_response_code(400);
    echo json_encode(['error' => 'Endpoint no especificado']);
    exit;
}

// Construir la URL completa
$apiUrl = $apiConfig['base_url'] . '/' . $endpoint;

// Inicializar cURL
$ch = curl_init($apiUrl);

// Configurar opciones de cURL
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiConfig['token'],
        'Content-Type: application/json'
    ],
    CURLOPT_SSL_VERIFYPEER => false, // Deshabilitar verificación SSL para pruebas
    CURLOPT_SSL_VERIFYHOST => false, // Deshabilitar verificación SSL para pruebas
    CURLOPT_TIMEOUT => 30, // Tiempo máximo de espera
    CURLOPT_CONNECTTIMEOUT => 10 // Tiempo máximo para conexión
]);

// Ejecutar la petición
$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

// Cerrar la conexión
curl_close($ch);

// Manejar la respuesta
if ($error) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error en la conexión',
        'details' => $error
    ]);
} elseif ($statusCode >= 200 && $statusCode < 300) {
    echo $response;
} else {
    http_response_code($statusCode);
    echo json_encode([
        'error' => 'Error en la respuesta de la API',
        'status_code' => $statusCode
    ]);
}
?>
