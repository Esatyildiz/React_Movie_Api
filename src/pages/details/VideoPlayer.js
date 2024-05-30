import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import '../../movie-video.css';
const VideoPlayer = ({ video }) => {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={videoOpen} videoId={video} onClose={() => setVideoOpen(false)} />
            <button
                onClick={() => setVideoOpen(true)}
                type='button'
                className='flex items-center gap-3'
            >
                <img src='/img/icons/play.svg' className='w-20 h-20 object-contain' width={80} height={80} alt="video" />
                <span className='text-xl font-medium text-white'>Fragmanı İzle</span>
            </button>
        </React.Fragment>
    )
}

export default VideoPlayer
