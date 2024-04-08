import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/car.seeds';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
    ) {

  }

  populateDB() {

    this.carsService.fillCarsWithSeeData(CARS_SEED);
    this.brandService.fillBrandWithSeeData(BRANDS_SEED);

    return 'Seed executed success';
  }
}
