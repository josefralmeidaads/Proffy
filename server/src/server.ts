import express, { json } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Deu Certo!'});
});

app.post('/users', (request, response) => {
    const data = request.body;
    
    return response.json(data);
});

app.listen(3333);