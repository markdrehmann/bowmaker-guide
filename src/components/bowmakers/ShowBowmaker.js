import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ShowBowmaker() {
    const location = useLocation();
    const bowmaker = location.state.bowmaker
    console.log('showbowmaker', bowmaker)
    return (
      <>
        <h2 className='bowmaker-name' >{bowmaker.first_name} {bowmaker.last_name}</h2>
        <p>{bowmaker.birth_year} - {bowmaker.year_of_death}</p>
        <span>
          <Link to={`/makers/${bowmaker.id}/bow_drawings`} state={{bowmaker: bowmaker}} >
            Bow Drawings
          </Link>---
          <Link to={`/makers/${bowmaker.id}/bow_photos`} state={{bowmaker: bowmaker}} >
            Bow Photos
          </Link>
        </span>
        <p className='bowmaker-bio' >{bowmaker.biography}</p>
      </>
    )
  }

export default ShowBowmaker