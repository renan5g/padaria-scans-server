import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { message } from '@common/utils';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: message.empty })
  username: string;

  @IsEmail()
  @IsNotEmpty({ message: message.empty })
  email: string;

  @IsNotEmpty({ message: message.empty })
  password: string;
}
