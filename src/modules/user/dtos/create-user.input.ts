import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { EmptyMessage } from '@common/utils';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: EmptyMessage })
  username: string;

  @IsEmail()
  @IsNotEmpty({ message: EmptyMessage })
  email: string;

  @IsNotEmpty({ message: EmptyMessage })
  password: string;
}
