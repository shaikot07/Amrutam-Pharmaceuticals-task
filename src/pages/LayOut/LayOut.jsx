
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/NvaBar/Navbar';

const LayOut = () => {
    return (
        <div>
               <div className=''>
                <Navbar></Navbar>
                </div>
               <Outlet></Outlet>
        </div>
    );
};

export default LayOut;