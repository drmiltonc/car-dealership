import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ] 

    findAll() {
        return this.cars;
    }
    
    findOne(id: number) {
        if (!this.cars[id]) {
            throw new NotFoundException(`Car with Id '${id}' not found`);
        }
        return this.cars[id];
    }
}
