import { useState, useEffect } from "react";

const TaskComponent = () => {
  const [formattedData, setFormattedData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Hacer llamadas a la API para recuperar los datos de las publicaciones, imágenes y autores
      const [posts, images, authors] = await Promise.all([
        fetch("http://localhost:3001/posts").then((response) =>
          response.json()
        ),
        fetch("http://localhost:3001/images").then((response) =>
          response.json()
        ),
        fetch("http://localhost:3001/authors").then((response) =>
          response.json()
        ),
      ]);

      // Manipular los datos para completar las matrices de imágenes y autores en cada publicación
      const formattedPosts = posts.map((post) => ({
        ...post,
        images: post.images.map((imageId) =>
          images.find((img) => img.id === imageId)
        ),
        authors: post.authors.map((authorId) =>
          authors.find((author) => author.id === authorId)
        ),
      }));

      // Formatear los datos manipulados como una cadena JSON
      const formattedDataString = JSON.stringify(formattedPosts, null, 2);

      // Establecer la cadena formateada en el estado
      setFormattedData(formattedDataString);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <pre>{formattedData}</pre>
    </div>
  );
};

export default TaskComponent;
