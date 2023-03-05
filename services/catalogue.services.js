const Book=require("../models/Book")
const Category=require("../models/Category")


const getAllBooks=async()=>{
    return await Book.find()

}
const createBook=async(b)=>{
    return await Book.create(b)
    }

const getBookbyId=async(id)=>{
    return await Book.findById(id)
    }

const deleteBookbyId=async(id)=>{
    return await Book.findByIdAndDelete(id)
    }
const updateBook=async(b)=>{
    return await Book.findByIdAndUpdate(b.id,b)

}
const getAllCategories=async()=>{
    return await Category.find()
    }
const createCategory=async(c)=>{
    return await Category.create(c)

}
const deleteCategoryById=async(id)=>{
    return await Category.findByIdAndDelete(id)
}

module.exports={
    getAllBooks,
    createBook,
    getBookbyId,
    deleteBookbyId,
    updateBook,
    getAllCategories,
    createCategory,
    deleteCategoryById
    
}