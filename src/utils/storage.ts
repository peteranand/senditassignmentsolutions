export function addToSessionStorage(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}

export function getFromSessionStorage(key: string) {
  return sessionStorage.getItem(key);
}
