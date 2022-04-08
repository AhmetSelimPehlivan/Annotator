import ScAudio from './ScAudio';
import {string, prototype} from 'prop-types';
const Audio = (props) => {
const {name,url} = props;
    return (
        <ScAudio>
          <figure>
              <figcaption>{name}</figcaption>
              <audio
                  controls
                  src={url}>
                      Your browser does not support the
                      <code>audio</code> element.
              </audio>
          </figure>
        </ScAudio>
    );
}
Audio.propTypes = {
  name: string,
  url: prototype
};

Audio.defaultProps = {
  name: "null",
  url: null
};
export default Audio;