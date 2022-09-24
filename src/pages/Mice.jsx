import BannerSlider from "../components/BannerSlider";
import conferenceHall from '../public/conference-hall.jpg'

const Mice = () => {
    return (
        <main>
        <div className='cm_banner' style={{backgroundImage: `url(${conferenceHall})`}}>
          <h1>Mice</h1>
        </div>


        <div className="container mt-5 pt-5 mb-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img className="img-fluid" src="/meeting.jpg" />
            </div>
            <div className="col-md-6">
              <div>
                <h5>MICE (Meetings, Incentive, Conference, Events)</h5>
                <p>Keytrips Pvt. Ltd has extensive experience in organizing Meeting, Incentive, conferences and Events. We can assist with every aspect of your MICE requirement anywhere in India and major Corporate sectors.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    )
}

export default Mice;