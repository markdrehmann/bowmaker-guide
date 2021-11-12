import { useLocation } from 'react-router-dom';

function BowDrawingsContainer() {
  const location = useLocation();
  const bowmaker = location.state.bowmaker
  console.log('drawings container', bowmaker)
  return (
    <h2>
      This is the bow drawings container?
    </h2>
  )
}

export default BowDrawingsContainer