import {
    Routes,
    Route
  } from "react-router-dom";
  
  import Content  from '@components/layout/Content';

  import Home from "../pages/Home";
  import About from "../pages/About";
  import Contact from "../pages/Contact";

  
  export default function AppRoutes() {
    return (
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
    )
  }
  