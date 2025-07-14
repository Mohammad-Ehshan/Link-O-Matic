import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';

function RemotionVideo({ script, imageList, audioFileUrl, captions, setDurationInFrame }) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const getDurationFrame = () => {
    const duration = (captions?.[captions.length - 1]?.end / 1000) * fps;
    setDurationInFrame(duration);
    return duration;
  };

  const getCurrentCaptions = () => {
    const currentTime = (frame / 30) * 1000;
    const currentCaption = captions.find(
      (word) => currentTime >= word.start && currentTime <= word.end
    );
    return currentCaption ? currentCaption.text : '';
  };

  return (
    <AbsoluteFill className="bg-black">
      {imageList?.map((item, index) => {
        const startTime = (index * getDurationFrame()) / imageList.length;
        const duration = getDurationFrame();

        const scale = interpolate(
          frame,
          [startTime, startTime + duration / 2, startTime + duration],
          index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <Sequence
            key={index}
            from={startTime}
            durationInFrames={duration}
          >
            <Img
              src={item}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: `scale(${scale})`
              }}
            />
            <AbsoluteFill className="text-white justify-center items-center bottom-10 h-[150px] flex">
              <h2 className="text-2xl text-red-500 font-bold">{getCurrentCaptions()}</h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}
      {audioFileUrl && <Audio src={audioFileUrl} />}
    </AbsoluteFill>
  );
}

export default RemotionVideo;
