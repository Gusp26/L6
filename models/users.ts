import * as db from '../helpers/database';

export const findByUsername = async (username) => {
  const query = 'SELECT * from users where username = ?';
  const user = await db.run_query(query, [username]);
  return user;
}

//https://www.passportjs.org/packages/passport-jwt/
//https://www.passportjs.org/packages/passport-http/