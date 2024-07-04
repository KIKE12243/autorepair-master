$(document).ready(function() {
    // Manejar el envío del formulario
    $('form').submit(function(event) {
        event.preventDefault(); // Prevenir el envío por defecto

        // Validar los campos aquí antes de enviar
        var nombre = $('#nombre').val();
        var tipoVehiculo = $('#tipoVehiculo').val();
        var fecha = $('.appointment_date').val();
        var tiempoReparacion = $('.appointment_time').val();
        var mensaje = $('textarea').val();

        // Ejemplo de validación básica
        if (nombre === '' || tipoVehiculo === '' || fecha === '' || tiempoReparacion === '' || mensaje === '') {
            alert('Por favor completa todos los campos.');
            return false;
        }

        // Si todos los campos están completos, podrías enviar los datos con AJAX o procesarlo según tu backend

        // Ejemplo de AJAX para enviar datos (requiere configuración del backend)
        /*
        $.ajax({
            url: 'ruta_del_servidor.php',
            method: 'POST',
            data: $('form').serialize(),
            success: function(response) {
                // Manejar la respuesta del servidor si es necesario
                alert('Mensaje enviado correctamente.');
                $('form')[0].reset(); // Limpiar el formulario
            },
            error: function(error) {
                alert('Error al enviar el mensaje. Por favor intenta de nuevo.');
            }
        });
        */

        // Por simplicidad, aquí solo se muestra una alerta
        alert('Mensaje enviado correctamente.');
        $('form')[0].reset(); // Limpiar el formulario
    });
});
