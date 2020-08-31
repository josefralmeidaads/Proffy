import express from 'express';
import db from './database/connections';
import convertHourToMinutes from './utils/convertHourToMinutes';
import ClassesControllers from './controllers/ClassesControllers';
import handleCreateClasses from './controllers/ClassesControllers';
import ConnectionsControllers from './controllers/ConnectionsControllers';

const routes = express.Router();

const classesControllers = new ClassesControllers();
const connectionsControllers = new ConnectionsControllers();

routes.post('/classes', classesControllers.create);
routes.post('/connections', connectionsControllers.create);

routes.get('/classes', classesControllers.index);
routes.get('/connections', connectionsControllers.index);

export default routes;