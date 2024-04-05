import { useState, useEffect } from "react";
import axios from "axios";
import "./PostDetailPage.scss";
import { Image } from "@nextui-org/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [posts, images, authors] = await axios.all([
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

        const selectedPost = formattedPosts.find((p) => p.id === postId);
        setPost(selectedPost);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      <div>
        <p>{post.id}</p>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-images-list">
          <li key={post.images.id} className="post-image">
            <Image
              id="card-image"
              removeWrapper
              alt="Card example background"
              className="task-image"
              src={post.images[0]?.path}
            />
          </li>
        </div>
        <strong className="category">{post.category}</strong>
        <p className="post-content">{post.content}</p>
        <br />
        <strong className="post-authors">Authors:</strong>
        <ul className="post-authors-list">
          {post.authors.map((author) => (
            <li key={author.id} className="post-author">
              {author.name}
            </li>
          ))}
        </ul>
        <p className="post-date">
          <strong>Publicado en:</strong>{" "}
          {format(post.publishDate, "EEEE d, MMM, yyyy", { locale: es })}
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
