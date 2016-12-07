using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCoreTodo.Models
{
    [Table("Todos")]
    public class TodoItem {
        [Key]
        public int TodoId { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; set; }
    }
}
