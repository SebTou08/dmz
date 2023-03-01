export interface ValeInterface {
    name: string;
    taken: boolean;
    fExpiracion?: Date;
    fDisponibleDesde?: Date;
    quantity: number;
    id: number;

    takenCode?: number | string;
    takenDate?: Date;
}