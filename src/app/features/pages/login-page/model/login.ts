export interface loginUser{
  client_id: string,
  client_secret: string,
  grant_type: string,
  Username: string,
  Password: string
}

export interface AuthResponse {
  access_token:  string;
  expires_in:    any;
  token_type:    string;
  refresh_token: string;
  scope:         string;
  SessionId:     string;
}

export interface loginError{
  error: string;
  error_description: string;
}

export interface userInfo{
  sub:                   string;
  name:                  string;
  given_name:            string;
  family_name:           string;
  email:                 string;
  role:                  string;
  preferred_username:    string;
  email_verified:        boolean;
  phone_number:          string;
  phone_number_verified: boolean;
  JoinedDate:            string;
}

export class UserAuth {

  constructor(
      // public first_name: string,
      // public last_name: string,
      // public email: string,
      private access_token: string,
      private expires_in: number,
      public token_type: string,
      private refresh_token: string,
      public scope: string,
      public SessionId: string

  ) {
  }

  get accessToken() {
      if (!this.expires_in) {
          return null;
      }
      return this.access_token;
  }

  get refreshToken() {
      return this.refresh_token;
  }
}
