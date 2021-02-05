export interface loginUser{
  client_id: string,
  client_secret: string,
  grant_type: string,
  Username: string,
  Password: string
}

export interface AuthResponse {
  access_token:  string;
  expires_in:    number;
  token_type:    string;
  refresh_token: string;
  scope:         string;
  SessionId:     string;
}

