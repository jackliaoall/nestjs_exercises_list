import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './features/todo/todo.module';
import { CopyTodoModule } from './features/copy-todo/copy-todo.module';

@Module({
  imports: [TodoModule, CopyTodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
