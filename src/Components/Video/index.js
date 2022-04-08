import ScVideo from './ScVideo';
import {string, propTypes} from 'prop-types';
const Video = (props) => {
const {name,url} = props;
    return (
        <ScVideo>
            <h5>{name}</h5>
            <iframe src={url}></iframe>
        </ScVideo>
    );
}
Video.propTypes = {
  name: string,
  url: string
};

Video.defaultProps = {
  name: "",
  url: ""
};
export default Video;