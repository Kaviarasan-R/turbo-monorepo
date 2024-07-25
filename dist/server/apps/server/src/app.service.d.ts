import { ConfigService } from '@nestjs/config';
import { UtilsService } from '@turborepo/utils';
export declare class AppService {
    private readonly configService;
    private readonly utilsService;
    constructor(configService: ConfigService, utilsService: UtilsService);
    getHello(): string;
}
