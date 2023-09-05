import { Controller, Get, HttpStatus, Redirect } from "@nestjs/common";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  @Redirect("/api", HttpStatus.PERMANENT_REDIRECT)
  get() {}
}
