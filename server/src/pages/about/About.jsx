import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        This is About of our Story and mission
      </Header>
      <section className={styles.about__story}>
        <div className={`${styles.container} ${styles.about__story_container}`}>
          <div className={styles.about__section_image}>
            <img src={StoryImage} alt="Our Story Images" />
          </div>
          <div className={styles.about__section_content}>
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              maiores perspiciatis sapiente delectus eligendi dignissimos.
              Aliquid illo accusamus, architecto neque, deleniti dolores o
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              soluta. Natus, sapiente, reiciendis cumque provident debitis
              quidem deleniti veritatis,
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates voluptatum qui esse. Lorem ipsum dolor sit amet,
              conadipisicing elit. sectetur
            </p>
          </div>
        </div>
      </section>
      <section className={styles.about__vision}>
        <div
          className={`${styles.container} ${styles.about__vision_container}`}
        >
          <div className={styles.about__section_content}>
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              maiores perspiciatis sapiente delectus eligendi dignissimos.
              Aliquid illo accusamus, architecto neque, deleniti dolores optio
              ab velit et, dolorem sint Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt, sint totam. Quaerat.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              soluta. Natus, sapiente, reiciendis cumque provident debitis
              quidem deleniti veritatis, laborum tempore necessitatibus
              molestias adipisci ab. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quia, vel?{" "}
            </p>
          </div>
          <div className={styles.about__section_image}>
            <img src={VisionImage} alt="Our Vision Images" />
          </div>
        </div>
      </section>

      <section className={styles.about__mission}>
        <div
          className={`${styles.container} ${styles.about__mission_container}`}
        >
          <div className={styles.about__section_image}>
            <img src={MissionImage} alt="Our Mission Images" />
          </div>
          <div className={styles.about__section_content}>
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
              maiores perspiciatis sapiente delectus eligendi dignissimos.
              Aliquid illo accusamus, architecto neque, deleniti dolores o
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              soluta. Natus, sapiente, reiciendis cumque provident debitis
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. t. </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
