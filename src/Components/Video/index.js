import ScVideo from './ScVideo';
import {string, func} from 'prop-types';
import {useCallback} from 'react';
const Video = (props) => {
const {name,url,onClick} = props;
  
const handleSelectedVideo = useCallback(url => {
  onClick(url);
}, []);
  
    return (
        <ScVideo>
            <h5>{name}</h5>
            <input onClick={handleSelectedVideo} type="image" className="tumb-video" src={url} alt={name}/>
        </ScVideo>
    );
}
Video.propTypes = {
  name: string,
  url: string,
  onClick: func
};

Video.defaultProps = {
  name: "",
  url: "",
  onClick: f => f
};
export default Video;