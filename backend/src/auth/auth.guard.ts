import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // 👇 pega cookie assinado
    const token = request.signedCookies?.access_token;

    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);

      delete payload.exp;
      delete payload.iat;

      // injeta no request
      request['user'] = payload;

      return true;
    } catch (err) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}