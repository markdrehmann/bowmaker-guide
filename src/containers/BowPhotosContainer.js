import { useLocation } from 'react-router-dom';
import BowmakerHeader from '../components/bowmakers/BowmakerHeader';
import NavBar from '../components/NavBar';

function BowPhotosContainer() {
  const location = useLocation();
  const bowmaker = location.state.bowmaker
  // console.log('photos container', bowmaker)
  return (
    <>
      <BowmakerHeader bowmaker={bowmaker} />
      <NavBar bowmaker={bowmaker} />
      <h2>
        This is the bow Photos container?
      </h2>
    </>
  )
}

export default BowPhotosContainer