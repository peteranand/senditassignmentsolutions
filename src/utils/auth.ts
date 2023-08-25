import {getUserCreds} from '@utils/env';
import {addToSessionStorage, getFromSessionStorage} from '@utils/storage';

const authKey = 'authUser';
export function TEMPAuthentication(args: Record<string, string>) {
  const {username, password} = getUserCreds();
  if (username === args.username && password === args.password) {
    addToSessionStorage(authKey, args.username);
    return {success: true};
  }
  return {success: false};
}

export function TEMPIsAuthenticated(): boolean {
  const {username} = getUserCreds();
  const authUser = getFromSessionStorage(authKey);
  if (authUser === username) return true;
  return false;
}
