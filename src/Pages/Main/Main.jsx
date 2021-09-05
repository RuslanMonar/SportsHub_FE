
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SortUsers } from '../../Components/Admin/Users/SortUsers';
import { SearchUsers } from './../../Components/Admin/Users/SearchUers';



export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    return(
        <div>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
            <Link to="/login"> Login </Link>
            <br/>
            <Link to="/register"> Register </Link>
            <SearchUsers/>
            <SortUsers/>
        </div>
    );
}
