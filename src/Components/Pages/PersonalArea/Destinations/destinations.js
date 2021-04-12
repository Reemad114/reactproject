import React from 'react';
import { SwiperSlide } from 'swiper/react';

import MySwiper from '../../../General/Swiper/swiper.js';
import Users from './destinationsJson.js';


class Destinations extends React.Component{
  render() {
    const slidecontent = [] ;
    return(
      <MySwiper
      slidesperview = {4}
      slidecontent=
      {Users.map(user =>
        <SwiperSlide key={user.id} className="slide">
          <div className="slide-content py-auto">
            <div className="user-image">
              <img src={user.imgsrc} alt="" className="user-photo" />
            </div>
            <h3>{user.userName}</h3>
            <p>{user.text}</p>
          </div>
        </SwiperSlide>
          )
        }
      />
    )
  }
}
export default Destinations;
