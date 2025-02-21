import React, { useState, useEffect } from 'react'
import './Slider.css'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper,SwiperSlide } from 'swiper/react';

function Slider() {
const[slidesPerView,setSliderPerview] = useState (1)
    const data = [
{id : '1', image: 'https://img.freepik.com/fotos-gratis/natureza-morta-com-a-balanca-da-justica_23-2149776014.jpg?semt=ais_hybrid'},
{ id : '2', image:'https://www.shutterstock.com/image-photo/lawyer-scales-justice-law-concepts-600nw-2509112733.jpg' },
{ id : '3', image: 'https://www.shutterstock.com/image-vector/gavel-books-libra-vector-law-600nw-2552631855.jpg'},
{ id : '4', image: 'https://media.istockphoto.com/id/1388925357/pt/foto/the-statue-of-justice-lady-justice-or-iustitia-justitia-the-roman-goddess-of-justice.jpg?s=612x612&w=0&k=20&c=FPtr0oXvLQJvrOvG9IjX4rc3TrsrAPJldMTJWYkOZvU='},
]

useEffect(() => {

function adaptar (){

    if(window.innerWidth < 700){
        setSliderPerview(1);
    }else{
        setSliderPerview(1);
    }
    }

    adaptar();

    window.addEventListener("funcionar",adaptar)

    return() => {

        window.removeEventListener("funcionar",adaptar)
    }


}, [ ])
  return (
    <div>

<Swiper
slidesPerView={slidesPerView}
pagination = {{clickable: true}}
navigation
>
    {data.map( (item) => (

<SwiperSlide key={item.id}>
<img src = {item.image} alt='Slider' className='slider-item'/>

</SwiperSlide>
    ))}
</Swiper>

    </div>
  )
}

export default Slider