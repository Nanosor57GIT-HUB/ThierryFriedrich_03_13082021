import React, { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

const LoopingAudio = ({ src }) => {

  const audioRef = useRef(null);

  return (
    <ReactAudioPlayer
      ref={audioRef}
      src={src}
      autoPlay
      loop
      volume={0.2}
      controls={true}
      // style={{ display: "none" }}
      style= {{ marginTop: 200, position: "fixed" }}
    />
  );
};

export default LoopingAudio;
