import ScAudioList from './ScAudioList';
import Audio from '../Audio';
import { AUDIO_LINKS } from '../../Constants/audios';
const AudioList = () => {
    return (
        <ScAudioList>
            <h5 className="audio-list-header">AudioList</h5>
            <ul className="audio-list">
               {AUDIO_LINKS.map(item =><Audio name={item.Name} url={item.Url}/> )}
            </ul>
        </ScAudioList>
    );
}
export default AudioList;