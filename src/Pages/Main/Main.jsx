
import { useSelector } from 'react-redux';


export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    return(
        <div>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
        </div>
    );
}