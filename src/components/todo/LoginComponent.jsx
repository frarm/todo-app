import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LoginComponent(){

    const [username, setUsername] = useState('frarm');
    const [password, setPassword] = useState('159753');

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const authContext = useAuth();

    const navigate = useNavigate();

    function handleUsernamechange(event){
        setUsername(event.target.value);
    }

    function handlePasswordchange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`);
     
        } else {
            setShowErrorMessage(true);
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernamechange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordchange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent