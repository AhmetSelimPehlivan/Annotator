import ScAudioList from './ScAudioList';
import Audio from '../Audio';
const AudioList = () => {
    return (
        <ScAudioList>
            <h5 className="audio-list-header">AudioList</h5>
            <ul className="audio-list">
                <Audio name="audio1"/>
            </ul>
        </ScAudioList>
    );
}
export default AudioList;