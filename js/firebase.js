<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>NEXFIN Academy</title>
</head>

<body>

<h2>Academia NEXFIN</h2>

<input id="email" placeholder="Correo electrónico">
<input id="password" type="password" placeholder="Contraseña">

<br><br>

<button onclick="register()">Registrarse</button>
<button onclick="login()">Iniciar sesión</button>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>

<script src="js/firebase.js"></script>
<script src="js/auth.js"></script>

</body>
</html>
