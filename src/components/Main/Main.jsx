import React from 'react'
import Header from './Header/Header'
import RoomsPrices from './RoomsPrices/RoomsPrices'
import BookingForm from './BookingForm/BookingForm'
import Services from './Services/Services'
import AdditionalContent from './AdditionalContent/AdditionalContent'
import Contacts from './Contacts/Contacts'
import Footer from './Footer/Footer'

const Main = () => {
    return (
        <main>
            <Header/>
            <BookingForm/>
            <RoomsPrices/>
            <Services/>
            <AdditionalContent/>
            <Contacts/>
            <Footer/>
        </main>
    )
}
export default Main