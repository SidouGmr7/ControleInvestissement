export interface Fournisseur{
    numero: string
    tlp:number
    dette:number
    situation: number
    RetardPaiement: number
    anciennete: number
    priorite: number
    payer: boolean

}




export const champsfournisseur = ["Designation","tlp","dette","retardpaiement","options"]
export const champspaiementfournisseur = ["Priorite","Designation","dette","situation","retardpaiement","anciennete","options"]

