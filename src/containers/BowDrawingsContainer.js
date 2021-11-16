import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function BowDrawingsContainer() {
  const location = useLocation();
  const bowmaker = location.state.bowmaker
  
  useEffect(() => {
    console.log('using effect')
  })

  return (
    <h2>
      This is the bow drawings container?
    </h2>
  )
}

export default BowDrawingsContainer