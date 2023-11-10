import Cors from 'micro-cors';

// Specify the allowed origins, methods, and other options
const cors = Cors({
  allowMethods: ['GET', 'POST'],
  origin: 'http://localhost:3001', // Replace with the actual URL of your frontend
});

export default cors;
