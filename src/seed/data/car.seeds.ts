import { Car } from "src/cars/interfaces/cars.interface";
import { v4 as uuid } from 'uuid';


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'D-Max'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
];