using Microsoft.EntityFrameworkCore;

namespace DotNetCoreTodo.Models
{
    public interface ITodoRepository
    {
        bool Add(TodoItem item);
        DbSet<TodoItem> GetAll();
        bool UpdateTodo(TodoItem item);
        bool DeleteTodo(string id);
        TodoItem Get(int id);
    }
}
