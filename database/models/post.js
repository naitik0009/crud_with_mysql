const {connect} = require("../connect");

class Post {
    constructor(name,description,price,sale_price,quantity,image,category,type){
        this.name = name;
        this.description = description;
        this.price=price;
        this.sale_price=sale_price;
        this.quantity=quantity;
        this.image=image;
        this.category = category;
        this.type = type;
    }
     save(){
        let dat = new Date();
        let year = dat.getFullYear();
        let month = dat.getMonth()+1;
        let date = dat.getDate();

        let createdAtDate = `${year}-${month}-${date}`;

        let sql = `
        INSERT INTO 
        products(name,description,price,sale_price,quantity,image,category,type)
        VALUES('${this.name}','${this.description}','${this.price}','${this.sale_price}','${this.quantity}','${this.image}','${this.category}','${this.type}')
        `;
        const newPost = connect.query(sql);
    return newPost;
    }

    static  findAll(){
        let sql = `SELECT * FROM products;`;
        // const result = await connect.query(sql).then((result)=>{return result});
        // return result;
        return connect.query(sql);
    };

    static  findByid(id){
        let sql = `SELECT * FROM products WHERE id = ${id};`;
        return connect.query(sql);
    };
}

module.exports = Post;