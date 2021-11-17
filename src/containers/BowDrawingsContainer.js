import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getDrawings } from '../actions/actions';
import { connect } from 'react-redux';

function BowDrawingsContainer(props) {
  const location = useLocation();
  const bowmaker = location.state.bowmaker

  useEffect(() => {
    props.getDrawings(bowmaker.id)
    console.log('using effect', props)
  }, [])

  return (
    <h2>
      This is the bow drawings container?
    </h2>
  )
}

export default connect(null, {getDrawings})(BowDrawingsContainer)