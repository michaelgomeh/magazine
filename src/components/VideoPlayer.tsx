import React, {useRef} from "react";

interface VideoPlayerProps {
    videoId: string; // YouTube video ID
}


const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
/*
    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to start
        }
    };  */
    const {videoId} = props;
    return (
        <div
       /*     onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}*/

        >
            <video
                autoPlay={true}
                ref={videoRef}
                src={videoId}
                muted
                loop
            />
        </div>
    );
};

export default VideoPlayer;