import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vertical Slice Architecture API',
      version: '1.0.0',
      description: 'API documentation for the Vertical Slice Architecture project',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/features/**/*.routes.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
