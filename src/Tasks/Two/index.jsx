import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const TaskComponent = () => {
  const [formattedData, setFormattedData] = useState([]);

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

      setFormattedData(formattedPosts); // Establecer los datos formateados en el estado
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {formattedData.map((post, index) => (
        <Card
          key={index}
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">{post.title}</h4>
          </CardHeader>
          <div className="w-28 h-28">
            <Image
              removeWrapper
              alt="Card example background"
              className=" border-8 -scale-50 -translate-y-6"
              src={post.images[0]?.path} // Suponiendo que la imagen está en el primer elemento del array
            />
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TaskComponent;
