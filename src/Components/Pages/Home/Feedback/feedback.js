import React from 'react';
import { SwiperSlide } from 'swiper/react';

import MySwiper from '../../../General/Swiper/swiper.js';
import Users from './feedbackJson.js';
import './feedback.css';


class Feedback extends React.Component{
  render() {
    const slidecontent = [] ;
    return(
      <div >
        <h2 className="text-center mt-2 shadow py-2">Clients Experiences</h2>
        <MySwiper
          slidesperview = {3}
          slidecontent=
          {Users.map(user =>
            <SwiperSlide key={user.id} className="slide">
              <div className="slide-content py-auto">
                <div className="user-image">
                  <img src={user.imgsrc} alt="" className="user-photo rounded-circle" />
                </div>
                <h3>{user.userName}</h3>
                <p>{user.text}</p>
              </div>
            </SwiperSlide>
            )
          }
        />
      </div>
    )
  }
}
export default Feedback;
