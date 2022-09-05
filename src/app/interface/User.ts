

export interface User{
    id: string;
    host: string;
    email: string;
    password: string;
    role: string;
    etat: boolean;
}

export const roles = [
    'Admin' , 'Gestionnaire' , 'Comptable'
]