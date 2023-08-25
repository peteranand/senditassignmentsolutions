export function getUserCreds() {
  return {
    username: import.meta.env.VITE_TEMP_USERNAME,
    password: import.meta.env.VITE_TEMP_PASSWORD,
  };
}
