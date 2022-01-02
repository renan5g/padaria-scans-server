import { Module } from '@nestjs/common';
import { UserService } from '@modules/user/services';
import { UserResolver } from '@modules/user/graphql';

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
