import { useAuth0 } from "@auth0/auth0-react";

export default function Products() {
  const { getAccessTokenSilently } = useAuth0();

  async function handleButtonClick() {
    const accessToken = await getAccessTokenSilently();
    console.debug(accessToken);
    const response = await fetch("http://localhost:3000", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.debug(response);
  }

  return <button onClick={handleButtonClick}>test fetch request</button>;
}
