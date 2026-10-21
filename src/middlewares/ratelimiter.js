import { rateLimit } from 'express-rate-limit';

export const apilimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 5,              // 5 solicitudes por minuto
    message: { message: 'Demasiadas solicitudes desde esta IP, intenta de nuevo en un minuto.' },
    statusCode: 429
});