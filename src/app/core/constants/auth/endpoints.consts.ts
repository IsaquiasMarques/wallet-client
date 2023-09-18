import { environment } from "src/environments/environment";

export const CSRF: string = `${environment.apiServer}/sanctum/csrf-cookie`;
export const TEST: string = `${environment.apiServer}/api/not-authenticated`;
export const REGISTER: string = `${environment.apiServer}/api/auth/register`;
export const LOGIN: string = `${environment.apiServer}/api/auth/login`;