import ScTool from './ScTool';
import {string, prototype} from 'prop-types';
const Tool = (props) => {
const {name, icon} = props;
    return (
        <ScTool>
            <input type="image" className="tool-button" src={icon} alt={name}/>
            <p className="tool-name">{name}</p>
        </ScTool>
    );
}
Tool.propTypes = {
  name: string,
  icon: prototype
};

Tool.defaultProps = {
  name: "",
  icon: null
};
export default Tool;