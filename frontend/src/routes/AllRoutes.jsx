import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFoundPage from "../pages/NotFoundPage";
import Product from "../pages/Product";
import Todo from "../pages/Todo";
import { Box } from "@chakra-ui/react";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
