import { Injectable } from "@nestjs/common";

@Injectable()
export class UtilsService {
  getHello() {
    return "Hello from utils";
  }
}
