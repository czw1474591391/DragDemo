import { useNavigate } from 'react-router-dom';
import './index.scss';

const StartPage = () => {
    const history = useNavigate();
    const toMain = () => {
        history('/main')
        //react-router6新特性
    }
    return <div className="startContent" onClick={toMain}>Start App</div>
}
export default StartPage;