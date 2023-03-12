const productModel = require("../database/models/post");

const getAllPost = async(request,response)=>{
try {
    const [result,_] = await productModel.findAll();
    response.send(result);
} catch (error) {
    response.status(400).json({code:error});
}
};

const createNewPost = async (request,response)=>{
    try {
        const {name,description,price,sale_price,quantity,image,category,type} = request.body;
    let product = new productModel(name,description,price,sale_price,quantity,image,category,type);
    product = await product.save();
    console.log(product);
    response.status(200).json({code:"ok",message:"Product created successfully"});
    } catch (error) {
        response.status(400).json({code:"error",message:error.message});
    }
}

const getPostById = async (request,response)=>{
    try {
        const {id} = request.params;
        const [result,_] = await productModel.findByid(id); // here we will get the required data
        response.status(200).json({code:"ok",message:result});
    } catch (error) {
        response.status(400).json({code:"error",message:error.message});
    }
}

module.exports={getAllPost,createNewPost,getPostById};