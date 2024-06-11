import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { userDTO } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getAll(@Query() body: userDTO) {
    return this.productsService.getAll(body);
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id) {
    return this.productsService.returnById(id);
  }
  @Post()
  addProduct(@Body() body: userDTO) {
    return this.productsService.addProduct(body);
  }
  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id) {
    return this.productsService.deleteProduct(id);
  }
  @Put('/:id')
  editProduct(@Body() body: userDTO, @Param('id', ParseIntPipe) id) {
    return this.productsService.editProduct(body, id);
  }
}
