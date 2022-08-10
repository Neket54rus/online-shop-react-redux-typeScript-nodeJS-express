import Pizza from './Pizza.js'

class PizzaController {
	async create(req, res) {
		try {
			const pizza = await Pizza.create(req.body)
			res.status(200).json(pizza)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
	
	async getAll(req, res) {
		try {
			const {category, sortBy, order} = req.query
			
			let pizzas;
			if(!category && !sortBy && !order) {
				pizzas = await Pizza.find()
			}
			if(category && !sortBy && !order) {
				pizzas = await Pizza.find({category})
			}
			if(!category && sortBy && order) {
				pizzas = await Pizza.find().sort({[sortBy]:order})
			}
			if(category && sortBy && order) {
				pizzas = await Pizza.find({category}).sort({[sortBy]:order})
			}
			return res.status(200).json(pizzas)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
	
	async getOne(req, res) {
		try {
			const {id} = req.params
			
			if (!id) {
				res.status(404).json({
					message: 'Пицца не выбрана!'
				})
			}
			
			const pizza = await Pizza.findById(id)
			res.status(200).json(pizza)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
	
	async getByCategory(req, res) {
		try {
			const {category} = req.params
			
			if (!category) {
				res.status(404).json({
					message: 'Категория не выбрана!'
				})
			}
			
			const pizzas = await Pizza.find({category})
			res.status(200).json(pizzas)
		} catch (error) {
			res.status(500).json(error.message)
		}
	}
}

export default new PizzaController()