import './photo-element.css';

function PhotoElement(props) {

  return (
    <div className="photo">
    <img className="photo__element" src={props.src} alt={props.src} onClick={()=>props.getModal(props.src) }/>
    <button className="photo__element__close" onClick={(()=>props.deletPhoto(props.src))}>
      <svg
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 357 357"
        fill="#c00"
      >
        <g>
          <g>
            <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3	214.2,178.5 		" />
          </g>
        </g>
      </svg>
    </button>
    </div>
  );
}

export default PhotoElement;
