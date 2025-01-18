import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [UserModule, CourseModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
