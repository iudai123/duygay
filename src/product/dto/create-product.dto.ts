import { IsString, IsNumber } from "class-validator";
export class CreateProductDto {
    @IsString()
    id: string;

    @IsString()
    title: string;

    @IsString()
    descrip: string;

    @IsString()
    sex: string;

    @IsString()
    catelog: string;

    @IsNumber()
    prices: number;
}
