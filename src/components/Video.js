export default function Video({ videoInfo, handlers }) {
  return (
    <>
      {videoInfo.area.video ? (
        <div
          className="area video-class"
          draggable
          onDragStart={(event) => handlers.dragStartHandler()}
          onTouchStart={(event) => handlers.touchStartHandler(event)}
        >
          <video
            draggable
            ref={videoInfo.videoRef}
            width="200"
            height="300"
            controls
            muted
            loop
          >
            <source src={videoInfo.videoToPlay} type="video/mp4" />
          </video>
        </div>
      ) : (
        <h1>Empty</h1>
      )}
    </>
  );
}
