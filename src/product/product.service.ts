import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  // b1 get method
  constructor(

    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>
  ) { }

  async create(createProductDto: CreateProductDto) {
    const { title, prices, catelog, sex, id } = createProductDto;
    const newProduct = this.productRepository.create({})


    await this.productRepository.save(newProduct);// lưu cái mình vừa tạo

    return newProduct;// nếu không thành công qauy lại bước tạo
  }

  async findAll() {
    return await this.productRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
