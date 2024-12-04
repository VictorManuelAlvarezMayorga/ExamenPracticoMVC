import { Eschema, model } from "mongoose";

const EsquemaAuto = new schema ({
    name: String,
    brand: String,
    model: Number,
    type: String,
    numSerie: Number
})

export const modeloAutos = new model ('Tabla de Autos', EsquemaAuto);