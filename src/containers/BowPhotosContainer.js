import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getPhotos } from '../actions/actions';
import { connect } from 'react-redux';
import BowPhoto from '../components/bowPhotos/BowPhoto';
import BowmakerHeader from '../components/bowmakers/BowmakerHeader';
import NavBar from '../components/NavBar';

function BowPhotosContainer(props) {
  const location = useLocation();
  const bowmaker = location.state.bowmaker
  
  useEffect(() => {
    props.getPhotos(bowmaker.id)
  }, [])

  const renderPhotos = () => {
    return props.photos.map(photo => <BowPhoto photo={photo} key={photo.id} />)
  }

  return (
    <>
      <BowmakerHeader bowmaker={bowmaker} />
      <NavBar bowmaker={bowmaker} />
      {renderPhotos()}
    </>
  )
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, {getPhotos})(BowPhotosContainer)