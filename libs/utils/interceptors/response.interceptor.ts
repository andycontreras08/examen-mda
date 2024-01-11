import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from 'libs/utils/types/response.types';

@Injectable()
export class FormattingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        return new ApiResponse(
          context.switchToHttp().getResponse().statusCode,
          'Operación exitosa',
          data,
        );
      }),
    );
  }
}