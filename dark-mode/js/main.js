/* 
  $darkMode: almacena el elemento con ID dark-mode
  definido en html
*/
let $darkMode = document.querySelector('#dark-mode');

/* 
  añadimos un evento clik en la variable $darkMode
*/
$darkMode.addEventListener('click', function () {
	/* 
    haciendo uso de document seleccionamos a body
    y le añadimos o removemos la clase js_dark_mode
    definido en la hoja de estilos
  */
	document.body.classList.toggle('js_dark_mode');

	/* 
    haciendo uso del selector this. le añadimos o 
    removemos la clase js_move_circle definida en 
    la hoja de estilos
  */
	this.classList.toggle('js_move_circle');

	/* 
    si body contiene la clase js_dark_mode hacemos uso
    de la propiedad localStorage.setItem que nos permite
    guardar un valor por medio de una clave en este caso
    save-dark-mode con el valor true
  */
	if (document.body.classList.contains('js_dark_mode')) {
		localStorage.setItem('save-dark-mode', 'true');
	} else {
		/* 
      de lo contrario hacemos uso de la propiedad 
      localStorage.setItem que nos permite guardar un 
      valor por medio de una clave en este caso
      save-dark-mode con el valor false
    */
		localStorage.setItem('save-dark-mode', 'false');
	}
});

/* 
  haciendo uso de la propiedad localStorage.getItem 
  que nos permite obtener un valor por medio de una clave
  validamos si la clave save-dark-mode con su valor true
  esta guardada en el localStorage

  si cumple la condicion seleccionamos a body
  y le añadimos la clase js_dark_mode definida 
  en la hoja de estilos
*/
if (localStorage.getItem('save-dark-mode') === 'true') {
	document.body.classList.add('js_dark_mode');

	/* 
    podemos utilizar la misma clave para añadir clases
    a otros elementos
  */
	$darkMode.classList.add('js_move_circle');
} else {
	/* 
    de lo contrario si el localStorage no tiene la 
    save-dark-mode seleccionamos a body y le removemos
    la clase js_dark_mode definida en la hoja de estilos
  */
	document.body.classList.remove('js_dark_mode');

	/* 
    podemos utilizar la misma condicion para remover clases
    a otros elementos
  */
	$darkMode.classList.remove('js_move_circle');
}
