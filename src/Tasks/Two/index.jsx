import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const TaskComponent = () => {
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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

      const formattedPosts = posts.map((post) => ({
        ...post,
        images: post.images.map((imageId) =>
          images.find((img) => img.id === imageId)
        ),
        authors: post.authors.map((authorId) =>
          authors.find((author) => author.id === authorId)
        ),
        publishDate: new Date(post.publishDate),
      }));

      setFormattedData(formattedPosts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="task-container">
      {formattedData.map((post, index) => (
        <Card key={index} isFooterBlurred className="task-card">
          <CardHeader className="task-header">
            <h4 className="text-black font-medium text-2xl">{post.title}</h4>
          </CardHeader>
          <Image
            id="card-image"
            removeWrapper
            alt="Card example background"
            className="task-image"
            src={post.images[0]?.path}
          />
          <p className="text-tiny text-white uppercase font-bold">
            <strong> Category:</strong> {post.category}
          </p>
          <CardBody className="task-body">
            <p className="text-black">{post.content}</p>
            <p className="text-black text-tiny">
              Authors:{" "}
              {post.authors.map((author) => (
                <Link key={author.id} to={`/authors/${author.id}`}>
                  {author.name}
                </Link>
              ))}
            </p>
          </CardBody>
          <CardFooter className="task-footer">
            <Link to={`/posts/${post.id}`}>Read More</Link>
          </CardFooter>
          <p className="date text-black text-tiny">
            <strong>Publicado en:</strong>{" "}
            {format(post.publishDate, "EEEE d, MMM, yyyy", { locale: es })}
            <h6>id: {post.id}</h6>
          </p>
        </Card>
      ))}
    </div>
  );
};

export default TaskComponent;
