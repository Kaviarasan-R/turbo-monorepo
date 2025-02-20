import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return `Hello World! from ${this.configService.get<string>('HOST_URL')}`;
  }
}
