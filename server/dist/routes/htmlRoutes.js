import path from 'node:path';
import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
export default router;
