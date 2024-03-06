
import './App.css'
import FooterComponent from './components/FooterComponent';
import Main from './components/MainComponent';
import NavbarComponent from './components/NavbarComponent'


function App() {

  return (
    <div className='h-screen flex justify-between flex-col '>
    <NavbarComponent/>
    <Main/>
    <FooterComponent/>
    </div>
  );
};

export default App;
