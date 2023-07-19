import {addToSessionStorage, getFromSessionStorage} from './storage';

const authKey = 'authUser';
const USERNAME = 'anandpp',
  PASSWORD = 'ppanand';
export function TEMPAuthentication({
  username,
  password,
}: Record<string, string>) {
  if (USERNAME === username && PASSWORD === password) {
    addToSessionStorage(authKey, username);
    return {success: true};
  }
  return {success: false};
}

export function TEMPIsAuthenticated(): boolean {
  const authUser = getFromSessionStorage(authKey);
  if (authUser === USERNAME) return true;
  return false;
}
