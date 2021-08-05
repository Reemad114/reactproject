import React from 'react';
import { SwiperSlide } from 'swiper/react';
import '../content.css'
import MySwiper from '../../../General/Swiper/swiper.js';
import Users from './destinationsJson.js';


class Destinations extends React.Component{
  render() {
    const slidecontent = [] ;
    return(
      <div>
        <h1 id="recommendedtitle" className="text-center shadow mt-2">Recommended Destinations For You</h1>
        <div id="recommended">
          <MySwiper
          slidesperview = {4}
          slidecontent=
          {Users.map(user =>
            <SwiperSlide key={user.id} className="slide mt-2">
              <div className="slide-content py-auto">
                <div className="user-image">
                  <img id="destimg" src={user.imgsrc} alt="" className="user-photo" />
                </div>
                <h3>{user.userName}</h3>
                <p>{user.text}</p>
              </div>
            </SwiperSlide>
              )
            }
          />
        </div>
      </div>
    )
  }
}
export default Destinations;
