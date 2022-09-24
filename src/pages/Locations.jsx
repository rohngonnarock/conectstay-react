import BannerSlider from "../components/BannerSlider";
import locationsBanner from '../public/locations-banner.png';
import maharashtra from '../public/maharashtra.jpg';
import uttarPradesh from '../public/uttar-pradesh.jpg';
import karnataka from '../public/karnataka.jpg';
import odisha from '../public/odisha.jpg';
import tamilNadu from '../public/tamil-nadu.jpg';
import delhi from '../public/delhi.jpg';
import goa from '../public/goa.jpg';
import gujarat from '../public/gujarat.jpg';
import gurugram from '../public/gurugram.jpg';
import telangana from '../public/telangana.jpg';
import rajasthan from '../public/rajasthan.jpg';
import kerala from '../public/kerala.jpg';
import kolkata from '../public/kolkata.jpg';
import noida from '../public/noida.jpg';
import punjab from '../public/punjab.jpg';

const Locations = () => {
    return (
        <main>
        <div className='cm_banner' style={{backgroundImage: `url(${locationsBanner})`}}>
          <h1>Locations</h1>
        </div>


        <div className='hotel_category'>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={maharashtra} />
                        <h3>Maharashtra</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={uttarPradesh} />
                        <h3>Uttar Pradesh</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={karnataka} />
                        <h3>Karnataka</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={odisha} />
                        <h3>Odisha</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={tamilNadu} />
                        <h3>Tamil Nadu</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={delhi} />
                        <h3>Delhi</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={goa} />
                        <h3>Goa</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={gujarat} />
                        <h3>Gujarat</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={gurugram} />
                        <h3>Gurugram</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={telangana} />
                        <h3>Telangana</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={rajasthan} />
                        <h3>Rajasthan</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={kerala} />
                        <h3>Kerala</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={kolkata} />
                        <h3>Kolkata</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={noida} />
                        <h3>Noida</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src={punjab} />
                        <h3>Punjab</h3>
                    </div>
                </div>
                
            </div>
          </div>
        </div>

      </main>
    )
}

export default Locations;