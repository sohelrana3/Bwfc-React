import React from 'react'
import Slider from 'react-slick';
import {useRef} from 'react'

function Blog() {
 

    //creating the ref
    const customeSlider = useRef();
  
    // setting slider configurations
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  }
  
    const next = () => {
      customeSlider.current.slickNext();
    };
  
    const previous = () => {
      customeSlider.current.slickPrev();
    };
  return (
    <div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
      <Slider {...settings} ref={customeSlider}>
        <div>One</div>
        <div>Two</div>
        <div>Theree</div>
        <div>Four</div>
        <div>Five</div>
      </Slider>
    </div>
  )
}

export default Blog