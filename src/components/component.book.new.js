import { useState } from "react"
import { addBook } from "../services/books.service"

function BookNew(){
   [name,setName]=useState(initialState: "")
   [description,setDescription]=useState(initialState: "")
   [isbn,setISBN]=useState(initialState: "") 
   [author,setAuthor]=useState(initialState: "") 


    async function handleForm(event){
        event.preventDefault()
        const book={"name":name,"description":description,"isbn":isbn,"author":author}
        addBook(book)
    }

    return (
        <form>
                <label classname={"form-label"} htmlFor={"name"}>Nom:</label>
                <input type="text" name="name" id="name" />
                <label classname={"form-label"} htmlFor={"description"}>description:</label>
                <textarea name="description" id="description" />
                <label classname={"form-label"} htmlFor={"name"}>isbn:</label>
                <input type="text" name="isbn" id="isbn" />
                <label classname={"form-label"} htmlFor={"name"}>autor:</label>
                <select name="autor" id="autor"></select>
                <button classname={"form-label"}  type="submit" id="new">Nouvelle livre</button>

     
        </form>

    )
}

export default BookNew