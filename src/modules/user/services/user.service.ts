import { Injectable } from '@nestjs/common';
import { CryptService } from '@modules/global';
import { CreateUserInput } from '../dtos';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly cryptService: CryptService,
  ) {}

  async create({ email, username, password }: CreateUserInput) {
    const userAlreadyExits = await this.usersRepository.exits(email);

    if (userAlreadyExits) throw new Error('User already exists');

    const hashedPassword = await this.cryptService.encrypt(password);

    return await this.usersRepository.save({
      email,
      password: hashedPassword,
      username,
    });
  }
}
