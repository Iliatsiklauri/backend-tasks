import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { products } from './products.type';
import { userDTO } from './products.dto';

@Injectable()
export class ProductsService {
  private passcode = '1234';
  private products: products[] = [
    {
      id: 0,
      name: 'iphone 13 pro',
      category: 'mobile',
      price: 1100,
      createdAt: '11/06/2024',
    },
    {
      id: 1,
      name: 'mackbook pro',
      category: 'laptop',
      price: 2200,
      createdAt: '05/06/2024',
    },
  ];

  getAll(body?: Partial<userDTO>, key?: string) {
    if (key !== this.passcode)
      throw new HttpException(
        'api key is not correct or is missing',
        HttpStatus.BAD_REQUEST,
      );
    let filtered = this.products;
    if (body) {
      if (body.name) {
        filtered = filtered.filter((el) => el.name === body.name);
      }
      if (body.category) {
        filtered = filtered.filter((el) => el.category === body.category);
      }
      if (body.price) {
        filtered = filtered.filter((el) => el.price >= Number(body.price));
      }
    }
    return filtered;
  }

  returnById(id: number) {
    const obj = this.products.find((el) => el.id === id);
    if (!obj) {
      throw new HttpException(
        'there is no product with this id',
        HttpStatus.BAD_REQUEST,
      );
    }
    return obj;
  }

  addProduct(data: userDTO) {
    if (!data.category || !data.name || !data.price) {
      throw new HttpException(
        'category, name, and price are required!',
        HttpStatus.BAD_REQUEST,
      );
    }
    const obj: products = {
      id: this.products[this.products.length - 1]?.id + 1 || 0,
      ...data,
      createdAt: new Date().toISOString(),
    };
    this.products.push(obj);
    return obj;
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((el) => el.id === id);
    if (index === -1) {
      throw new HttpException(
        'there is no product with this id',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.products.splice(index, 1);
    return this.products;
  }

  editProduct(data: userDTO, id: number) {
    const index = this.products.findIndex((el) => el.id === id);
    if (index === -1) {
      throw new HttpException(
        'there is no product with this id',
        HttpStatus.BAD_REQUEST,
      );
    }
    const obj = {
      ...this.products[index],
      ...data,
    };
    this.products[index] = obj;
    return obj;
  }
}
