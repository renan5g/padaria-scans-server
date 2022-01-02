import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UserService } from '@modules/user/services';
import { CreateUserInput } from '@modules/user/dtos';
import { User } from '@modules/user/interfaces';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const result = await this.userService.create(data);
    return result;
  }
}
