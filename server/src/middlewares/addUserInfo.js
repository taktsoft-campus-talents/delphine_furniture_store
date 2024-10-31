/**
 * Express middleware to add user info to the request object.
 */
export async function addUserInfo(req, _, next) {
  const { payload, token } = req.auth;
  const userInfoUrl = payload.aud[1];
  const userInfo = await fetch(userInfoUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  req.userInfo = await userInfo.json();
  next();
}
