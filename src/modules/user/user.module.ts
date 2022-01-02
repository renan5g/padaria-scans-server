import { Module } from '@nestjs/common';

import { UserService } from './services';
import { UserResolver } from './graphql';
import { UserRepository } from './repositories';

@Module({
  providers: [UserService, UserResolver, UserRepository],
})
export class UserModule {}
