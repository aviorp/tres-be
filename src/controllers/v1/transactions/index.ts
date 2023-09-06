import { createRouter } from '@/utils/createRouter';
import TransactionBL from './BL';

const router = createRouter();

router.createCrud(TransactionBL);

export default router;
