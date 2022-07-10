import Products from "../Models/productsModel.js";

export const checkProductById = (idProduct) => {
	try{
		const data = await Products.findAll({
			where:{
				id: idProduct,
			},
			attributes: [id, name, price, description]
		});
		const result = JSON.parse(JSON.stringify(data));
		return result.length == 0;
	}catch(err){
		console.log(err);
		return new Error();
	}
	
}