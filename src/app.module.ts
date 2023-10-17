import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type : 'postgres',
      url : 'postgres://kdfcjpxc:lDxlEsMbKZBCgZHaioqQ6qvA38YyCFKx@bubble.db.elephantsql.com/kdfcjpxc',
      password : ,
      autoLoadEntities : true,
      synchronize : true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
