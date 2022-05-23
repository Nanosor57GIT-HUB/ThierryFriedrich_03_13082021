import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Carousel = (props) => {
  const { id } = useParams();

  const dataId = props.blogs.filter((lodge) => lodge.id === id);

  const slides = dataId
    .map((slide) => slide.pictures)
    .map((pic) => (pic = pic.length));
  //console.log(slides[0])

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides - 1 : current - 1);
  };
  // console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  } 

  return (
    <div className="carouselContainer">
      <div className="carousel">
        {dataId.map((slide, index) => {
          //console.log(slide.pictures);
          return slide.pictures.map((pic, index) => (
            <div
              className={index === current ? "slide-active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={pic}
                  alt={pic}
                  className="lodging"
                  key={pic}
                  style={{
                     width: `120%`
                  }}
                />
              )}
            </div>
          ));
        })}
        <div className="maskBanner"></div>
        { slides[0] !== 1 ?
        <div className="arrowSlide">
           
          
            <img
            src="../componentsIMG/arrow-left.svg"
            alt="arrow-slide_left"
            className="arrowLeft"
            onClick={prevSlide}
          />
          <img
            src="../componentsIMG/arrow-right.svg"
            alt="arrow_slide_right"
            className="arrowRight"
            onClick={nextSlide}
          />  
        </div>
        : null }
        
      </div>

    </div>
  );
};



       
 
export default Carousel;

