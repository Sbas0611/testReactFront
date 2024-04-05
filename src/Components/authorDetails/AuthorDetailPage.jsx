import { useState, useEffect } from "react";
import axios from "axios";
import "./AuthorDetailPage.scss";

const AuthorDetail = ({ authorId }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/authors/${authorId}`
        );
        setAuthor(response.data);
      } catch (error) {
        console.error("Error fetching author data:", error);
      }
    };

    fetchData();
  }, [authorId]);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="author-card">
      <div className="author-info">
        <p>id: {author.id}</p>
        <h2 className="author-name">Nombre: {author.name}</h2>
      </div>
    </div>
  );
};

export default AuthorDetail;
