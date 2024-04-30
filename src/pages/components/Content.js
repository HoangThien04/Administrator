import ManageDevice from './Contents/ManageDevices/ManageDevice'
import ManageMedicine from './Contents/ManageMedicines/ManageMedicine'
import ManageDoctors from './Contents/ManageDoctors/ManageDoctors';
import './Content.css';

const Content = ({show, show_content}) => {
    return (
        <div className={show? "content-tabs active" : "content-tabs"}>
            <div className={show_content === 1? "content active" : "content"}>
                <ManageDoctors />
            </div>
            <div className={show_content === 2? "content active" : "content"}>
                <ManageDevice />
            </div>
            <div className={show_content === 3? "content active" : "content"}>
                <ManageMedicine />
            </div>
        </div>
    )
}

export default Content;
