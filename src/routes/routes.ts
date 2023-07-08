import { Router } from "express";
import { getIndex , postLogin , deleteUserId , statusInfo, editUserId} from "../controllers/controller";

const router = Router()

router.get('/' , getIndex)
router.post('/', postLogin)
router.get('/delete/:id' , deleteUserId)
router.put('/edit/:id' , editUserId)


router.get('/erkak/:id/:status' , statusInfo)
router.get('/ayol/:id/:status' , statusInfo)

export default router;