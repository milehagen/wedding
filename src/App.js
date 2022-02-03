import weddinginvite from './weddinginvite.svg';
import huyAnneHoyBilde from './huyAnneHoyBilde.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Save The Date</p>
      </header>
      <div class="container all-content">
  <div class="row">
    <div class="col">
       <img src={weddinginvite} className="wedding-invite" alt="wedding invitation" />
    
        </div>
           <span> 
 <p> TEXT AND INFO HERE</p>
       </span>
        <div class="col">
          <img src={huyAnneHoyBilde} className="huy-anne-bilde" alt="Bilde Huy og Anne" />
        </div>
         </div>
     </div>  
    </div>
  );
}

export default App;
