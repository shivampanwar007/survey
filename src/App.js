import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Body2 from './Components/Body2';
import Body3 from './Components/Body3';

export default function App() {
  return (
    <>
    <div className='space-y-16'>
    <Navbar/>
    {/* <Body/> */}
    {/* <Body2/> */}
    <Body3/>
    <Footer/>
    </div>
    </>
  );
}

