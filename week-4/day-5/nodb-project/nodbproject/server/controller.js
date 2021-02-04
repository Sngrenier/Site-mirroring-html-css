let collection = [
    {
        id: 0,
        name: "Teddy gilet in alpaca",
        price: "$2,890.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2021/1/1271011106/007/s3master/1271011106007-a-gettata_normal.jpg#product",
        color: "Sea",
        size: "[ XS, S, M, L ]",
        quantity: 1
    },
    {
        id: 1,
        name: "Pure silk charmeuse trousers",
        price: "$995.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2021/1/1131031106/033/s3master/1131031106033-a-extra_normal.jpg#product",
        color: "Sea",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 2,
        name: "Pure silk satin tunic",
        price: "$695.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2021/1/1111091106/032/s3master/1111091106032-a-sava_normal.jpg#product",
        color: "Ivory",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 3,
        name: "Pure cashmere yarn jumper",
        price: "$945.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2021/1/1361031106/012/s3master/1361031106012-a-caimano_normal.jpg#product",
        color: "Ivory/Sea",
        size: "[ XS, S, M, L ]",
        quantity: 1
    },
    {
        id: 4,
        name: "Cashmere coat",
        price: "$6,090.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1016090906/001/s3master/1016090906001-a-labbro_normal.jpg#product",
        color: "Stone",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 5,
        name: "Blazer in wool twill",
        price: "$2,890.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1046160906/001/s3master/1046160906001-a-renata_normal.jpg#product",
        color: "Dark Stone",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 6,
        name: "Wool twill trousers",
        price: "$795.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1136120906/001/s3master/1136120906001-a-jago_normal.jpg#product",
        color: "Dark Stone",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 7,
        name: "Wool grisaille dress",
        price: "1,395.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1226120906/004/s3master/1226120906004-a-hidalgo_normal.jpg#product",
        color: "Stone",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 8,
        name: "Cady dress",
        price: "995.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1226070906/001/s3master/1226070906001-a-nerine_normal.jpg#product",
        color: "Silk",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 9,
        name: "Silk georgette dress",
        price: "$1,750.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1226120406/002/s3master/1226120406002-a-zelante_normal.jpg#product",
        color: "Cornflower",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 10,
        name: "Cady tuxedo jumpsuit",
        price: "$2,690.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2021/1/1241011406/004/s3master/1241011406004-a-simpaty_normal.jpg#product",
        color: "Ivory",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    },
    {
        id: 11,
        name: "Cashmere jacket",
        price: "$4,850.00",
        image: "https://b2c-media.maxmara.com/sys-master/m0/MM/2020/2/1086010906/032/s3master/1086010906032-a-sella_normal.jpg#product",
        color: "Beige",
        size: "[ 34, 36, 38, 40, 42, 44, 46 ]",
        quantity: 1
    }

]

let id = 1
let tote = []

//what do I need API to do:
// 1. getCollection: display inventory - get 
// 2. getTote: display tote - get
// 3. addToTote: Move itemized inventory to cart - post
// 4. updateTote: Update quantity in cart - put
// 5. search: Only Display items that meet criteria - get 
// 6. deleteFromTote: Delete from cart - delete
// 7. addOrder: Add order array (reciept) when checking out - post


module.exports = {
    getCollection: (req, res) => {
        res.status(200).send(collection)
    },

    postSearch: (req, res) => {
        let lookbook = []
        const {search} = req.params
        console.log(search)
        if(search){
        lookbook = collection.filter((piece) => piece.name.toLowerCase().includes(search.toLowerCase()) )
        } res.status(200).send(lookbook)
    },
    getTote: (req, res) => {
        res.status(200).send(tote)
    },
    addToTote: (req, res) => {
        const index = collection.findIndex( piece => piece.id === +req.body.piece.id)
        if(tote.findIndex(piece => piece.id === +req.body.piece.id) > -1){
        tote[tote.findIndex(piece => piece.id === +req.body.piece.id)].quantity += 1
        }else(tote.push({...req.body.piece, quantity:1}))
        res.status(200).send(tote)
    },
    deleteFromTote: (req, res) => {
        const index = tote.findIndex( piece => piece.id === +req.params.id)
        console.log(tote)
        tote.splice(index, 1)
        console.log(tote)
        console.log(index)
        res.status(200).send(tote)
    },
    updateTote: (req, res) => {
        console.log(req.body)
        if(tote.findIndex(piece => piece.id === +req.params.id) > -1){
            tote[tote.findIndex(piece => piece.id === +req.params.id)].quantity = req.body.quantity
            }console.log(tote)
            res.status(200).send(tote)
    },
    emptyOrder: (req, res) => {
        tote=[]
        res.status(200).send(tote)
    }

}