import { message } from '@common/utils';
import { InputType } from '@nestjs/graphql';
import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: message.empty })
  @IsOptional()
  username?: string;

  @IsEmail()
  @IsNotEmpty({ message: message.empty })
  @IsOptional()
  email?: string;
}
