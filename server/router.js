import Router from "express";

import PizzaController from "./PizzaController.js";

const router = new Router()
router.post('/pizzas', PizzaController.create)
router.get('/pizzas', PizzaController.getAll)
router.get('/pizzas/:id', PizzaController.getOne)
router.get('/pizzas/category/:category', PizzaController.getByCategory)

export default router
