import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  Redirect,
  Req,
} from "@nestjs/common";
import { ApiExcludeController } from "@nestjs/swagger";
import type { Request } from "express";

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  @Redirect("/api", HttpStatus.PERMANENT_REDIRECT)
  get() {}

  @Get("my-ip")
  ip(@Req() req: Request) {
    Logger.debug(`req.ip: ${req.ip}`, "SpellsController");
    Logger.debug(`req.ips: ${req.ips?.join(", ")}`, "SpellsController");
    return {
      ip: req.ip,
      ips: req.ips,
    };
  }
}
