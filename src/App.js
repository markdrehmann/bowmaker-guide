import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <h1>
        The Bowmaker's Guide
      </h1>
      <p>Home Page is a welcome with list of makers beneath. Click on Maker, brings you to maker/:id show page, links within for maker/:id/drawings and maker/:id/photos</p>
      <a
        className="drehmann-bows-link"
        href="https://www.markdrehmannbows.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mark Drehmann - Bowmaker
      </a>
      <img src='https://drive.google.com/uc?export=view&id=1B9hyRJsbBiMuknzhCVtoniczGpBRNn8s' alt='Bow Drawing' className="bow-drawing" />
    </div>
  );
}


export default App;

// https://drive.google.com/uc?export=view&id=   THIS IS THE URL TO USE, NEED TO ADD ID OF PHOTO AT END