import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  }

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
