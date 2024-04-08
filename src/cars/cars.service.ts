import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpddateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]

    findAll() {
        return this.cars;
    }

    findOne(id: string) {
        const car = this.cars.find(car => car.id == id);
        if (!car) {
            throw new NotFoundException(`Car with Id '${id}' not found`);
        }
        return car;
    }

    create(createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    updateCar(id: string, updateCarDto: UpddateCarDto) {

        let carDB = this.findOne(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Car id is not valid inside body`);
        }
        
        this.cars = this.cars.map(
            car => {
                if (car.id === id) {
                    carDB = {...carDB, ...updateCarDto, id}
                    return carDB;
                }
                return car;
            }
            
        );

        return carDB;

    }

    deleteCar(id: string) {
        let carDB = this.findOne(id);

        this.cars = this.cars.filter(car => car.id !== id);

    }

    fillCarsWithSeeData(cars: Car[]) {
        this.cars = cars;
    }

}
