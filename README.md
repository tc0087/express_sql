# Learnings

* Models are stored in the model directory

* Begin by creating a class, then define the shape of the class

```javascript
module.exports = class Product {
	constructor(t) {
		this.title = t
	}
}
```

* Static functions (aka utility functions that DO NOT instantiate the class) can be added to the class:

```javascript
module.exports = class Product {
	constructor(t) {
		this.title = t
	}

	save() {
		products.push(this)
	}
	
	static fetchAll() {
		return products
	}
}
```

* The models can then be used by the controller:

```javascript
const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add product',
		path: '/admin/add-product'
	})
}

exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title)
	product.save()
	res.redirect('/')
}

exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll()
	res.render('public', {
		prods: products, 
		pageTitle: 'Shop',
		path: '/'
	})
}
```