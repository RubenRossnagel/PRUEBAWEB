$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8000/')
$listener.Start()

Write-Host "Aplicación iniciada en http://localhost:8000"
Write-Host "Presiona Ctrl+C para detener el servidor"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $filePath = Join-Path $PSScriptRoot $request.Url.LocalPath.TrimStart('/')
    
    if (-not (Test-Path $filePath)) {
        $filePath = Join-Path $PSScriptRoot "index.html"
    }

    $contentType = switch -regex ([System.IO.Path]::GetExtension($filePath)) {
        '\.html$' { 'text/html' }
        '\.css$' { 'text/css' }
        '\.js$' { 'application/javascript' }
        default { 'text/plain' }
    }

    $response.ContentType = $contentType
    $buffer = [System.IO.File]::ReadAllBytes($filePath)
    $response.ContentLength64 = $buffer.Length
    $response.OutputStream.Write($buffer, 0, $buffer.Length)
    $response.OutputStream.Close()
}

$listener.Stop()
