limport { useEffect, useState } from "react"

function BookList(){
 [books,setBooks]=useState()
 useEffect(effect: ()=>{
    getBooks()

 }, deps:[])
 async function getBooks(){
    const result = await getAllBooks()
    setBooks(result.data)

 }
 
 
    return (
        <table className="table table-bordred table-hover table striped">
           
            <tbody> 
                <link className="m-3 btn btn-primary"} to={"/admins/books/new"}>Ajouter</link>
               
                <tr >
                    <th>No</th>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
                {
                    books.map((elem,index)=>){
                       return (<tr>
                            <td>{index+1}</td>
                            <td>{elem.name}</td>
                            <td>{elem.description}</td>
                            <td>{elem.author}</td>

                           </tr>)
                    }
                }

             </tbody>
       </table>

    )

}

export default BookList