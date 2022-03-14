# P4-DWES-HarryPotter
Práctica 4 de DWES

Dada el archivo JSON adjunto,

1_ Cree un servidor en Node.js que, accediendo a la ruta "/importar", cree una base de datos de MongoDB llamada "harry", cree una colección llamada "personajes" y vuelque todos los datos del JSON.

2_ Cree un HTML con una tabla con estilos de Bootstrap que llame por AJAX al servidor anterior y muestre los datos de la base de datos. Se mostrarán las columnas:

Imagen (se mostrará la imagen de cada personaje)
Nombre
Especie
Género
Casa
Año de nacimiento


3_ Encima de la tabla pondremos 5 botones que harán respectivas llamadas al servidor:

Mostrar todos: mostrará todos los registros de la base de datos.
Filtro 1: Mostrar todos los personajes cuyo atributo "species" tenga como valor "human".
Filtro 2: Mostrar todos los personajes cuyo atributo "yearOfBirth" sea anterior a 1979.
Filtro 3: Mostrar todos los personajes cuyo atributo "wood" de la propiedad "wand" sea "holly".
Filtro 4: Mostrar todos los personajes que estén vivos (propiedad "alive" igual a true) y además sean estudiantes (propiedad "hogwartsStudent" igual a true).


4_ Añada una columna a la tabla con un botón de "Borrar". Si pulsamos el botón de esa fila, borrará el documento correspondiente de la base de datos mediante otra llamada al servidor mediante AJAX. Mostrará un mensaje de confirmación cuando se haya borrado (una alerta de Bootstrap).

5_ Añada debajo de la tabla un formulario para crear un nuevo personaje. El formulario tendrá todos los campos (el campo imagen se rellenará con una URL). El formulario permitirá guardar un nuevo registro y tras guardarlo mostrará un mensaje de OK (una alerta de Bootstrap) y aparecerá el nuevo registro en la tabla. Los campos obligatorios serán:

Nombre
Especie
Género
Casa
Año de nacimiento
Todas las peticiones desde la interfaz deben realizarse por AJAX. El servidor debe incluir el tratamiento de errores, como URLs erróneas o datos no esperados.
