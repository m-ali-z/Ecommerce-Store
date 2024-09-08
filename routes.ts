/**
 * An array of routes that are accessible publicly.
 * These routes don't require any authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication.
 * Without authentication, you can't visit protected pages.
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * All authentication routes will start with this prefix.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
