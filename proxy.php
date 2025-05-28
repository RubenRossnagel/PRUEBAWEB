<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$endpoint = $_GET['endpoint'] ?? '';
$token = 'A2063691-951B-454A-80AE-6839B53F8174.F8E174D2-E996-4ACF-A924-86F13A772775';
$apiUrl = 'https://drrsystemas4.azurewebsites.net/Producto/' . $endpoint;

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $token,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($statusCode >= 200 && $statusCode < 300) {
    echo $response;
} else {
    http_response_code($statusCode);
    echo json_encode(['error' => 'Error al acceder a la API']);
}
?>
