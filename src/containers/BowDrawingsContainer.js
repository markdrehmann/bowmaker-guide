import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getDrawings } from '../actions/actions';
import { connect } from 'react-redux';
import BowDrawing from '../components/bowDrawings/BowDrawing';
import BowmakerHeader from '../components/bowmakers/BowmakerHeader';
import NavBar from '../components/NavBar';

function BowDrawingsContainer(props) {
  const location = useLocation();
  const bowmaker = location.state.bowmaker

  useEffect(() => {
    props.getDrawings(bowmaker.id)
  }, [])

  const renderDrawings = () => {
    return props.drawings.map(drawing => <BowDrawing drawing={drawing} key={drawing.id} />)
  }

  return (
    <>
      <BowmakerHeader bowmaker={bowmaker} />
      <NavBar bowmaker={bowmaker} />
      {renderDrawings()}
    </>
  )
}

const mapStateToProps = state => {
  return {
    drawings: state.drawings
  }
}

export default connect(mapStateToProps, {getDrawings})(BowDrawingsContainer)