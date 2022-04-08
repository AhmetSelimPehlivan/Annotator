import ScVideo from './ScVideo';
import {string, propTypes} from 'prop-types';
const Video = (props) => {
const {name,url} = props;
    return (
        <ScVideo>
            <h5>{name}</h5>
            <input type="image" className="tumb-video" src={url} alt={name}/>
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