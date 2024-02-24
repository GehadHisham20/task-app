import { getFromStorage } from 'utils/index';

/**
 * Checks if the user is authenticated.
 *
 * @returns {string | null} The user authentication status. Returns the user object if authenticated, otherwise returns null.
 */
export function isAuthenticated(): string | null {
  const isAuth = getFromStorage('user');
  return isAuth.length > 0 ? (isAuth as string) : null;
}
