
const API_BASE_URL = process.env.REACT_APP_API_URL; // Use the environment variable

function connect(...paths) {
  return `${API_BASE_URL}/${paths.join('/')}`;
}

export const SERVER_PATHS = {
  CLIENTS: `${process.env.REACT_APP_API_URL}/clients`,
  // other paths...
};