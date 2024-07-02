import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesService } from './expenses.service';
import { Expense } from './entities/expense.entity';
import mongoose, { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { BadRequestException } from '@nestjs/common';

describe('ExpensesService', () => {
  let service: ExpensesService;
  let ExpenseModel: Model<Expense>;

  const expenseMock = {
    _id: '66796c32381a7174d0ff5823',
    name: 'test',
    category: 'testing',
    cost: 999,
    __v: 0,
  };
  const createdUserMock = {
    name: 'test',
    category: 'testing',
    cost: 999,
  };
  const incompleteExpenseMock = {
    name: 'ilia',
    cost: 999,
  };
  const mockExpensemodel = {
    findById: jest.fn(),
    find: jest.fn(),
    findByIdAndDelete: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpensesService,
        {
          provide: getModelToken(Expense.name),
          useValue: mockExpensemodel,
        },
      ],
    }).compile();

    service = module.get<ExpensesService>(ExpensesService);
    ExpenseModel = module.get<Model<Expense>>(getModelToken(Expense.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findById', () => {
    it('should return object when passed correct object id', async () => {
      jest.spyOn(ExpenseModel, 'findById').mockResolvedValue(expenseMock);
      const expense = await service.findOne(expenseMock._id);
      expect(expense._id).toBe(expenseMock._id);
    });

    it('show error when passed incorect id', async () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(false);
      await expect(service.findOne(expenseMock._id)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('whould throw not found when user not found', async () => {
      jest.spyOn(ExpenseModel, 'findById').mockResolvedValue(null);
      await expect(service.findOne('66796c32381a7174d0ff5823')).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('findAll', () => {
    it('should return array of expenses', async () => {
      jest.spyOn(ExpenseModel, 'find').mockResolvedValue([expenseMock]);
      const users = await service.findAll();
      expect(users).toEqual([expenseMock]);
    });
  });

  describe('findByIdAndDelete', () => {
    it('should delete expense if given correct id', async () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(true);
      jest.spyOn(ExpenseModel, 'findById').mockResolvedValue(expenseMock);
      jest
        .spyOn(ExpenseModel, 'findByIdAndDelete')
        .mockResolvedValue(expenseMock);

      const expense = await service.remove(expenseMock._id);
      expect(expense._id).toBe(expenseMock._id);
    });

    it('should throw BadRequestException if id is not valid', async () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(false);
      await expect(service.remove('invalid-id')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException if expense not found', async () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(true);
      jest.spyOn(ExpenseModel, 'findById').mockResolvedValue(null);
      await expect(service.remove('valid-but-not-found-id')).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('create', () => {
    it('should create user', async () => {
      jest.spyOn(ExpenseModel, 'create').mockResolvedValue(expenseMock as any);
      const result = await service.create(createdUserMock as any);
      expect(result).toBe(expenseMock);
    });

    it('should throw error when passed incomplete expense', async () => {
      await expect(
        async () => await service.create(incompleteExpenseMock as any),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('findAndUpdate', () => {
    it('should find and update if given correct key and correct id', async () => {
      jest.spyOn(ExpenseModel, 'findById').mockResolvedValue(expenseMock);
      jest
        .spyOn(ExpenseModel, 'findByIdAndUpdate')
        .mockResolvedValue(expenseMock);
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(true);

      const updatedExpense = await service.update(
        '66796c32381a7174d0ff5823',
        createdUserMock,
      );

      expect(updatedExpense).toEqual(expenseMock);
    });

    it('Should throw error when id is not valid', async () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(false);
      expect(
        async () =>
          await service.update('66796c32381a7174d0ff5823', createdUserMock),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw error when expense is not available on given id ', async () => {
      jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(true);
      jest.spyOn(ExpenseModel, 'findByIdAndUpdate').mockResolvedValue(null);
      jest.spyOn(ExpenseModel, 'findById').mockResolvedValue(null);
      await expect(
        service.update('66796c32381a7174d0ff5823', incompleteExpenseMock),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
