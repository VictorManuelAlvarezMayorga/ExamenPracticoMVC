import { modeloAuto } from "../Models/carsModel";

modeloAuto.create({
    name: 'Camaro',
    brand: 'Chevrolet',
    model: '1969'
    type: 'deportivo',
    numSerie: '10095693778NPV'
})

export const test =()=> {
    console.log('funciona el controlador')
}