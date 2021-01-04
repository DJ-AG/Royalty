import React from "react";
import './homepage.style.scss'

// Directory 
import Directory from '../../components/directory/directory.component'
// Footer
import Footer from '../../components/footer/footer.componen'


const HomePage = () => (
  <div className="homepage">
    <Directory/>
    <Footer/>
  </div>
);


export default HomePage