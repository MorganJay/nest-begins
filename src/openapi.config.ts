import { SwaggerCustomOptions, SwaggerDocumentOptions } from '@nestjs/swagger';

export const CustomOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customSiteTitle: 'Animal Swagger UI',
};

export const DocumentOptions: SwaggerDocumentOptions = {
  include: [],
};
