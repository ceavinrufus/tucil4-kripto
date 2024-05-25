import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/teacher.jpg";

const HomePage = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="homepage">
      <Container>
        <Row
          className={isMobileView ? "flex-column" : "d-flex align-items-center"}
        >
          <Col>
            <h1>Selamat Datang!</h1>
            <h1>Tugas MK II403</h1>
            <h1>Kriptografi dan Koding</h1>
            <br />
            <h3>Presented By:</h3>
            <li style={{ listStyle: "none" }}>
              18221065 Josua Adriel Sinabutar
            </li>
            <li style={{ listStyle: "none" }}>
              18221146 Tara Chandani Haryono
            </li>
            <li style={{ listStyle: "none" }}>
              18221162 Ceavin Rufus De Prayer Purba
            </li>
          </Col>
          {!isMobileView && (
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "80%" }} src={HeroImage} alt="hero-img" />
            </Col>
          )}
        </Row>
        {isMobileView && (
          <Row className="justify-content-center">
            <Col xs={10} sm={8} md={6} lg={4}>
              <img style={{ width: "100%" }} src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
