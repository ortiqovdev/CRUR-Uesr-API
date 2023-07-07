import { Router } from "express";
import { getIndex , postLogin , deleteUserId , statusInfo} from "../controllers/controller";

const router = Router()

router.get('/' , getIndex)
router.post('/', postLogin)
router.get('/delete/:id' , deleteUserId)


router.get('/erkak/:id/:status' , statusInfo)
router.get('/ayol/:id/:status' , statusInfo)

export default router;