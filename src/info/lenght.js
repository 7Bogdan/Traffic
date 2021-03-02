import "./info.css";

function Current(props) {
  return (
    <h2 className="currently">
      Сurrently showing {props.photos.length} photos in this page{" "}
    </h2>
  );
}

function Initil(props) {
  return (
    <h2 className="initil">
      Currently showing {props.photos.length} of {props.initilStorage.length}{" "}
      photos in this page photos
    </h2>
  );
}
function Lenght(props) {
  return props.photos.length === props.initilStorage.length ? (
    <Current photos={props.photos} />
  ) : (
    <Initil initilStorage={props.initilStorage} photos={props.photos} />
  );
}

export default Lenght;
