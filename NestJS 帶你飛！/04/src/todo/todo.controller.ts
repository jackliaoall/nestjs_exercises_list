import { Controller, Get, Query, Param, Post, Body, Header, Res } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Response } from 'express';

@Controller('todos')
export class TodoController {
    // @Get()
    // getAll() {
    //     return [];
    // }

    @Get('/examples')
    getExample() {
        return [
            {
              id: 1,
              title: 'Example 1',
              description: ''
            }
          ];
    }

    // @Get('exam*ples')
    // get() {
    //     return [
    //         {
    //             id: 1,
    //             title: 'Example 1',
    //             description: ''
    //         }
    //     ];
    // }

    // @Get(':id')
    // get(@Param() params: { id: string }) {
    //   const { id } = params;
    //   return {
    //     id,
    //     title: `Title ${id}`,
    //     description: ''
    //   };
    // }

    @Get(':id')
    get(@Param('id') params: { id: string }) {
      const { id } = params;
      return {
        id,
        title: `Title ${id}`,
        description: ''
      };
    }

    @Get()
    getList(@Query() query: { limit: number, skip: number }) {
      const { limit = 30, skip = 0 } = query;
      const list = [
        {
          id: 1,
          title: 'Title 1',
          description: ''
        },
        {
          id: 2,
          title: 'Title 2',
          description: ''
        }
      ];
  
      return list.slice(skip, limit);
    }

    // @Post()
    // create(@Body() data: { title: string, description?: string}) {
    //   const id = 1;
    //   return { id, ...data };
    // }

    // @Post()
    // create(
    //   @Body('title') title: string,
    //   @Body('description') description?: string
    // ) {
    //   const id = 1;
    //   return { id, title, description };
    // }

    @Post()
    create(@Body() dto: CreateTodoDto) {
      const id = 1;
      return { id, ...dto };
    }

    // @Get()
    // @Header('X-Hao-headers', '1')
    // getAll() {
    //   return {
    //     id: 1,
    //     title: 'Title 1',
    //     description: ''
    //   };
    // }

    // @Get()
    // async getAll() {
    //   return new Promise((resolve, reject) => setTimeout(() => resolve([]), 1000));
    // }

    // @Get()
    // getAll() {
    //   return of([]);
    // }

    // @Get()
    // getAll(@Res() res: Response) {
    //   res.send([]);
    // }

    // @Get()
    // getAll(@Res() res: Response) {
    //   return [];
    // }

    @Get()
    getAll(@Res({ passthrough: true }) res: Response) {
      return [];
    }
  }