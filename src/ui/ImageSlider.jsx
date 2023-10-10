import { useState, useRef, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import RedButton from "./RedButton";
import BlueButton from "./BlueButton";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ButtonDiv = styled.div`
  @media (width <= 1778px) {
    display: flex;
    flex-direction: column;
  }
`;

const slideStyles = {
  height: "100%",
  position: "relative",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
const sliderStyles = {
  position: "relative",
  height: "100%",
};

const bigHeaderStyles = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "var(--background-color-white)",
  textShadow: "black 1px 0 10px",
  textAlign: "center",
  zIndex: 1,
};

const smallHeaderStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "var(--background-color-white)",
  textShadow: "black 1px 0 10px",
  zIndex: 1,
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  left: "32px",
  fontSize: "45px",
  color: "var(--second-color-dark)",
  zIndex: 1,
  cursor: "pointer",
};
const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  right: "32px",
  fontSize: "45px",
  color: "var(--second-color-dark)",
  zIndex: 1,
  cursor: "pointer",
};
const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

function ImageSlider({ slides, parentWidth }) {
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const bigHeader = slides[currentIndex].bigHeader;
  const smallHeader = slides[currentIndex].smallHeader;

  const springs = useSpring({
    from: { x: -100 },
    to: { x: 0 },
  });

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 10000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <BsChevronCompactLeft />
      </div>

      <h1 style={bigHeaderStyles}>{bigHeader}</h1>

      <h3 style={smallHeaderStyles}>{smallHeader}</h3>
      <div style={rightArrowStyles} onClick={goToNext}>
        <BsChevronCompactRight />
      </div>
      <ButtonDiv>
        <RedButton nr={currentIndex} />
        <BlueButton nr={currentIndex}>Mai Multe despre noi</BlueButton>
      </ButtonDiv>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
