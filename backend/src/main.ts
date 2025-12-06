import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';

async function bootstrap() {
  try {
    console.log('🚀 [1/6] Iniciando aplicação NestJS...');
    console.log('📋 [2/6] Variáveis de ambiente:');
    
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      console.error('❌ [CRÍTICO] MONGODB_URI não está definida!');
      console.error('❌ A aplicação tentará usar o fallback local (mongodb:27017) que não funciona em produção.');
      console.error('❌ Configure a variável MONGODB_URI ou MONGO_URI no Railway.');
      console.error('❌ Veja: README.md seção "Deploy no Railway" para instruções.');
    } else {
      // Log da URI sem expor a senha
      const uriForLog = mongoUri.replace(/:[^:@]+@/, ':****@');
      console.log(`   ✅ MONGODB_URI: definida`);
      console.log(`   📦 Connection String: ${uriForLog}`);
      
      // Validação básica da URI
      try {
        const parsedUri = new URL(mongoUri);
        console.log(`   📦 Protocolo: ${parsedUri.protocol}`);
        console.log(`   📦 Host: ${parsedUri.hostname}`);
        console.log(`   📦 Database: ${parsedUri.pathname.replace('/', '') || 'padrão'}`);
        console.log(`   📦 AuthSource: ${parsedUri.searchParams.get('authSource') || 'não especificado'}`);
        
        // Verifica se tem usuário e senha
        if (parsedUri.username && parsedUri.password) {
          console.log(`   ✅ Credenciais presentes na URI`);
        } else {
          console.warn(`   ⚠️ Credenciais não encontradas na URI - pode causar erro de autenticação`);
        }
      } catch (error) {
        console.error(`   ❌ Erro ao parsear MONGODB_URI: ${error}`);
      }
    }
    console.log(`   PORT: ${process.env.PORT || 3000}`);
    
    console.log('📋 [3/6] Criando aplicação NestJS...');
    // Cria a aplicação com logger mínimo para evitar problemas
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log'],
      abortOnError: false, // Não aborta em caso de erro
    });
    
    console.log('✅ [4/6] Aplicação NestJS criada com sucesso');

    console.log('📋 [5/6] Configurando middleware...');
    
    // Habilita CORS
    const corsOrigins = process.env.CORS_ORIGINS 
      ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
      : ['http://localhost:5173', 'http://localhost:3000'];
    
    // Adiciona origem do Railway automaticamente se estiver rodando lá
    if (process.env.RAILWAY_PUBLIC_DOMAIN) {
      corsOrigins.push(`https://${process.env.RAILWAY_PUBLIC_DOMAIN}`);
      corsOrigins.push(`http://${process.env.RAILWAY_PUBLIC_DOMAIN}`);
    }
    
    console.log('🌐 CORS configurado para origens:', corsOrigins);
    app.enableCors({
      origin: corsOrigins.length > 0 ? corsOrigins : true, // Permite todas as origens se não especificado
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });

    // Pipe de validação global
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: false,
        transformOptions: {
          enableImplicitConversion: true,
        },
        exceptionFactory: (errors) => {
          const messages = errors.map((error) => {
            return Object.values(error.constraints || {}).join(', ');
          });
          return new BadRequestException({
            message: 'Dados inválidos',
            errors: messages,
          });
        },
      }),
    );

    // Tratamento global de exceções
    process.on('unhandledRejection', (reason, promise) => {
      console.error('❌ Unhandled Rejection at:', promise);
      console.error('❌ Reason:', reason);
    });

    process.on('uncaughtException', (error) => {
      console.error('❌ Uncaught Exception:', error);
      console.error('❌ Stack:', error.stack);
    });

    // Prefixo global
    app.setGlobalPrefix('api');

    const port = process.env.PORT || 3000;
    console.log(`🌐 [6/6] Iniciando servidor na porta ${port}...`);
    await app.listen(port);
    
    // Cria usuário padrão automaticamente após a aplicação estar pronta
    try {
      console.log('👤 [7/7] Criando usuário padrão...');
      const usersService = app.get(UsersService);
      const result = await usersService.createDefaultUser();
      if (result.created) {
        console.log(`✅ Usuário padrão criado automaticamente: ${result.email}`);
      } else if (result.updated) {
        console.log(`✅ Usuário padrão atualizado automaticamente: ${result.email}`);
      } else {
        console.log(`ℹ️  Usuário padrão já existe: ${result.email}`);
      }
    } catch (error: any) {
      console.warn(`⚠️  Não foi possível criar usuário padrão automaticamente: ${error?.message}`);
      console.warn(`⚠️  Você pode criar manualmente via: http://localhost:${port}/api/users/setup/default-user`);
    }
    
    console.log(`✅✅✅ Aplicação rodando com sucesso em: http://localhost:${port}`);
    console.log(`✅ Endpoint de health check: http://localhost:${port}/api/health`);
    console.log(`✅ Endpoint para criar/resetar usuário padrão: http://localhost:${port}/api/users/setup/default-user`);
  } catch (error: any) {
    console.error('❌ Erro ao iniciar aplicação:', error?.message || error);
    console.error('❌ Stack:', error?.stack);
    process.exit(1);
  }
}

bootstrap();
