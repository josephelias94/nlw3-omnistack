import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import Orphanages from './controllers/Orphanages';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', Orphanages.index);
routes.get('/orphanages/:id', Orphanages.show);
routes.post('/orphanages', upload.array('images'), Orphanages.create);

export default routes;
