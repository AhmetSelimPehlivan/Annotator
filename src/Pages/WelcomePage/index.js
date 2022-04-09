import Navbar from '../../Components/Navbar';
import EditTools from '../../Components/EditTools';
import AudioList from '../../Components/AudioList';
import VideoList from '../../Components/VideoList';
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
            <iframe className="firstEdit" src={shownVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <EditTools/>
            <VideoList onClick={getClickedVideo}/>
            <AudioList/>
        </ScWelcomePage>
        </>
    );
}
export default WelcomePage;