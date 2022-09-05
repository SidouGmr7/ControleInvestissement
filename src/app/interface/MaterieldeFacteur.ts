export interface MaterieldeFacteur{
    numero : string
    qts : number
    designation: string
    prix: number,
    montant:number,
}
export const ChampsMaterieldeFacteur = ["numero","QTS","Designation","Prix","Montant"]
export const ChampsMaterieldeFacteurSansNumero = ["QTS","Designation","Prix","Montant"]
