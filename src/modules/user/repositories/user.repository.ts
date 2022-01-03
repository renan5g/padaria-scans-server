import { Injectable } from '@nestjs/common';
import { PrismaService } from '@modules/prisma';
import { User } from '../interfaces';
import { CreateUserInput, UpdateUserInput } from '../dtos';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async exits(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return !!user;
  }

  async save(data: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async find(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateUserInput): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data });
  }
}
