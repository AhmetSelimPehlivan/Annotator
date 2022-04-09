import Navbar from '../../Components/Navbar';
import EditTools from '../../Components/EditTools';
import AudioList from '../../Components/AudioList';
import VideoList from '../../Components/VideoList';
import VideoPlayer from '../../Components/VideoPlayer';
import ScWelcomePage from './ScWelcomePage';
import { VIDEO_LINKS } from '../../Constants/videos';
import { useState } from 'react';

const WelcomePage = () => {
const [shownVideo, setshownVideo] = useState(VIDEO_LINKS[0].Url)
const getClickedVideo = (selectedVideoID) => { setshownVideo(VIDEO_LINKS[selectedVideoID].Url) };
    return (
        <>
        <Navbar/>
        <ScWelcomePage>
            <VideoPlayer url={shownVideo}/>
            <EditTools/>
            <VideoList onClick={getClickedVideo}/>
            <AudioList/>
        </ScWelcomePage>
        </>
    );
}
export default WelcomePage;