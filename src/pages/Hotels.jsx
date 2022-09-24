import BannerSlider from "../components/BannerSlider";
import hotelsBanner from '../public/hotels-banner.jpg';
import tajHotel from '../public/taj-hotel.jpg';
import itc from '../public/itc.jpg';
import leelaHotel from '../public/leela-hotel.jpg';
import ihg from '../public/ihg.jpg';
import accor from '../public/accor.jpg';
import marriott from '../public/marriott.jpg';
import lemonTreeHotel from '../public/lemon-tree-hotel.jpg';
import contreen from '../public/contreen.jpg';
import parkInn from '../public/park-inn.jpg';
import sarovarHotel from '../public/Sarovar-Hotel.jpg';
import fernHotel from '../public/Fern-Hotel.png';
import ginger from '../public/ginger.jpg';
import fabhotelsLogo from '../public/Fabhotels_Logo.png';
import oyoLogo from '../public/oyo-logo.png';
import treeboHotels from '../public/Treebo-hotels.jpg';
import gustHouse from '../public/gust-house.jpg';
import individualHotel from '../public/individual-hotel.jpg';
import standaloneHotels from '../public/standalone-hotels.jpg';

const Hotels = () => {
    return (
        <main>
        <div className='cm_banner' style={{backgroundImage: `url(${hotelsBanner})`}}>
          <h1>Hotels</h1>
        </div>




          



          <div className="container mt-5 pt-5">
            <h2>5 Stars</h2>
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={tajHotel} />
                  <h3>Taj Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={itc} />
                  <h3>ITC Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={leelaHotel} />
                  <h3>Leela Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={ihg} />
                  <h3>IHG Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={accor} />
                  <h3>Accor Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={marriott} />
                  <h3>Marriott Group of Hotels</h3>
                </div>
              </div>

            </div>
          </div>






          <div className="container mt-5 pt-5">
            <h2>4 Stars</h2>
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={lemonTreeHotel} />
                  <h3>Lemontree Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={contreen} />
                  <h3>countri Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={parkInn} />
                  <h3>Park Inn Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={sarovarHotel} />
                  <h3>Sarovar Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={fernHotel} />
                  <h3>The Fern Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={ginger} />
                  <h3>Ginger Group of Hotels</h3>
                </div>
              </div>

            </div>
          </div>






          <div className="container mt-5 pt-5">
            <h2>Budget Hotels</h2>
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={fabhotelsLogo} />
                  <h3>Fab Hotel</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={oyoLogo} />
                  <h3>Oyo Rooms</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={treeboHotels} />
                  <h3>Treebo Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={gustHouse} />
                  <h3>Gust Houses Chains</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={individualHotel} />
                  <h3>Individual Hotels Chains</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src={standaloneHotels} />
                  <h3>Standalone hotels</h3>
                </div>
              </div>

            </div>
          </div>




      </main>
    )
}

export default Hotels;