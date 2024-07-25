import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UtilsService } from '@turborepo/utils';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
  ) {}

  getHello(): string {
    console.log(this.utilsService.getHello());
    return `Hello World! from ${this.configService.get<string>('HOST_URL')}`;
  }
}
