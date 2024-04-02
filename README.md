# Iniciando con Create React App

Este proyecto fue inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para ver la página en el navegador.
Abre [http://localhost:3001](http://localhost:3001) para ver la API en el navegador.

La página se recargará si realizas ediciones.\
También verás cualquier error de lint en la consola.

### `npm test`

Inicia el corredor de pruebas en modo interactivo de observación.\
Consulta la sección sobre [cómo ejecutar pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción está minificada y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

# Instrucciones

Esta página contiene las instrucciones para ambas tareas, por favor refiérase a ella al completar las tareas. Estas instrucciones también se pueden encontrar en el archivo README.md en la raíz de este proyecto.

## Tarea Uno

Esta tarea es para evaluar su conocimiento en la recuperación y manipulación de datos. Para ayudar en esta tarea, se ha configurado un ejemplo de API REST y se está ejecutando en el puerto 3001 (asumiendo que está utilizando `npm start` para iniciar la aplicación). Esta API REST devolverá imágenes y publicaciones desde los puntos de acceso disponibles, consulte [http://localhost:3001](http://localhost:3001). Cada publicación tendrá una matriz de imágenes y una matriz de autores. Para cada publicación, se espera que complete estas matrices con los datos reales de los objetos que están representados por el ID. Se espera que para esta tarea realice las llamadas apropiadas a la API para recuperar los datos a formatear. Luego manipule los datos que reciba para que coincidan con el objeto JSON esperado definido en la prueba fallida.

La prueba se está ejecutando desde `src/Tasks/One/taskOne.test.tsx` y espera que los datos formateados correctamente se rendericen en la página como una cadena.

Al revisar su solución a este problema, asegúrese de tomar notas sobre cualquier suposición realizada y cualquier punto que mejorarías si tuvieras más tiempo.

## Tarea Dos

Esta tarea es para evaluar sus habilidades en React / HTML / CSS / Testing. No se proporciona ningún diseño aquí, por lo que la perfección de píxeles no es un requisito. Sin embargo, se espera que utilice HTML semántico y las mejores prácticas comunes para proporcionar una IU receptiva renderizada en la página.

### Requisitos

- Utilizando los datos de la API proporcionada en la Tarea Uno, renderice una lista de publicaciones en la página.
- Cada publicación debe mostrar el título, contenido, autor, fecha de publicación y la imagen. Estos deben mostrarse como una tarjeta.
- Cada publicación debe tener un elemento que enlace a la publicación, por ejemplo http://localhost:3000/posts/POST_ID.
- Cada publicación debe tener un elemento que enlace al autor, por ejemplo http://localhost:3000/authors/AUTHOR_ID.
- La fecha mostrada en la tarjeta de la publicación debe formatearse como "Domingo 3, Jun, 2022", etc.
- La publicación debe mostrar todos los autores vinculados a la publicación

