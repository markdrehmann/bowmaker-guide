import { useLocation } from 'react-router-dom';

function ShowBowmaker() {
    const location = useLocation();
    const bowmaker = location.state.bowmaker
    console.log('showbowmaker', bowmaker)
    return (
      <>
        <h2>{bowmaker.first_name} {bowmaker.last_name}</h2>
        <p>{bowmaker.birth_year} - {bowmaker.year_of_death}</p>
        
      </>
    )
  }

export default ShowBowmaker