const express=require("express")
const router=express.Router()

const catalController=require("../controllers/catalogue.controller")


router.route(prefix: "/categories")get(catalController.getCategories)
    .post(catalController.addCategory)

router.route(prefix: "/categories/:id").delete(catalController.deleteCategory)
    


module.exports=router