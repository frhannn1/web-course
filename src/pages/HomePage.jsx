import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

const HomePage = () => {
  return (
    <div className="homepage ">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container clas>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <h1>
              Temukan <br /> <span>Bakat kreatifmu</span> <br /> Bersama Kami
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque enim maiores hic voluptatum quas consectetur numquam
            </p>
            <button className="btn btn-danger btn-lg rounded-1 me-2">Lihat Kelas</button>
            <button className="btn btn-outline-danger btn-lg rounded-1 me-2">Lihat Promo</button>
          </Col>
          <Col>
            <img src={HeroImage} alt="" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default HomePage;
