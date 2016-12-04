using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularCore.Models
{
    public class BookRepository : IBookRepository
    {
        static List<Book> books = new List<Book>() ;
            
        static BookRepository() {
            books.Add(new Book { Isbn = "000", Title = "Angular 2", Description = "TypeScript im Web", Rating = 5 });
            books.Add(new Book { Isbn = "111", Title = ".NET Core", Rating = 3});
         }

        public IEnumerable<Book> FindAll() {
            return books.OrderBy(f => f.Isbn);
        }

        public Book FindByIsbn(string isbn) {
            return books.FirstOrDefault(f => f.Isbn == isbn);
        }
    }
}