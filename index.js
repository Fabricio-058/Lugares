var nombre, correo, pass,pass2
function guardar() {
	nombre=document.getElementById('nombre').value;
	correo=document.getElementById('correo').value;
	pass=document.getElementById('pass').value;
	pass2=document.getElementById('confpass').value;
	if (pass==pass2) {
		registrar();
		window.location=("login.html")
	};

	// body...
}
function registrar(){
	contador=1;
	contador = localStorage.setItem('contador',contador);
	localStorage.setItem('nombre',nombre);
	localStorage.setItem('correo',correo);
	localStorage.setItem('pass',pass);
}