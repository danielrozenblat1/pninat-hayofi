import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import BackgroundGlass from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import ByMe from './components/ByMe/ByMe';
import Treatments from './screens/SixthScreen';
import SeventhScreen from './screens/SeventhScreen';
import EightScreen from './screens/EightScreen';
import LocationCard from './components/bonus/Bonus';

function App() {
  return <>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <ThirdScreen/>
  <FifthScreen/>
  <BackgroundGlass/>
<SeventhScreen/>
<EightScreen/>
<LocationCard/>
  <ByMe/>
  </>
}

export default App;
