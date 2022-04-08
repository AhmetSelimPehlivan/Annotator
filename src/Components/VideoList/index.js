import ScVideoList from './ScVideoList';
import Video from '../Video';
import { VIDEO_LINKS } from '../../Constants/videos';
import {func} from 'prop-types';
const VideoList = ({onClick}) => {
    return (
        <ScVideoList>
            <h5 className="video-list-header">VideoList</h5>
            <ul className="video-list">
               {VIDEO_LINKS.map(item =><Video onClick={onClick} name={item.Name} url={item.Url}/> )}
            </ul>
        </ScVideoList>
    );
    //
}
export default VideoList;

VideoList.propTypes = {
  onClick: func,
};

VideoList.defaultProps = {
  onClick: f => f,
};