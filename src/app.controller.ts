import { Controller, Get } from '@nestjs/common';
import { inicioMock } from './mockup/inicio';
@Controller()
export class AppController {
  @Get()
  getInicio(){
    return inicioMock;
  }
}
