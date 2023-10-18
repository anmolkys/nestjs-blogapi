import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type : 'postgres',
      url : process.env.DB_LINK,
      // password : 'lDxlEsMbKZBCgZHaioqQ6qvA38YyCFKx',
      autoLoadEntities : true,
      synchronize : true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
