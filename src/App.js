import weddinginvite from './weddinginvite.png';
import Navbar from './Navbar';
import './App.css';
import Slides from './Slides';

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container-all-content">
          
          <Slides />
         <div>
            <img src={weddinginvite} className="wedding-invite"/>
          </div>
       </div>
           </div>
  );
}

