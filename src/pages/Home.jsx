import BannerSlider from "../components/BannerSlider";
import economicalSotels from '../public/economical-hotels.jpg';
import standardHotels from '../public/standard-hotels.jpg';
import premiumHotels from '../public/premium-hotels.jpg';

const Home = () => {
    return (
        <main>
        <div className='main_banner'>
          <BannerSlider />
        </div>


        <div className='hotel_category'>
          <div className='container'>
            <h2>Sense the warmth of Travel Management in Pan-India</h2>


            <div className="row">

              <div className="col-md-4">
                <div className="cm_card home_card">
                  <div className="card_img">
                    <img src={economicalSotels} />
                  </div>
                  <div className="card_body">
                  <h3>Economical hotels</h3>
                    <ul>
                    <li> Top Budget hotels</li>
                    <li> Prime location</li>
                    <li> Free hi speed Wi-Fi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cm_card home_card">
                  <div className="card_img">
                    <img src={standardHotels} />
                  </div>
                  <div className="card_body">
                  <h3>Standard Hotels</h3>
                    <ul>
                    <li> Comfortable Rooms</li>
                    <li> Branded toileetries</li>
                    <li> Tea and coffe maker in rooms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cm_card home_card">
                  <div className="card_img">
                    <img src={premiumHotels} />
                  </div>
                  <div className="card_body">
                    <h3>Premium hotels</h3>
                    <ul>
                      <li> Spacious rooms</li>
                      <li> Room dining</li>
                      <li> Well trend staff</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
              

          </div>

          </div>





          <div className='counts'>
            <div className="container">
              <div className="row">

                <div className="col-md-1" />

                <div className="col-md-5">
                  <div className="cm_counts">
                    <i className="fa-solid fa-city" />
                    
                    <h3>70+</h3>
                    <h5>CITIES</h5>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="cm_counts">
                  <i className="fa-solid fa-hotel" />
                    <h3>1000+</h3>
                    <h5>HOTELS</h5>
                  </div>
                </div>

              </div>

              <div className="row">
                
                <div className="col-md-1" />

                <div className="col-md-5">
                  <div className="cm_counts">
                  <i className="fa-solid fa-plane" />
                    <h3>20+</h3>
                    <h5>AIRLINES</h5>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="cm_counts">
                  <i className="fa-solid fa-car" />
                    <h3>100+</h3>
                    <h5>CAB VENDORS</h5>
                  </div>
                </div>

              </div>

              <div className="row">
                
                <div className="col-md-1" />

                <div className="col-md-10">
                  <p>Keytrips Pvt Ltd provides the Corporate Travel management solutions in which we manage a company’s strategic approach to travel ,cost benefits for client company, maximum satisfaction to travellers while fulfilling their requirement with prompt revert and providing them preferred solutions at within corporate travel policies, Round the clock support. Additionally we assist in obtaining maximum benefits from using Hotels and vendors. We ensure excellent management for day to day operation of the corporate travel program, traveller’s convenience, prompt information on various updates/changes information.</p>

                </div>

             

              </div>

             
            </div>


            
          </div>

      </main>
    )
}

export default Home;