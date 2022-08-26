import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginInterface, SignUpInterface } from './auth.interface';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Response, Request } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Body() dto: LoginInterface) {
    return this.authService.login(dto);
  }

  @Post('signup')
  @UseGuards(AuthGuard)
  signup(@Body() dto: SignUpInterface) {
    return this.authService.signup(dto);
  }
}
