import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Info from '../Info/Info';
import MakeAapointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimoniamls from '../Testimoniamls/Testimoniamls';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAapointment></MakeAapointment>
            <Testimoniamls></Testimoniamls>
            <Footer></Footer>
        </div>
    );
};

export default Home;