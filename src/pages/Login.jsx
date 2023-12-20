import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  
  return (
    isAuthenticated ? (
      <div>       
        <h1>Profile</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() => logout()}>Log Out</button>
        <pre>
          {/* "user" obtiene los datos del usuario que inicio sesion en auth0 y los muestra en la pagina de perfil, solo se muestra si el usuario esta logueado en la pagina de perfil, si no esta logueado no se muestra nada*/}
          {JSON.stringify(user)}
        </pre>
      </div>
    ) : (<button onClick={() => loginWithRedirect()}>Log In</button>)
    );
}

export default Login;
