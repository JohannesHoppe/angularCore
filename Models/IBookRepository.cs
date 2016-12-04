using System;
using System.Collections.Generic;

namespace AngularCore.Models
{
    public interface IBookRepository
    {
        IEnumerable<Book> FindAll();
        Book FindByIsbn(string isbn);
    }
}