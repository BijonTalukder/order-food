import NavBar from '../share/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../share/Banner/Banner';
import BookCart from '../share/BookCart/BookCart';
import FormTest from '../component/FormTest/Formtest'
const Main = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <BookCart/>
            <Outlet/>
            <FormTest/>
            
        </div>
    );
};

export default Main;