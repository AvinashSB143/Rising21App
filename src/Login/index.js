import "./login.css"

const Login = () => {
    return(
        <div className="Login_container">
            <div className="login_content">
            <div className="login_title">
            Login Page
            </div>
            <div className="login_form">
                
                <label>
                    User Name:
                </label>
                <input type="text" required/>
               
                
                <label>
                    Password:
                </label>
                <input type="password" required/>
               
                
                <button className="login_button">
                    Login
                </button>
               
            </div>
            </div>
        </div>
    )
}

export default Login;