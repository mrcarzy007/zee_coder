import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  console.log(images);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut
        veritatis eum in iusto!
      </Header>
      <section className={styles.gallery}>
        <div className={`${styles.container} ${styles.gallery__container}`}>
          {images.map((images, index) => {
            return (
              <artical key={index}>
                <img src={images} alt={`Gallery Images ${index + 1}`} />
              </artical>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
