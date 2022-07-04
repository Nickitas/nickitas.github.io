import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../../img/t1.jpg'
import slide2 from '../../../img/t5.jpg'
import slide3 from '../../../img/t3.jpg'
import slide4 from '../../../img/t4.jpg'
import logo from '../../../logo.svg'
import './header.css'


const brend = <div className='brend'><img alt="logo" src={logo} width="50" height="50"/><b>HOLD.com</b></div>

const slideData = [
    {
        header:brend,
        text:'Ваша платформа бронирования',
        img:slide1
    },
    {
        header:'Платформа бронирования "HOLD" - так как надо',
        text:'Чистые, уютные немера, хостелы и многое другое расположенные по всему Ростову-на-Дону, в его исторической части. В 5 минутах ходьбы от набережной реки Дон. Остановка общественного транспорта, торговые и развлекательные заведения в непосредственной близости от объектов.',
        img:slide2
    },
    {
        header:'Платформа бронирования "HOLD" включает все удобства',
        text:'К вашим услугам кухня-гостиная оборудованная всем необходимым для приготовления еды, обеденным столом и большим телевизором. В хостеле 4 номера: два десятиместных, один шестиместный и один двухместный. 3 общих санузла и две душевые кабины. Летняя веранда с зоной отдыха.',
        img:slide3
    },
    {
        header:'Платформа бронирования "HOLD" удобства в городе',
        text:'Расстояние до Ж/Д вокзала 2,3 км, до Главного автовокзала 2,5 км, до автобусной остановки 100 метров. Из дополнительных услуг: глажка, стирка, бесплатный Wi-Fi, кабельное ТВ, парковка. Все номера оснащены сплит-системами.',
        img:slide4
    },
]

const Header = () => {
  return (
    <Carousel className='Header mb-4'>
      {
        slideData.map((item, key) => { return (
            <Carousel.Item key={key} interval={10000}>
                <img
                    className="d-block w-100"
                    src={item.img}
                    alt={item.header}
                />
                <Carousel.Caption>
                    <h3>{item.header}</h3>
                    <p>{item.text}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )})
      }
    </Carousel>
  )
}
export default Header