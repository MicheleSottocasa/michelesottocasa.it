const API_URL = process.env.NEXT_PUBLIC_API_URL;
export enum authPaths {
  LOGIN = `${API_URL}/login`,
  REGISTER = `${API_URL}/register`,
}
