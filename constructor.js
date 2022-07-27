function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read=read;
  }
 Book.prototype.toString=function(){
    return this.title+" "+ "by"+" "+ this.author+" " +"is"+ " "+this.pages+" "+"pages"+" " +"long." + " "+"The book has been"+" "+ this.read
 }
Book.prototype.print=function(){
    return this.toString()
}
const book=new Book ( "The pearl", "Shakespear", 712, "read");
book.print()