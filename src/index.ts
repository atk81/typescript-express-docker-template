import dotenv from 'dotenv';
import express from 'express';
import {logger} from './logger';
/**
 * Load environment variables from .env file,
 * If .env file is not found, load from .env.default file
 * .env file should be in root directory
 */
const result = dotenv.config();
if (result.error) {
    console.error(result.error);
  dotenv.config({ path: '.env.default' });
}

const app = express();

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(process.env.PORT || 3000, () => {
    logger.info(`Server started on port ${process.env.PORT || 3000}`);
});
