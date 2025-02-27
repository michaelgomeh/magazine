import React, {useRef} from "react";

interface VideoPlayerProps {
    videoId: string; // YouTube video ID
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const {videoId} = props;
    return (
            <video
                autoPlay={true}
                ref={videoRef}
                src={videoId}
                muted
                loop
            />
    );
};

export default VideoPlayer;