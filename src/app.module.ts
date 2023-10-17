import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type : 'postgres',
      url : 'postgres://kdfcjpxc:lDxlEsMbKZBCgZHaioqQ6qvA38YyCFKx@bubble.db.elephantsql.com/kdfcjpxc',
      password : 'lDxlEsMbKZBCgZHaioqQ6qvA38YyCFKx',
      autoLoadEntities : true,
      synchronize : true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
