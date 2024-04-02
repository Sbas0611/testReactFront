import React from 'react';
import './instructions.scss';

export default function Instructions() {
  return (
    <div className="instructions__container">
      <h1>Instrucciones</h1>
      <p>
        Esta página contiene las instrucciones para ambas tareas, por favor refiérase a ella al completar las tareas. Estas instrucciones también se pueden encontrar en el archivo README.md en la raíz de este proyecto.
      </p>
      <h2>Tarea Uno</h2>
      <p>
        Esta tarea es para evaluar su conocimiento en la recuperación y manipulación de datos. Para ayudar en esta tarea, se ha configurado un ejemplo de API REST y se está ejecutando en el puerto 3001 (asumiendo que está utilizando `npm start` para iniciar la aplicación). Esta API REST devolverá imágenes y publicaciones desde los puntos de acceso disponibles, consulte <a href="http://localhost:3001">http://localhost:3001</a>. Cada publicación tendrá una matriz de imágenes y una matriz de autores. Para cada publicación, se espera que complete estas matrices con los datos reales de los objetos que están representados por el ID. Se espera que para esta tarea realice las llamadas apropiadas a la API para recuperar los datos a formatear. Luego manipule los datos que reciba para que coincidan con el objeto JSON esperado definido en la prueba fallida.
      </p>
      <p>La prueba se está ejecutando desde `src/Tasks/One/taskOne.test.tsx` y espera que los datos formateados correctamente se rendericen en la página como una cadena.</p>
      <p>Al revisar su solución a este problema, asegúrese de tomar notas sobre cualquier suposición realizada y cualquier punto que mejorarías si tuvieras más tiempo.</p>
      <h2>Tarea Dos</h2>
      <p>Esta tarea es para evaluar sus habilidades en React / HTML / CSS / Testing. No se proporciona ningún diseño aquí, por lo que la perfección de píxeles no es un requisito. Sin embargo, se espera que utilice HTML semántico y las mejores prácticas comunes para proporcionar una IU receptiva renderizada en la página.</p>
      <h3>Requisitos</h3>
      <ul>
        <li>Usando los datos de la API proporcionada en la Tarea Uno, renderice una lista de publicaciones en la página.</li>
        <li>Cada publicación debe mostrar el título, contenido, autor, fecha de publicación y la imagen. Estos deben mostrarse como una tarjeta.</li>
        <li>Cada publicación debe tener un elemento que enlace a la publicación, por ejemplo http://localhost:3000/posts/POST_ID.</li>
        <li>Cada publicación debe tener un elemento que enlace al autor, por ejemplo http://localhost:3000/authors/AUTHOR_ID.</li>
        <li>La fecha mostrada en la tarjeta de la publicación debe formatearse como "Domingo 3, Jun, 2022", etc.</li>
        <li>La publicación debe mostrar todos los autores vinculados a la publicación</li>
      </ul>
    </div>
  );
}
