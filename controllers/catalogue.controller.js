const catalService=require("../services/catalogue.services")


const getBooks=async(req,res)=>{
    try {
        const books= await catalService.getAllBooks()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json(error)
        
    }
}

const getBook=async(req,res)=>{
    try {
    const book= await catalService.getBookbyId(req.params.id)
    res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
        }

}

const deleteBook=async(req,res)=>{
    try {
    const book= await catalService.deleteBookbyId(req.params.id)
    res.status(200).json("Book Deleted")
    } catch (error) {
        res.status(500).json(error)
        }

}
const updateBook=async(req,res)=>{
    try {
    const book= await catalService.updateBook(req.body)
    res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }

}

const addBook=async(req,res)=>{
    try {
        const book= await catalService.createBook(req.body)
        res.status(201).json("Book Added")
        } catch (error) {
            res.status(500).json(error)
            }

}

const addCategory=async(req,res)=>{
    try {
    const category= await catalService.createCategory(req.body)
    res.status(200).json("Category Added")
    } catch (error) {
        res.status(500).json(error)
        }

}
const getCategories=async(req,res)=>{
    try {
    const category= await catalService.getAllCategories(req.body)
    res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error)
        }

}
const deleteCategory=async(req,res)=>{
    try {
    const category= await catalService.deleteCategoryById(req.params.id)
    res.status(200).json("Category deleted")
    } catch (error) {
        res.status(500).json(error)
        }

}

module.exports={
    getBooks,
    getBook,
    deleteBook,
    updateBook,
    addBook,
    getCategories,
    addCategory,
    deleteCategory,

}