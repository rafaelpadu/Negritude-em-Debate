import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import api from "../utils/api";
import style from "./Album.module.css";
import { toast } from "react-toastify";
const Album = (props) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    api
      .get("/images/get-all")
      .then((response) => setImages(response.data))
      .catch((error) => toast.error(error.data.message));
  }, []);
  return (
    <section className={style.mainAlbum}>
      <h1>Album - Negritude em Debate</h1>
      {images.length > 0 ? (
        <Carousel
          autoPlay
          width={800}
          showIndicators={false}
          useKeyboardArrows
          swipeable
          stopOnHover
          infiniteLoop
        >
          {images.map((image, index) => (
            <div className={styles.carrouselContainer}>
              <img
                style={{ marginBottom: "1rem" }}
                key={index}
                src={`http://localhost:3001/uploads/${image.img}`}
              />
              <p
                style={{
                  color: "white",
                }}
              >
                {image.title} - Artista: {image.author}
              </p>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Não há imagens cadastradas!</p>
      )}
    </section>
  );
};
export default Album;
