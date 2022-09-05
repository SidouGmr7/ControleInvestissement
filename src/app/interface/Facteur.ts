export interface Facteur{
    numero: string
    date: Date,
    fournisseur:string,
    comptable:string,
    ht:number,
    tva:number,
    ttc:number,
    valide: boolean
}

export const champs = ["numero","fournissuer","comptable","date","ht","tva","ttc"]
