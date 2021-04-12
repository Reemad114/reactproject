import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class MySwiper extends React.Component{
  render() {
    return(
      <Swiper
        spaceBetween={40}
        slidesPerView={this.props.slidesperview}
        navigation
        pagination={{ clickable:true}}
        scrollbar={{draggable:true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {this.props.slidecontent}
    </Swiper>)
  }
}
export default MySwiper
