import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
    @Get()
    getAll() {
        return [];
    }

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
  }