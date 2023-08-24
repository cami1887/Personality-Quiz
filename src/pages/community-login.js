import { Outlet } from 'react-router-dom';

export default function Login() {
    return (
    <main>  
        <h1>Community Forum Login</h1>
        <form>
            <label>Username
                <input type="text" name="name" id="name" required />
            </label>
            <label>Password
               <input type="password" name="password" id="password" required /> 
            </label>
            {/* <Link to=""> */}
                <button onClick={saveCredentials}>Login</button>
            {/* </Link> */}
            
        </form>
        <Outlet />
    </main>
    )
} 

let username = '';
let password = '';

function saveCredentials() {
    username = document.querySelector('#name').value;
    password = document.querySelector('#password').value;
    console.log(username, password)
}