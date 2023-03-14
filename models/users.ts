import * as db from '../helpers/database';

export const findByUsername = async (username:string) => {
  const query = 'SELECT * from users where username = ?';
  let user_array = [username];
  const user = await db.run_query(query, user_array);
  return user;
}

//https://www.passportjs.org/packages/passport-jwt/
//https://www.passportjs.org/packages/passport-http/