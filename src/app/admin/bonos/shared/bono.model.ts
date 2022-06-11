import { Usuario } from "../../usuarios/shared/usuario.model";

export class Bono {
    id?: number;
    usuarioResponse?: Usuario;
    tipoCambio?: string;
    metodoFinanciero?: string;
    valorNominal?: number;
    periodoPago?: string;
    tasaAnual?: number;
    numeroPeriodos?: number;
    anualidad?: number;
    van?: number;
    tir?: number;
    duracion?: number;
    duracionModificada?: number;
    convexidad?: number;
}

export class TipoCambio {
    id?: number;
    tipoCambio?: string;
    detalle?: string;
}

export class MetodoFinanciero {
    id?: number;
    metodo?: string;
    detalle?: string;
}
