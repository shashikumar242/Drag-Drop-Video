import Video from "./Video";

export default function DropArea({
  divRef,
  dragging,
  area,
  videoRef,
  videoToPlay,
  areaIndex,
  dragOverHandler,
  dropHandler,
  touchEndHandler,
  touchStartHandler,
  dragStartHandler,
}) {
  return (
    <div
      className={`group div-zone-${areaIndex}`}
      ref={divRef}
      key={area.title}
      onDragOver={(event) => dragOverHandler(event)}
      onDrop={(event) => dropHandler(event, areaIndex)}
      onTouchEnd={(event) => touchEndHandler(event, areaIndex)}
    >
      <p className="title" style={{ color: "black" }}>
        {area.title}
      </p>
      <Video
        videoInfo={{ area, videoRef, areaIndex, videoToPlay }}
        handlers={{ touchStartHandler, dragStartHandler }}
      />
    </div>
  );
}
