function validateForm(){
	//elementos rescatados del index
	var nombre = $('#name').val();
	var apellido = $('#lastname').val();
	var email = $('#input-email').val();
	var contrasena = $('#input-password').val();
	var bici = $('select').val();

	//VALIDAR NOMBRE
	function validarNombre(){
		if (nombre==null || nombre.length==0) {
			$('.name-container:first').append('<span>Debe ingresar su nombre</span>');
			return false;
		}
		if (/[0-9]/.test(nombre)) {
			$('.name-container:first').append('<span>Debe ingresar su nombre</span>');
			return false;
		}
		if (!(/[A-Z]/.test(nombre.charAt(0)))){
			$('.name-container:first').append('<span>Debe ingresar su nombre</span>');
			return false;
		}
	}

	//VALIDAR APELLIDO
	function validarApellido(){
		if (apellido==null || apellido.length==0) {
			$('.lastname-container:first').append('<span>Debe ingresar su apellido</span>');
			return false;
		}
		if (/[0-9]/.test(apellido)) {
			$('.lastname-container:first').append('<span>Debe ingresar su apellido</span>');
			return false;
		}
		if (!(/[A-Z]/.test(apellido.charAt(0)))){
			$('.lastname-container:first').append('<span>Debe ingresar su apellido</span>');
			return false;
		}
	}

	//VALIDAR EMAIL
	function validarEmail(){
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
			$('.email-container:first').append('<span>Verifique su email</span>');
			return false;
		}
	}

	//VALIDAR CONTRASEnA
	function validarContrasena(){
		if (contrasena.length<6 || contrasena=="password" || contrasena=='123456' || contrasena=='098754') {
			$('.form-group:first').append('<span>La contraseña debe tener al menos 6 caracteres</span>');
			return false;
		}
	}

	//VALIDAR SELECCIÓN
	function validarSeleccion(){
		if (bici==0) {
			$('.form-group:eq(1)').append('<span>Debe seleccionar al menos un tipo de bici</span>');
			return false;
		}
	}

	validarNombre();
	validarApellido();
	validarEmail();
	validarContrasena();
	validarSeleccion();

}