import React from 'react'
import Testimonialsinfo from '../Domain/testimonialsinfo'
import Premium from '../Home/premium'
import Teammembers from '../Home/teammembers';
import Team from '../Home/team';
import Footer from "../Footer/Footer";
import Navbar from "../Navigation/Navbar";

export default function Testimonialscards() {
    return (
        <div>
            <Navbar />
            <Testimonialsinfo />

            <Premium />
            <Testimonialsinfo />
            <Teammembers />
<Team />
<Footer />

        </div>
    )
}
