import React, { useState, useRef } from "react";
import DropArea from "./DropArea";

const Drag = ({ areas, videoToPlay }) => {
  const [areasList, setAreasList] = useState(areas);
  const [dragging, setDragging] = useState(false);
  const [domElement, setDomElement] = useState(0);
  const videoRef = useRef();

  const dragStartHandler = () => {
    console.log("handleDragStart");
    videoRef.current.pause();
    setDragging(true);
  };



  const touchStartHandler = (event) => {
    console.log("touchStartHandler");
    setDragging(true);
    var element = document.elementFromPoint(
      event.changedTouches[0].clientX,
      event.changedTouches[0].clientY
    );
    setDomElement(element);
  };



  const dragOverHandler = (event) => {
    event.preventDefault();
    console.log("handleDragOver");
  };



  const dropHandler = (event, areaIndex) => {
    // let d = e.dataTransfer.getData('text');
    // console.log('handleDrop data ', d)
    // console.log('divRef' , divRef,videoRef)

    let modifiedAreaList = areasList;
    modifiedAreaList.forEach(
      (item, index) => (modifiedAreaList[index].video = false)
    );
    modifiedAreaList[areaIndex].video = true;

    console.log("handleDrop areaIndex", areaIndex);

    setAreasList([...modifiedAreaList]);
    setDragging(false);
  };

  

  const touchEndHandler = (event, areaIndex) => {
    console.log("handleTouchEnd areaIndex", areaIndex);

    var element = document.elementFromPoint(
      event.changedTouches[0].clientX,
      event.changedTouches[0].clientY
    );
    let modifiedAreaList = [...areasList];

    if (!element.contains(videoRef.current) && domElement !== element) {
      element.appendChild(videoRef.current);
      //   modifiedAreaList.forEach((item, index) => modifiedAreaList[index].video = false);
      //   modifiedAreaList[areaIndex].video = true;

      //    console.log('modifiedAreaList',modifiedAreaList,areaIndex)
    }
    //setAreasList(modifiedAreaList)
    setDragging(false);
  };

  return (
    <div className="groups-container">
      {areasList.map((area, areaIndex) => (
        <DropArea
          key={areaIndex}
          area={area}
          areaIndex={areaIndex}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          touchEndHandler={touchEndHandler}
          dragStartHandler={dragStartHandler}
          videoToPlay={videoToPlay}
          videoRef={videoRef}
          touchStartHandler={touchStartHandler}
          dragging={dragging}
        />
      ))}
    </div>
  );
};

export default Drag;
