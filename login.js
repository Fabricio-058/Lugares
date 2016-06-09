function login() {
	if((document.getElementById('correo').value == localStorage.getItem('correo'))&& (document.getElementById('pass').value==localStorage.getItem('pass'))){
		window.location=('main.html');
	}
}