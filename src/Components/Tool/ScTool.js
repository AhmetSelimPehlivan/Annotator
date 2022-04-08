import Styled from "styled-components";
const ScTool = Styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .tool-button{
        width: 40px;
        height: 40px;
        margin: 10px;
        border-radius: 5px;

        &:hover{
            background-color: lightgray;
        }
    }
    .tool-name{
        text-align: center;
    }
`;
export default ScTool;