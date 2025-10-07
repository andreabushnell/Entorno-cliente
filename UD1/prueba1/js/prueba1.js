//VARIABLES LOCALES
			/* - Se define dentro de una función.
			   - Tienen ámbito local en la función.
			   - Son accesibles únicamente dentro de la función.
			   - Podemos declarar variables con el mismo nombre en diferentes funciones.
			   - Variable local desaparece cuando finaliza la función. */
			   "use strict"
			   function saludar(){
			   	var saludo = "Hola";
			   	console.log(saludo);
			   }
			   saludar();

			//VARIABLES GLOBALES
			/* - Se definen fuera de las funciones.
			   - Tienen ámbito global (en toda la página).
			   - Son accesibles desde fuera y dentro de las funciones.
			   - Variables globales desaparecen cuando se sale de la página. */
			   var despedida = "Adios";
			   function despedir(){
			   	console.log (despedida);
			   }
			   despedir();

			//VARIABLES AUTOMÁTICAMENTE GLOBALES
			// - Si asignamos un valor a una variable no declarada se convierte en global.
			function preguntar(){
				pregunta = "¿De qué color es el caballo blanco de Santiago?";
			}
			preguntar();
			console.log(pregunta);

			//VARIABLES LOCALES Y GLOBALES CON EL MISMO NOMBRE
			var miVariable = "Fuera";
			function ambito(){
				var miVariable = "Dentro";
				console.log(miVariable);
			}
			console.log(miVariable); //Devuelve Fuera
			ambito(); //Devuelve Dentro
			console.log(miVariable); //Devuelve Fuera

			//VARIABLE GLOBAL REDEFINIDA DENTRO DE UNA FUNCIÓN
			var miVariable2 = "Fuera";
			function ambito2(){
				miVariable2 = "Dentro";
				console.log(miVariable2);
			}
			console.log(miVariable2); //Devuelve Fuera
			ambito2(); //Devuelve Dentro
			console.log(miVariable2); //Devuelve Dentro 