import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const UserDec = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        const [type, token] = request.headers.authorization?.split(' ') ?? []

        // anggaplah di sini sudah melakukan verify jwt token

        return token
    }
)
