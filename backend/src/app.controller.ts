import { Controller, Get, Req, Post, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/abc/:id')
  getAbc(@Req() req: Request, @Param() param): any {
    const data: any = req.body;
    console.log(data);
    return {success: true, message: data};
  }
}
