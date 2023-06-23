import { Controller, Get, Post, Delete, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get()
    getAllProjects() {
        return this.projectsService.getAllProjects();
    }

    @Post('create')
    createProject(@Req() request: Request) {
        return this.projectsService.createProject(request.body);
    }

    @Delete('delete')
    deleteProject(@Req() request: Request) {
        return this.projectsService.deleteProject(request.body);
    }
}
