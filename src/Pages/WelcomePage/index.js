import Navbar from '../../Components/Navbar';
import EditTools from '../../Components/EditTools';
import ScWelcomePage from './ScWelcomePage';
const WelcomePage = () => {
    return (
        <>
        <Navbar/>
        <ScWelcomePage>
            <iframe className="firstEdit" src="https://www.youtube.com/embed/0FvIa4iP3_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <EditTools/>
        </ScWelcomePage>
        </>
    );
}
export default WelcomePage;