import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import IEMDeals from './components/IEMDeals';
import HeadphoneDeals from './components/HeadphoneDeals';
import Handpicked from './components/HandpickDeals';
import WeloveSection from './components/WeloveSection';
import Audiophile from './components/Audiophile';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <IEMDeals/>
      <HeadphoneDeals/>
      <Handpicked/>
      <WeloveSection/>
      <Audiophile/>
    </div>
  );
}

export default App;
