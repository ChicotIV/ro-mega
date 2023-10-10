import Zoom from "react-img-zoom";

import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledSliderContainer = styled.div`
  padding: 2.5rem;
  width: 35rem;
  height: 35rem;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  padding: 1.5rem 0 1.5rem 1.5rem;
  height: min-content;
`;

const LeftAr = styled.div`
  &::before {
    font-size: 30px;

    color: white;
    height: 20px;
    width: 20px;
    background-color: var(--text-color-dark);
    padding: 0.3rem;
    border: 1px solid;
  }
`;
const RightAr = styled.div`
  &::before {
    font-size: 30px;
    color: white;
    height: 20px;
    width: 20px;
    background-color: var(--text-color-dark);
    padding: 0.3rem;
  }
`;

function CarouselWithZoom({ images }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <LeftAr />,
    nextArrow: <RightAr />,
  };

  const imageArray = images.split(",");

  return (
    <>
      {imageArray.length === 1 && (
        <StyledDiv>
          <Zoom img={imageArray[0]} zoomScale={1.5} width={400} height={400} />
        </StyledDiv>
      )}
      {imageArray.length > 1 && (
        <StyledSliderContainer>
          <Slider {...settings}>
            {imageArray.map((item) => (
              <StyledDiv>
                <Zoom img={item} zoomScale={1.5} width={600} height={600} />
              </StyledDiv>
            ))}
          </Slider>
        </StyledSliderContainer>
      )}
    </>
  );
}

export default CarouselWithZoom;
