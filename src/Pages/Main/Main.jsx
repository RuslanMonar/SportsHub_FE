

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { SearchUsers } from './../../Components/Admin/Users/SearchUers';
import { Delete } from './../../Components/Admin/Users/DeleteUser';


>>>>>>> Added styles for confirm alert to delete button

export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    return(
        <div>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
            <Link to="/login"> Login </Link>
            <br/>
            <Link to="/register"> Register </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <SearchUsers/>
=======
>>>>>>> Added alert window to list of users
            <Delete/>
>>>>>>> Added styles for confirm alert to delete button
        </div>
    );
}
