import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header title="Contact Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum error
        ipsa veritatis aperiam illo, maxime fugiat!
      </Header>
      <section className={styles.contact}>
        <div className={`${styles.container} ${styles.contact__container}`}>
          <div className={styles.contact__wrapper}>
            <a
              href="mailto:Adityaak1159@gamil.com"
              target="__blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://facebook.com"
              target="__blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+917004117591"
              target="__blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
