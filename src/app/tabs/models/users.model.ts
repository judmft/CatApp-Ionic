export interface User {
    email: string;
      id?: string;
      name: string;
      
      password: string;
      password_confirmation: string;
      tipo?: string;
      age?: number;
      dni?: string;
      phone?: number;
      perfil?: string;
  }
