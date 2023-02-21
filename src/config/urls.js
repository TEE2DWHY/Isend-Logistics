const baseUrl = "https://isend-api-v1.herokuapp.com";
const role = "users";

export const loginUrl = `${baseUrl}/api/v1/${role}/login`;
export const signUpUrl = `${baseUrl}/api/v1/${role}/signup`;
export const logOutUrl = `${baseUrl}/api/v1/${role}/logout`;
export const forgotPasswordUrl = `${baseUrl}/api/v1/${role}/forgot-password`;

