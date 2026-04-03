import { Hono } from "hono";
import { home } from "../controllers/homeController";
import { 
  index, 
  create, 
  store, 
  edit, 
  update, 
  destroy 
} from "../controllers/mahasiswaController";

const router = new Hono();

router.get("/", home);
router.get("/mahasiswa", index);
router.get("/mahasiswa/create", create);
router.post("/mahasiswa", store);
router.get("/mahasiswa/edit/:id", edit);
router.post("/mahasiswa/update/:id", update);
router.get("/mahasiswa/delete/:id", destroy);

export default router;