import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchUsers } from './../../Components/Admin/Users/SearchUers';
import { Header } from '../../Components/Navigation/Header';



export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    return(
        <div>
            <Header></Header>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
            <Link to="/login"> Login </Link>
            <br/>
            <Link to="/register"> Register </Link>
            
        </div>
    );
}
