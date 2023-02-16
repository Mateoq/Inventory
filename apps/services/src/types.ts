// =========================================================
// Enums.
// =========================================================

// =========================================================
// Interfaces.
// =========================================================
export interface GenericMap {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface ValidateUserResult {
  id: string;
  email: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: number;
}
