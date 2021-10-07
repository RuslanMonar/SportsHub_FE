
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchUsers } from './../../Components/Admin/Users/SearchUers';
import { Header } from '../../Components/Navigation/Header';
import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";
import { UserInfo } from "./../../Components/Admin/Users/UserInfo";
import { UsersList } from "./../../Components/Admin/Users/UsersList";



export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    var view = useSelector(state => state.SwitchViewReducer)
    return(
        <div>
            <Header></Header>
            {view.hasView == "Admin" ?
                <div>
                <TopMenu />
                <div className="flex central-content">
                    <LeftMenu />
                    <div className="admin-central-content">
                        <UsersList />
                        <UserInfo />
                    </div>
                </div>
            </div>
            : null}
        </div>
    );
}
