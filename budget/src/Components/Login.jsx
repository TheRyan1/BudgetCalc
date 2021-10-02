function checkUser(){

    console.log(fetch('http://localhost:5000/login'))


}

const Login = ()=>{



    return (
        <>
        <h5>UserName</h5>
        <input type="text" />
        <h5>Password</h5>
        <input type="password" />
        <button onClick={checkUser}>Click to Login</button>
        </>
    );
}
export default Login;