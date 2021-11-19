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

// <img src='https://lh3.googleusercontent.com/Tqf-koPPDGUqeqoN7TCLZB-bXvJB1hBaE-yzodK7ehvOFAQTby2POkQeZR36jzGf6y7aETyGLmiRoF08iAPTFi8zHgbkjAmFMYxNo2XAdEJtWvlWSYjJKlFTjomP1x7CD80OLo4Y7rE=w2400' alt='Bow Drawing' className="bow-drawing" />