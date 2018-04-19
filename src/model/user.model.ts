export interface User {
  username: string;
  password: string;
  user_info: {
      name?: string;
      phone?: string; 
      email?: string;                   
  }
}
  