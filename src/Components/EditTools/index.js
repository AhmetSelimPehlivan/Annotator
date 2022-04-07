import Tool from '../Tool';
import ScEditTools from './ScEditTools';
import { TOOL_ICONS } from '../../Constants';
import RenderToolIcon from '../../Assets/render.png'; // TOOL_ICONS file'i kullanilacak
import SelectToolIcon from '../../Assets/select.png';
import VideoCutToolIcon from '../../Assets/video-cut.png';
import AudioAddToolIcon from '../../Assets/audio-add.png';
const EditTools = () => {

    return (
        <ScEditTools>
            <ul className="tools">
                <Tool icon={RenderToolIcon}/>
                <Tool icon={SelectToolIcon}/>
                <Tool icon={VideoCutToolIcon}/>
                <Tool icon={AudioAddToolIcon}/>
            </ul>
        </ScEditTools>
    );
}
export default EditTools;