import http from "./http-common";

export const getAllBooks = async() =>{
    return await http.get(url: "/books")
}
export const getBookbyId=async(id)=>{
    return await http.get(`/books/${id}`)
}

export const deleteBook=async(id)=>{
    return await http.delete(url: "/books/${id}")
}
export const addBook=async(book)=>{
    return await http.post(url: "/books",book)
}
export const updateBook=async(book)=>{
    return await http.put(url: "/books/${id}",book)
}
