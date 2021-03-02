import "./WrapperForPhotos.css";
import PhotoElement from "../photo-element/photo-element";



function WrapperForPhotos(props) {

  return (
      <div className="wrapper__for__photos">
        {props.photo.map((image) => (
          <PhotoElement src={image} key={image} getModal={props.getModal} deletPhoto={props.deletPhoto} />
        ))}
      </div>
  );
}

export default WrapperForPhotos;
