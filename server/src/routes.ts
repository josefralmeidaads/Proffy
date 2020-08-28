import express from 'express';
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: 'OPa!'});
});

routes.post('/users', (request, response) => {
    const data = request.body;
    
    return response.json(data);
});

export default routes;