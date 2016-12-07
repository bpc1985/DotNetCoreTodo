using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetCoreTodo.Models;

namespace DotNetCoreTodo.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        ITodoRepository _TodoItems;

        public TodoController(ITodoRepository todoItems)
        {
            _TodoItems = todoItems;
        }

        // GET api/todo
        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return _TodoItems.GetAll();
        }

        // GET api/todo/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var item = _TodoItems.Get(Convert.ToInt32(id));
            if(item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        // POST api/todo
        [HttpPost]
        public IActionResult Post([FromBody]TodoItem todo)
        {
            if(todo == null)
            {
                return BadRequest();
            }
            _TodoItems.Add(todo);
            return new NoContentResult();
        }

        // PUT api/todo/5
        [HttpPut("{todoId}")]
        public IActionResult Put(string id, [FromBody]TodoItem item)
        {
            if(item == null)
            {
                return BadRequest();
            }
            _TodoItems.UpdateTodo(item);
            return new NoContentResult();
        }

        // DELETE api/todo/5
        [HttpDelete("{todoId}")]
        public void Delete(string todoId)
        {
            _TodoItems.DeleteTodo(todoId);
        }
    }
}
