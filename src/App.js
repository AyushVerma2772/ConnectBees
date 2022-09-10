import './Styles/App.css';
import './Styles/Responsive.css'
import Main from "./Components/Main"
import Vision from './Components/Vision';
import ExploreUs from './Components/ExploreUs';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Footer from './Components/Footer';
import KeyFeature from './Components/KeyFeature';
import WhyUs from './Components/WhyUs';
import Work from './Components/Work'


function App() {

  useEffect(() => {
    Aos.init({duration: 950});
  }, [])

  return (
    <>
      <Main/>
      <Work/>
      <KeyFeature/>
      <Vision/>
      <WhyUs/>
      <ExploreUs/>
      <Footer/>
    </>
  );
}

export default App;
