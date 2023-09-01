import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import EditPage from "./pages/Edit";
import { Col, Container, Row } from "react-bootstrap";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <h1 className=" font-sans font-extrabold text-6xl text-purple-700 mb-2 text-center">
        Meme Generator
      </h1>
      <div>
        <Container>
          <Row>
            <Col xl>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit" element={<EditPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<div>Page Not Found 404</div>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
