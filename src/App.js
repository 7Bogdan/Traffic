import "./App.css";
import WrapperForPhotos from "./WrapperForPhotos/WrapperForPhotos";
import Info from "./info/info";
import Modal from "./modal/modal";
import { useState, useEffect } from "react";
let photo = require("./photo.json");

function App() {
  let [srcPhoto, setSrcPhoto] = useState("");
  let [modalActive, setModalActive] = useState(false);
  let [photos, setPhotos] = useState([]);
  let storage = JSON.parse(localStorage.getItem("traffic"));
  let initilStorage = JSON.parse(localStorage.getItem("Initialtraffic"));

  let getModal = (src) => {
    setSrcPhoto(src);
    setModalActive(!modalActive);
  };

  let deletPhoto = (props) => {
    let temp = storage.filter((word) => word !== props);
    setPhotos(temp);
    localStorage.setItem("traffic", JSON.stringify(temp));
  };

  let restore = () => {
    setPhotos(initilStorage)
    localStorage.setItem("traffic", JSON.stringify(initilStorage));
  };

  useEffect(() => {
    if (storage) {
      setPhotos(storage);
    } else {
      localStorage.setItem("traffic", JSON.stringify([...photo.items]));
      localStorage.setItem("Initialtraffic", JSON.stringify([...photo.items]));
      setPhotos(photo.items);
    }
  }, [])

  return (
    <div>
      <Info photos={photos} initilStorage={initilStorage} restore={restore}/>
      <WrapperForPhotos
        photo={photos}
        setSrcPhoto={setSrcPhoto}
        deletPhoto={deletPhoto}
        getModal={getModal}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        srcPhoto={srcPhoto}
      />
    </div>
  );
}

export default App;
