export function addToSessionStorage(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}

export function getFromSessionStorage(key: string) {
  return sessionStorage.getItem(key);
}

export function addToLocalStorage(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function getFromLocalStorage(key: string) {
  return localStorage.getItem(key);
}
