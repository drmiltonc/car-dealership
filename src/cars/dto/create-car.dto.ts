import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({message: `Manda un string`})
    readonly brand: string;

    @IsString({message: `Manda un string2`})
    @MinLength(3)
    readonly model: string;
}