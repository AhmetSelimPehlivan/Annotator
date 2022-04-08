import ScVideo from './ScVideo';
import {string, prototype} from 'prop-types';
const Video = (props) => {
const {name,video} = props;
    return (
        <ScVideo>
            {name}
        </ScVideo>
    );
}
Video.propTypes = {
  name: string,
  video: prototype
};

Video.defaultProps = {
  name: "null",
  video: null
};
export default Video;