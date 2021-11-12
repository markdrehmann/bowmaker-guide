import { useLocation } from 'react-router-dom';

function BowPhotosContainer() {
  const location = useLocation();
  const bowmaker = location.state.bowmaker
  console.log('photos container', bowmaker)
  return (
    <h2>
      This is the bow Photos container?
    </h2>
  )
}

export default BowPhotosContainer