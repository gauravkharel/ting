import {Router} from "express"
import { body } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";

const router = Router();


router.get("/product", (req, res) => {getProducts});

router.get("/product/:id", (req, res) => {getOneProduct});

router.post("/product", (req, res) => {createProduct});

router.put("/product/:id", (req, res) => {updateProduct});

router.delete("/product/:id", (req, res) => {deleteProduct});

// Update

router.get("/update", (req, res) => {
})

router.get("/update/:id", (req, res) => {
   
})

router.post("/update", (req, res) => {})

router.put("/update/:id", (req, res) => {
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional(),
    () => {}
})

router.delete("/update/:id", (req, res) => {})

// UpdatePoint

router.get("/updatepoint", (req, res) => {})
router.get("/updatepoint/:id", (req, res) => {})
router.post("/updatepoint", (req, res) => {})
router.put("/updatepoint/:id", (req, res) => {})
router.delete("/updatepoint/:id", (req, res) => {})

export default router;
