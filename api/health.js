import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default function handler(req, res) {
  try {
    console.log('Health check endpoint called');
    return res.status(200).json({ 
      status: 'ok',
      message: 'API is healthy',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check error:', error.message);
    Sentry.captureException(error);
    return res.status(500).json({ 
      status: 'error',
      message: 'Internal server error'
    });
  }
}