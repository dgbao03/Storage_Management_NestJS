import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      
      return data ? request.user[data] : request.user;
    },
  );