import ScTool from './ScTool';
import {prototype} from 'prop-types';
const Tool = (props) => {
const {icon} = props;
console.log(icon);
    return (
        <ScTool>
            <input type="image" className="tool-button" src={icon} alt="tool"/>
        </ScTool>
    );
}
Tool.propTypes = {
  icon: prototype
};

Tool.defaultProps = {
  icon: null
};
export default Tool;