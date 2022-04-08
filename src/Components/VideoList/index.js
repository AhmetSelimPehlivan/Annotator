import ScVideoList from './ScVideoList';
import Video from '../Video';
import { VIDEO_LINKS } from '../../Constants/videos';
const VideoList = () => {
    return (
        <ScVideoList>
            <h5 className="video-list-header">VideoList</h5>
            <ul className="video-list">
               {VIDEO_LINKS.map(item =><Video name={item.Name} url={item.Url}/> )}
            </ul>
        </ScVideoList>
    );
    //
}
export default VideoList;