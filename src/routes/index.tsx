import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy(() => import("../components/pages/DashBoard"));
const Books = React.lazy(() => import("../components/pages/Book"));
const BookDetails = React.lazy(() => import("../components/pages/BookDetails"));
const Authors = React.lazy(() => import("../components/pages/Author"));
const AuthorDetails = React.lazy(() => import("../components/pages/AuthorDetails"));

const routes = [
  {
    path: PathConstants.HOME,
    element: <Home />,
  },
  {
    path: PathConstants.BOOKS,
    element: <Books />,
  },
  {
    path: `${PathConstants.BOOKS}/:bookId`,
    element: <BookDetails />,
  },
  {
    path: PathConstants.AUTHORS,
    element: <Authors />,
  },
  {
    path: `${PathConstants.AUTHORS}/:authorId`,
    element: <AuthorDetails />,
  },
];

export default routes;
