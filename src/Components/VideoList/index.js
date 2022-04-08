import ScVideoList from './ScVideoList';
import Video from '../Video';
const VideoList = () => {
    return (
        <ScVideoList>
            <h5 className="video-list-header">VideoList</h5>
            <ul className="video-list">
                <Video name="video1"/>
            </ul>
        </ScVideoList>
    );
}
export default VideoList;