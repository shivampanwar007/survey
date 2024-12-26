import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
    <div className='space-y-16'>
    <Navbar/>
    <Body/>
    <Footer/>
    </div>
    </>
  );
}

