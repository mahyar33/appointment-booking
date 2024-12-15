import { Module } from '@nestjs/common';
import { SlotsModule } from './slots/slots.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './config/typeorm.config.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmConfigModule,
    SlotsModule,
  ],
})
export class AppModule {}
