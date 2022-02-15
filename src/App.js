import weddinginvite from './weddinginvite.svg';
import text from './text.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container all-content">
  <div class="row">
    <div class="col">
       <h1 className="website-heading">HUY & ANNE </h1>
        </div>
           
        <div class="col">
          <img src={weddinginvite} className="wedding-invite" alt="wedding invitation" />
          <span> 
    <img src={text} className="text-next-to-image" alt="text" /> 
    </span>
        </div>
         </div>
     </div>  
    </div>
  );
}

export default App;
