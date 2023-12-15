import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
function Signup() {

  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }  } = useForm();

  // hook de react-hook-from, maneja el comportamiento por defecto del formulario
  const onSubmit = handleSubmit( async (data) => {

    if(data.password != data.confirmPassword) {
      return alert("Password do not match")
    }
    
    const res = await fetch(`${process.env.BACKEND_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      }),
      headers: {'Content-Type': 'application/json'}
    });

    // const resJSON = await res.json();
    // console.log(resJSON);

    if(res.ok) {
      // Redirect to '/'
      navigate('/home');
    }


  });

  let loginSectionStyle = {
    backgroundColor: "##0A0A0A",
    height: "100vh"
  },
  loginInputStyle = {
    padding: "0.75rem",
    borderRadius: "0.25rem",
    display: "block",
    marginBottom: "0.5rem",
    backgroundColor: "#0F172A",
    color: "#fff",
    width: "100%",
    border: "none"
  },
  loginContainerStyle = {
    height: "calc(100vh - 7rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginFormStyle = {
    width: "25%"
  },
  loginTitleStyle = {
    color: "#fff",
    fontWeight: "700",
    fontSize: "2rem",
    marginBottom: "1rem"
  },
  loginButtonStyle = {
    width: "100%",
    backgroundColor: "#3B82F6",
    color: "#fff",
    padding: "0.75rem",
    border: "none",
    borderRadius: "0.5rem",
    marginTop: "0.5rem"
  },
  loginLabelStyle = {
    // color: "#0A748B",
    color: "#CBD5FF",
    marginBottom: "0.5rem",
    display: "block",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  loginSpanStyle = {
    color: "rgb(239 68 68)",
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }

  return (
    <>
      <section style={loginSectionStyle}>

        <div style={loginContainerStyle}>

          <form onSubmit={onSubmit} style={loginFormStyle}>
          <h1 style={loginTitleStyle}>Register</h1>
            <label htmlFor="username" style={loginLabelStyle}>Username</label>
            <input type="text"{...(register("username", {required: {value: true, message: "Username is required"}}))} style={loginInputStyle} />
            {errors.username && (<span style={loginSpanStyle}>{errors.username.message}</span>)}
            <label htmlFor="email" style={loginLabelStyle}>Email</label>
            <input type="email" {...(register("email", {required: {value: true, message: "Email is required"}}))} style={loginInputStyle} />
            {errors.email && (<span style={loginSpanStyle}>{errors.email.message}</span>)}
            <label htmlFor="current-password" style={loginLabelStyle}>Password</label>
            <input type="current-password" {...(register("password", {required: {value: true, message: "Password is required"}}))} style={loginInputStyle} />
            {errors.password && (<span style={loginSpanStyle}>{errors.password.message}</span>)}
            <label htmlFor="confirmPassword" style={loginLabelStyle}>Confirm Password</label>
            <input type="confirmPassword" {...(register("confirmPassword", {required: {value: true, message: "Please confirm your password"}}))} style={loginInputStyle} />
            {errors.confirmPassword && (<span style={loginSpanStyle}>{errors.confirmPassword.message}</span>)}

            <button style={loginButtonStyle}>Register</button>
          </form>
        </div>

      </section>
    </>
  );
}

export default Signup;