import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Head from './components/Head';
import BowmakersContainer from './containers/BowmakersContainer';
import ShowBowmaker from './components/bowmakers/ShowBowmaker';
import BowDrawingsContainer from './containers/BowDrawingsContainer';
import BowPhotosContainer from './containers/BowPhotosContainer';
import NewBowmaker from './components/bowmakers/NewBowmaker';
import NewDrawing from './components/bowDrawings/NewDrawing';

function App(props) {
  const handleLoading = () => {
    if (props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
  }

  return (
    <div className='App'>
        <Router>
          <Head />
          {handleLoading()}
          <Routes>
            {/* make a '/' path for homepage with link to makers? */}
            <Route path='/makers' element={<BowmakersContainer />} />
            <Route path='/makers/:id' element={<ShowBowmaker />} />
            <Route exact path='/makers/:id/bow_drawings' element={<BowDrawingsContainer />} />
            <Route exact path='/makers/:id/bow_photos' element={<BowPhotosContainer />} />
            <Route exact path='/makers/new/hidden_admin' element={<NewBowmaker />} />
            <Route exact path='/drawings/new/hidden_admin' element={<NewDrawing />} />
            {/* <Route exact path='/photos/new/hidden_admin' element={<NewPhoto />} /> */}
          </Routes>
        </Router>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);

// <img src='https://lh3.googleusercontent.com/Tqf-koPPDGUqeqoN7TCLZB-bXvJB1hBaE-yzodK7ehvOFAQTby2POkQeZR36jzGf6y7aETyGLmiRoF08iAPTFi8zHgbkjAmFMYxNo2XAdEJtWvlWSYjJKlFTjomP1x7CD80OLo4Y7rE=w2400' alt='Bow Drawing' className="bow-drawing" />