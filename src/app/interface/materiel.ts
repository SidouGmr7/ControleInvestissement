
export interface Materiel {
    numero : string,
    quantite: number
    groupe_code_inventaire : string,
    marque: string,
    categorie: string,
    designation: string
    serie: string,
    date: Date,
    etat: string,
    facteur: string,
    comptable: string
    gestionnaire: string
    fournisseur: string
    PV:string,
    prix: number,
    valide: string
}

export const ChampsMateriels = ["Code_inventaire","Designation","Marque","Categorie","Serie","Date","Etat","Facteur","PV","Prix"]
export const ChampsAmortiss =  ["Categorie","Code_inventaire","Designation","Date","Etat","Prix d'origine","Taux Amortissment"," Prix Actuel"]
export const ChampsEtat = ["Nuef" , "Moyen","Renformer"]