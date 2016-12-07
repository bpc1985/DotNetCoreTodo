using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreTodo.Models
{
    public class TodoRepository : ITodoRepository
    {
        public DbSet<TodoItem> GetAll()
        {
            return new TodoContext().Todos;
        }

        public bool Add(TodoItem item)
        {
            var retval = 0;
            using (var db = new TodoContext())
            {
                db.Todos.Add(item);
                retval = db.SaveChanges();
            }
            return retval > 0;
        }
        
        public bool UpdateTodo(TodoItem item)
        {
            var retval = 0;
            using (var db = new TodoContext())
            {

                db.Todos.Update(item);
                retval = db.SaveChanges();
            }
            return retval > 0;
        }

        public bool DeleteTodo(string id)
        {
            var retval = 0;
            using (var db = new TodoContext())
            {
                var todo = db.Todos.First(t => t.TodoId == Convert.ToInt32(id));
                db.Todos.Remove(todo);
                retval = db.SaveChanges();
            }
            return retval > 0;
        }
        
        public bool MarkComplete(TodoItem item)
        {
            var retval = 0;
            using(var db = new TodoContext())
            {
                db.Todos.Update(item);
                retval = db.SaveChanges();
            }
            return retval > 0;
        }
        
        public TodoItem Get(int id)
        {
            using(var db = new TodoContext())
            {
                return db.Todos.First(t => t.TodoId == id);
            }
        }
    }
}
