import React from "react";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom"; // Asegúrate de importar useParams
import Nav from "./Components/Nav";
import TaskOne from "./Tasks/One";
import TaskTwo from "./Tasks/Two";
import Instructions from "./Components/Instructions";
import PostDetail from "./Components/postDetails/PostDetailPage";
import AuthorDetail from "./Components/authorDetails/AuthorDetailPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Instructions />} />
          <Route path="task-1" element={<TaskOne />} />
          <Route path="task-2" element={<TaskTwo />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="posts/:postId" element={<PostDetailPageWrapper />} />
          <Route path="/authors/:authorId" element={<AuthorDetailPageWrapper2 />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go back to instructions</Link>
      </p>
    </div>
  );
}

function PostDetailPageWrapper() {
  const { postId } = useParams(); // Use useParams to get the postId from the URL
  return <PostDetail postId={postId} />;
}

function AuthorDetailPageWrapper2() {
  const { authorId } = useParams(); // Use useParams to get the postId from the URL
  return <AuthorDetail authorId={authorId} />;
}
