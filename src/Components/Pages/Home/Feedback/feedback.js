import React from 'react';
import { SwiperSlide } from 'swiper/react';

import MySwiper from '../../../General/Swiper/swiper.js';
import './feedback.css';


class Feedback extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const slidecontent = [] ;
    return(
      <div >
        <h2 className="text-center mt-4 shadow py-2">Clients Experiences</h2>
        <div className="mt-4">
          <MySwiper
          slidesperview = {3}
          slidecontent=
          {this.props.data.map(user =>
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
      </div>
    )
  }
}
export default Feedback;
