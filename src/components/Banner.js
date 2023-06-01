import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Flutter Developer", "MERN Developer", "Application Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my web page.</span>
                  <h1>
                    {`Hi! I'm Jaivin `}
                    <br></br>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Flutter ", "MERN Developer", "Application Developer " ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  I am a passionate and experienced Full Stack Developer with over 4 years of experience in the tech field. I began my IT career as an Android developer, where I gained valuable knowledge and skills in mobile app development. However, my curiosity and drive for learning led me to explore other technologies and platforms.

I had the opportunity to work with Flutter, a powerful cross-platform framework, and it opened up a whole new world of possibilities for me. As I delved deeper into Flutter, I realized the immense potential it offers in building beautiful, high-performance mobile applications.

Currently, my focus lies on MERN (MongoDB, Express.js, React.js, and Node.js) stack development. This comprehensive stack allows me to develop end-to-end web applications efficiently and seamlessly. With MERN, I can leverage the power of JavaScript throughout the entire development process, ensuring a smooth and cohesive user experience.

I am incredibly passionate about the MERN stack and I see it as the foundation for my future career growth. The flexibility, scalability, and robustness it offers align perfectly with my development philosophy. I thrive on challenging projects that require creative problem-solving and innovative solutions.

I believe in staying up-to-date with the latest technologies and continuously expanding my skill set. As the tech industry evolves rapidly, I am committed to keeping pace with emerging trends and incorporating them into my work.

If you are looking for a Full Stack Developer who is dedicated, detail-oriented, and enthusiastic about creating exceptional web applications with the MERN stack, then I am the right person for the job. I am excited to take on new challenges, collaborate with talented individuals, and contribute to the success of your projects.

Please feel free to explore my portfolio and get in touch with me if you have any questions or if you would like to discuss potential collaborations. I look forward to the opportunity to work with you and turn your ideas into reality.

Thank you for visiting my web page!
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
