using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DotNetCoreTodo.Models;

namespace DotNetCoreTodo.Migrations
{
    [DbContext(typeof(TodoContext))]
    [Migration("20161206202631_TodoList")]
    partial class TodoList
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752");

            modelBuilder.Entity("DotNetCoreTodo.Models.TodoItem", b =>
                {
                    b.Property<int>("TodoId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsCompleted");

                    b.Property<string>("Name");

                    b.HasKey("TodoId");

                    b.ToTable("Todos");
                });
        }
    }
}
