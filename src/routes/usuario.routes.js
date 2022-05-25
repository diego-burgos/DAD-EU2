import { Router } from "express";

const router = Router();
import * as usuarioCtrl from "../controllers/usuario.controller";

router.get("/", usuarioCtrl.getUsuario);
router.post("/", usuarioCtrl.createUsuario);
router.post("/validar", usuarioCtrl.validarUsuario);

export default router;