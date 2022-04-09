import ScVideoPlayer from './ScVideoPlayer';
import {string} from 'prop-types';
const VideoPlayer = (props) => {
const {url} = props;
    return (
        <ScVideoPlayer>
          <iframe className="firstEdit" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ScVideoPlayer>
    );
}
VideoPlayer.propTypes = {
  url: string
};

VideoPlayer.defaultProps = {
  url: ""
};
export default VideoPlayer;