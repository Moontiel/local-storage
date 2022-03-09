/* 
  $tagSpan: almacena todos los elementos html con definidos
  con tag-span
*/
let $tagSpan = document.querySelectorAll('span');

/* 
	definimos un recorrido forEach en $tagSpan y declaramos
	una funcion que recibe 2 parametros
*/
$tagSpan.forEach((span, i) => {
	/* 
		parametro span: generamos un evento click y declaramos 
		una funcion
	*/
	span.addEventListener('click', () => {
		/* 
			switch: recibe el parametro i el cual almacena la posicion
			del elemento dentro del array
		*/
		switch (i) {
			/* 
				case 0: si el elemento al que se le hizo click tiene la
				posicion 0, seleccionamos a body y le añadimos la clase 
				js_skin_dark y removemos del mismo las clases js_skin_light 
				y js_skin_skyblue todas estas definidas en la hoja de estilos 
			*/
			case 0:
				document.body.classList.add('js_skin_dark');
				document.body.classList.remove('js_skin_light');
				document.body.classList.remove('js_skin_skyblue');
				break;

			/*
				aplica de la misma manera antes documentada
			*/
			case 1:
				document.body.classList.add('js_skin_light');
				document.body.classList.remove('js_skin_skyblue');
				document.body.classList.remove('js_skin_dark');
				break;

			/*
				aplica de la misma manera antes documentada
			*/
			case 2:
				document.body.classList.add('js_skin_skyblue');
				document.body.classList.remove('js_skin_dark');
				document.body.classList.remove('js_skin_light');
				break;

			/*
				defaul: esta seria la clase añadida por defecto
			*/
			default:
				document.body.classList.add('js_skin_light');
				break;
		}

		/* 
			si body contiene la clase js_skin_dark hacemos uso
			de la propiedad localStorage.setItem que nos permite
			guardar un valor por medio de una clave en este caso
			save-skin-dark con el valor true
		*/
		if (document.body.classList.contains('js_skin_dark')) {
			localStorage.setItem('save-skin-dark', 'true');
		} else {
			/*  
				de lo contrario hacemos uso de la propiedad 
				localStorage.setItem que nos permite guardar un 
				valor por medio de una clave en este caso
				save-skin-dark con el valor false
			*/
			localStorage.setItem('save-skin-dark', 'false');
		}

		/*
			aplica de la misma manera antes documentada
		*/
		if (document.body.classList.contains('js_skin_light')) {
			localStorage.setItem('save-skin-light', 'true');
		} else {
			localStorage.setItem('save-skin-light', 'false');
		}

		/*
			aplica de la misma manera antes documentada
		*/
		if (document.body.classList.contains('js_skin_skyblue')) {
			localStorage.setItem('save-skin-skyblue', 'true');
		} else {
			localStorage.setItem('save-skin-skyblue', 'false');
		}
	});
});

/* 
  haciendo uso de la propiedad localStorage.getItem 
  que nos permite obtener un valor por medio de una clave
  validamos si la clave save-skin-dark con su valor true
  esta guardada en el localStorage, si cumple la condicion 
  seleccionamos a body y le añadimos la clase js_skin_dark 
  definida en la hoja de estilos
*/
if (localStorage.getItem('save-skin-dark') === 'true') {
	document.body.classList.add('js_skin_dark');
} else {
	/* 
		de lo contrario si el localStorage no tiene la clave
		js-skin-dark seleccionamos a body y le removemos
		la clase js_skin_dark definida en la hoja de estilos
	*/
	document.body.classList.remove('js_skin_dark');
}

/*
	aplica de la misma manera antes documentada
*/
if (localStorage.getItem('save-skin-skyblue') === 'true') {
	document.body.classList.add('js_skin_light');
} else {
	document.body.classList.remove('js_skin_light');
}

/*
	aplica de la misma manera antes documentada
*/
if (localStorage.getItem('save-skin-skyblue') === 'true') {
	document.body.classList.add('js_skin_skyblue');
} else {
	document.body.classList.remove('js_skin_skyblue');
}
