const fetchBtn=document.getElementById("fetch-btn");
const display=document.getElementById("display")
fetchBtn.addEventListener("click",async()=>{
   const books= await fetch("book.json").then((res)=>res.json())
   books.books.map((book)=>{
      const head=document.createElement("h1")
      head.append(book.name)
      head.append(book.author)
      display.insertAdjacentElement("beforeend",head)

   })

})