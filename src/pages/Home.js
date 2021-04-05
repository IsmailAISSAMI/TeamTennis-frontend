import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="Home">
                <div class="btndiv">
                    <button class="button">S'inscrire à un cours</button>
                    <button class="button">Prendre un abonnement</button>
                </div>
            </div>
            <Footer />
                {/* <Banner />
                <Info />
                <Coach /> */}
        </>
    );
};

export default Home;