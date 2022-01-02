import { Module } from '@nestjs/common';
import { UserService } from '@modules/user/services';

@Module({
  providers: [UserService],
})
export class UserModule {}
