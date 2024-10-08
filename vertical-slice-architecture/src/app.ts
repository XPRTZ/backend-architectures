import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import v1Routes from './api/v1.routes';
import { errorHandler, notFoundHandler, requestLogger } from './api/middleware';
import { swaggerSpec } from './api/openapi';
import swaggerUi from 'swagger-ui-express';
import { appConfig } from './config/app.config';
import { Mediator } from './shared/mediation/Mediator';
import { registerFeatures } from './config/feature.registry';

const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(helmet());
app.use(requestLogger);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mediator setup
const mediator = new Mediator();
registerFeatures(mediator);

// Routes
app.use('/api/v1', v1Routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export { app };
