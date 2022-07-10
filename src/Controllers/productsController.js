import Products from "../Models/productsModel.js";
import {createError, createResponseSuccessData, createResponseSuccess} from "../Utils/responseHandle.js";

export const createProduct = async (req, res, next) => {
	try{
		const {name, price, description} = req.body;
		if(!name || !price || !description) return next(createError(404, "Data required"));

		const data = await Products.create({name, price, description});
		res.status(200).json(createResponseSuccessData(200, {name, price, description}));
	}catch(err){
		console.log(err);
		next(createError(500, "Something wrong when Create data"))
	}
}

export const getProductById = async (req, res, next) => {
	try{
		const {id} = req.params;
		const data = await Products.findAll({
			where:{
				id: id,
			},
			attributes: [id, name, price, description]
		});
		const result = JSON.parse(JSON.stringify(data))
		if(result.length == 0) return next(createError(404, "Product not found"));
		res.status(200).json(createResponseSuccessData(200, result[0]));
	}catch(err){
		console.log(err);
		next(createError(500, "Something wrong when get data product"))
	}
}

export const deleteProductById = async (req, res, next) => {
	try{
		const {id} = req.params;
		if(!checkProduct(id)) return next(404, "Product not found");
		await Products.delete({
			where:{
				id: id
			}
		});
		res.status(200).json(createResponseSuccess(200));
	}catch(err){
		console.log(err);
		next(createError(500, "Something wrong when delete product"))
	}
};

export const updateProductById = async (req, res, next) => {
	try{
		const {id} = req.params;
		const {name, price, description} = req.body;
		if(!checkProduct(id)) return next(404, "Product not found");
		await Products.update({id, name, price, description});
		res.status(200).json(createResponseSuccessData(200, {name, price, description}))
	}catch(err){
		console.log(err);
		next(createError(500, "Something wrong when update product"))
	}
}

export const listProducts = async (req, res, next) => {
	try{
		const data = await Products.findAll({
			attributes: [name, price, description]
		});
		const result = JSON.parse(JSON.stringify(data))
		if(result.length == 0) return next(404, "No one data products");

		res.status(200).json(createResponseSuccess(200, {name, price, description}));
	}catch(err){
		console.log(err);
		next(createError(500, "Something wrong when get list products"))
	}
}