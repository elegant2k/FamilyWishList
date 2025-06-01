import express from 'express';
import { registerRoutes } from '../server/routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default async function handler(req, res) {
  try {
    // Initialize the routes
    const server = await registerRoutes(app);
    
    // Handle the request
    return app(req, res);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
