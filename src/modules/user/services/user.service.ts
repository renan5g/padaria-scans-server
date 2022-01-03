import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { CryptService } from '@modules/global';
import { message } from '@common/utils';

import { CreateUserInput, UpdateUserInput } from '@modules/user/dtos';
import { UserRepository } from '@modules/user/repositories';

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly cryptService: CryptService,
  ) {}

  async store({ email, username, password }: CreateUserInput) {
    const userAlreadyExits = await this.usersRepository.exits(email);

    if (userAlreadyExits) throw new BadRequestException('User already exists');

    const hashedPassword = await this.cryptService.encrypt(password);

    const user = await this.usersRepository.save({
      email,
      password: hashedPassword,
      username,
    });

    return user;
  }

  async index() {
    const users = await this.usersRepository.find();
    return users;
  }

  async show(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) throw new NotFoundException(message.account_not_found);

    return user;
  }

  async update(id: string, data: UpdateUserInput) {
    const user = await this.usersRepository.update(id, data);
    return user;
  }

  async destroy(id: string) {
    const deleted = await this.usersRepository.delete(id);
    return deleted;
  }
}
