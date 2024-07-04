<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    $('#contactForm').submit(function(e) {
      e.preventDefault(); // Evita que el formulario se envíe normalmente
      
      // Capturar los valores del formulario
      var name = $('#name').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
      
      // Validación simple (puedes implementar una validación más robusta según tus necesidades)
      if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
        alert('Por favor, completa todos los campos del formulario.');
        return;
      }
      
      // Aquí puedes enviar los datos a través de AJAX o manejarlos según tu backend
      // En este ejemplo, solo mostraremos los datos en la consola del navegador
      console.log('Nombre:', name);
      console.log('Correo electrónico:', email);
      console.log('Teléfono:', phone);
      console.log('Asunto:', subject);
      console.log('Mensaje:', message);
      
      // Puedes agregar aquí la lógica para enviar los datos mediante AJAX
      // $.ajax({
      //   type: 'POST',
      //   url: 'tu_url_de_envio.php',
      //   data: {
      //     name: name,
      //     email: email,
      //     phone: phone,
      //     subject: subject,
      //     message: message
      //   },
      //   success: function(response) {
      //     console.log('Envío exitoso:', response);
      //     // Aquí puedes manejar la respuesta del servidor si es necesario
      //   },
      //   error: function(error) {
      //     console.error('Error en el envío:', error);
      //     // Manejar errores si es necesario
      //   }
      // });

      // Limpiar el formulario después de enviar
      $('#contactForm')[0].reset();
    });
  });
</script>

