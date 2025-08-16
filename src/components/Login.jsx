import react, { useId } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function Login() {
    const id = useId();
    const navigate = useNavigate();
    const { login } = useOutletContext();

    function handleSubmit(e) {
        e.preventDefault();
        login();
        navigate("/admin");
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor={id}>Name:</label>
                <input type="text" id={id} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
