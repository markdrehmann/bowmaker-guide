import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Head from './components/Head';
import BowmakersContainer from './containers/BowmakersContainer';
import ShowBowmaker from './components/bowmakers/ShowBowmaker';
import BowDrawingsContainer from './containers/BowDrawingsContainer';
import BowPhotosContainer from './containers/BowPhotosContainer';

function App() {
  return (
    <div className='App'>
        <Router>
          <Head />
          <Routes>
            {/* make a '/' path for homepage with link to makers? */}
            <Route path='/makers' element={<BowmakersContainer />} />
            <Route path='/makers/:id' element={<ShowBowmaker />} />
            <Route exact path='/makers/:id/bow_drawings' element={<BowDrawingsContainer />} />
            <Route exact path='/makers/:id/bow_photos' element={<BowPhotosContainer />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;


// https://drive.google.com/uc?export=view&id=   THIS IS THE URL TO USE, NEED TO ADD ID OF PHOTO AT END

// THIS IS AN IMAGE TAG FOR A BOW DRAWING
/* <img src='https://drive.google.com/uc?export=view&id=1B9hyRJsbBiMuknzhCVtoniczGpBRNn8s' alt='Bow Drawing' className="bow-drawing" /> */


// THIS IS A LINK TO MY WEBSITE
/* <a
  className="drehmann-bows-link"
  href="https://www.markdrehmannbows.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  Mark Drehmann - Bowmaker
</a> */