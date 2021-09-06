
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SimpleTooltips } from './../../Components/Admin/Menu';




export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    return(
        <div>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
            <Link to="/login"> Login </Link>
            <br/>
            <Link to="/register"> Register </Link>
            <SimpleTooltips/>
        </div>
    );
}
