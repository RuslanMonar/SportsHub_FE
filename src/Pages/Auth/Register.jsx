import { RegisterForm } from '../../Components/Auth/RegisterForm';
import '../../css/AuthForm.css'


export const RegisterPage = () => {
        return (
            <div className='form-container'>
                <div className='form-content-left'>
                    <div className='form-img'></div>
                </div>
                <RegisterForm />
            </div>
        );
}