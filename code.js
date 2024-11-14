function sendMessage(id) {
    // Número de teléfono de destino (incluye el código del país, sin el +)
    var telefono = id; // Utilizamos el id recibido como número de teléfono
    
    // Construir el enlace de WhatsApp
    var url = `https://wa.me/${telefono}?`;
    
    // Abrir el enlace en una nueva ventana/pestaña
    window.open(url, '_blank');
}