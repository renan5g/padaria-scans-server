import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserService } from '@modules/user/services';
import { CreateUserInput, UpdateUserInput } from '@modules/user/dtos';
import { User } from '@modules/user/interfaces';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    const result = await this.userService.index();
    return result;
  }

  @Query(() => User)
  async showUser(@Args('id') id: string): Promise<User> {
    const result = await this.userService.show(id);
    return result;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const result = await this.userService.store(data);
    return result;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    const result = await this.userService.update(id, data);
    return result;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    const result = await this.userService.destroy(id);
    return result;
  }
}
