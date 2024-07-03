import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import mongoose, { Model, Mongoose } from 'mongoose';
import { ExpensesService } from 'src/expenses/expenses.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findByEmail(email: string) {
    return this.userModel
      .findOne({ email })
      .select(['email', 'password', '_id']);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async addPost(
    userId: mongoose.Schema.Types.ObjectId,
    expenseId: mongoose.Schema.Types.ObjectId,
  ) {
    const user = await this.userModel.findById(userId);
    user.expenses.push(expenseId);
    await user.save();
  }
}
