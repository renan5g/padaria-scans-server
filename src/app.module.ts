import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaModule } from '@modules/prisma';
import { UserModule } from '@modules/user';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PrismaModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
