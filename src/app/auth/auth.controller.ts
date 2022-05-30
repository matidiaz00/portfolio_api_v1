import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { SignUpInterface } from './auth.interface';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Response, Request } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Req() req: Request, @Res() res: Response) {
    if (req.headers['user-agent'].includes('Mozilla')) {
      res
        .sendFile('index.html', { root: __dirname + '../../../views' })
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'This endpoint url is only run in the browser.' })
    }
  }

  @Get('account')
  acount(@Req() req: Request, @Res() res: Response) {
    if (req.headers['user-agent'].includes('Mozilla')) {
      res
        .sendFile('account.html', { root: __dirname + '../../../views' })
    } else {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'This endpoint url is only run in the browser.' })
    }
  }

  @Post('signup')
  @UseGuards(AuthGuard)
  signup(@Body() dto: SignUpInterface) {
    return this.authService.signup(dto);
  }
}
