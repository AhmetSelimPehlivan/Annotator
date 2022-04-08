import Navbar from '../../Components/Navbar';
import EditTools from '../../Components/EditTools';
import AudioList from '../../Components/AudioList';
import VideoList from '../../Components/VideoList';
import ScWelcomePage from './ScWelcomePage';
import {useMemo} from 'react';
const WelcomePage = () => {

var shownVideo;
const getClickedVideo = useMemo((selectedVideo) => {
    shownVideo = selectedVideo;
}, []);

    return (
        <>
        <Navbar/>
        <ScWelcomePage>
            <iframe className="firstEdit" src="https://www.youtube.com/embed/0FvIa4iP3_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <EditTools/>
            <VideoList onClick={getClickedVideo}/>
            <AudioList/>
        </ScWelcomePage>
        </>
    );
}
export default WelcomePage;