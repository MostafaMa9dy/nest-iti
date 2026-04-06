import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import * as Models from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll(): Models.Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Models.Task {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Models.Task {
    return this.tasksService.create(title, description);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: Models.TaskStatus,
  ): Models.Task {
    return this.tasksService.updateStatus(id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.tasksService.remove(id);
  }
}
