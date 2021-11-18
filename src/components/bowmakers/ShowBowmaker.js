import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import BowmakerHeader from './BowmakerHeader';
import NavBar from '../NavBar';

function ShowBowmaker() {
    const location = useLocation();
    const bowmaker = location.state.bowmaker
    // console.log('showbowmaker', bowmaker)
    return (
      <>
        <BowmakerHeader bowmaker={bowmaker} />
        <NavBar bowmaker={bowmaker} />
        <p className='bowmaker-bio' >{bowmaker.biography}</p>
      </>
    )
  }

export default ShowBowmaker