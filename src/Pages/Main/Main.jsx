import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchUsers } from './../../Components/Admin/Users/SearchUers';
import { Header } from '../../Components/Navigation/Header';



export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    var view = useSelector(state => state.SwitchViewReducer)
    return(
        <div>
            <Header></Header>
            <br/><br/><br/><br/>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
            <h2>View: {JSON.stringify(view)}</h2>
        </div>
    );
}
