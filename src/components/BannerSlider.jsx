
import Slider from "react-slick";
import slider1 from '../public/travel-banner.png';
import slider2 from '../public/slider-2.jpg';
import slider3 from '../public/slider-3.jpg';
import slider4 from '../public/slider-4.jpg';
import slider5 from '../public/slider-5.jpg';
import slider6 from '../public/slider-6.jpg';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const BannerSlider = () => {
    return(
        <Slider {...settings}>
            <div className="first_slide"><img src={slider1} /></div>
            <div><img src={slider2} /></div>
            <div><img src={slider3} /></div>
            <div><img src={slider4} /></div>
            <div><img src={slider5} /></div>
            <div><img src={slider6} /></div>
        </Slider>
    )
}

export default BannerSlider