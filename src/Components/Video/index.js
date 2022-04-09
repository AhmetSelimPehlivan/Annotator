import ScVideo from './ScVideo';
import {string, func, number} from 'prop-types';
const Video = (props) => {
const {id,name,url,onClick} = props;
    return (
        <ScVideo>
            <h5>{name}</h5>
            <input onClick={() => onClick(id)} type="image" className="tumb-video" src={url} alt={name}/>
        </ScVideo>
    );
}
Video.propTypes = {
  id: number,
  name: string,
  url: string,
  onClick: func
};

Video.defaultProps = {
  id: 0,
  name: "",
  url: "",
  onClick: f => f
};
export default Video;