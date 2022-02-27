import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );
    await app.listen(3000);

    const prismaService: PrismaService = app.get(PrismaService);
    prismaService.enableShutdownHooks(app);
}
bootstrap();
