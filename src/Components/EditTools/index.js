import Tool from '../Tool';
import ScEditTools from './ScEditTools';
import { TOOL_ICONS } from '../../Constants';
const EditTools = () => {
    return (
        <ScEditTools>
            <ul className="tools">
                {TOOL_ICONS.map(item => <Tool name={item.Name} icon={item.Icon}/>)}

            </ul>
        </ScEditTools>
    );
}
export default EditTools;