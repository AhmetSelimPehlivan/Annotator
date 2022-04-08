import ScAudio from './ScAudio';
import {string, prototype} from 'prop-types';
const Audio = (props) => {
const {name,audio} = props;
    return (
        <ScAudio>
            {name}
        </ScAudio>
    );
}
Audio.propTypes = {
  name: string,
  audio: prototype
};

Audio.defaultProps = {
  name: "null",
  audio: null
};
export default Audio;