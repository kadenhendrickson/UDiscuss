using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace UDiscuss.Models
{
    public partial class mainContext : DbContext
    {
        public mainContext()
        {
        }

        public mainContext(DbContextOptions<mainContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Class> Classes { get; set; } = null!;
        public virtual DbSet<Post> Posts { get; set; } = null!;
        public virtual DbSet<PostCategory> PostCategories { get; set; } = null!;
        public virtual DbSet<Reply> Replies { get; set; } = null!;
        public virtual DbSet<Roster> Rosters { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connectionInfo = File.ReadAllText(@"dbConnection.txt").Trim();
                optionsBuilder.UseMySql(connectionInfo, Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.6.7-mariadb"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("latin1_swedish_ci")
                .HasCharSet("latin1");

            modelBuilder.Entity<Class>(entity =>
            {
                entity.ToTable("Class");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_general_ci");

                entity.Property(e => e.ClassId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("ClassID");

                entity.Property(e => e.FullName).HasMaxLength(100);

                entity.Property(e => e.Semester).HasMaxLength(10);

                entity.Property(e => e.ShortName).HasMaxLength(50);

                entity.Property(e => e.Year)
                    .HasColumnType("year(4)")
                    .HasDefaultValueSql("year(current_timestamp())");
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.AuthorId, "Post_FK");

                entity.HasIndex(e => e.CategoryId, "Post_FK_1");

                entity.HasIndex(e => new { e.ClassId, e.RelativeId }, "Post_UN")
                    .IsUnique();

                entity.Property(e => e.PostId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("PostID");

                entity.Property(e => e.AuthorId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("AuthorID");

                entity.Property(e => e.Body).HasColumnType("text");

                entity.Property(e => e.CategoryId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("CategoryID");

                entity.Property(e => e.ClassId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("ClassID");

                entity.Property(e => e.DateCreated)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("current_timestamp()");

                entity.Property(e => e.RelativeId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("RelativeID");

                entity.Property(e => e.Title).HasMaxLength(50);

                entity.Property(e => e.Type)
                    .HasMaxLength(20)
                    .HasDefaultValueSql("'question'");

                entity.HasOne(d => d.Author)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.AuthorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Post_FK");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Post_FK_1");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Post_FK_2");
            });

            modelBuilder.Entity<PostCategory>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PRIMARY");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.ClassId, "PostCategories_FK");

                entity.HasIndex(e => new { e.Name, e.ClassId }, "PostCategories_UN")
                    .IsUnique();

                entity.Property(e => e.CategoryId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("CategoryID");

                entity.Property(e => e.ClassId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("ClassID");

                entity.Property(e => e.Name).HasMaxLength(25);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.PostCategories)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PostCategories_FK");
            });

            modelBuilder.Entity<Reply>(entity =>
            {
                entity.ToTable("Reply");

                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.ParentReply, "Reply_FK");

                entity.HasIndex(e => e.PostId, "Reply_FK_1");

                entity.HasIndex(e => e.AuthorId, "Reply_FK_2");

                entity.Property(e => e.ReplyId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("ReplyID");

                entity.Property(e => e.AuthorId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("AuthorID");

                entity.Property(e => e.Body).HasColumnType("text");

                entity.Property(e => e.DateCreated)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("current_timestamp()");

                entity.Property(e => e.ParentReply).HasColumnType("int(10) unsigned");

                entity.Property(e => e.PostId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("PostID");

                entity.HasOne(d => d.Author)
                    .WithMany(p => p.Replies)
                    .HasForeignKey(d => d.AuthorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Reply_FK_2");

                entity.HasOne(d => d.ParentReplyNavigation)
                    .WithMany(p => p.InverseParentReplyNavigation)
                    .HasForeignKey(d => d.ParentReply)
                    .HasConstraintName("Reply_FK");

                entity.HasOne(d => d.Post)
                    .WithMany(p => p.Replies)
                    .HasForeignKey(d => d.PostId)
                    .HasConstraintName("Reply_FK_1");
            });

            modelBuilder.Entity<Roster>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ClassId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("Roster");

                entity.HasIndex(e => e.ClassId, "Roster_FK");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("UserID");

                entity.Property(e => e.ClassId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("ClassID");

                entity.Property(e => e.Role)
                    .HasMaxLength(1)
                    .HasDefaultValueSql("'s'")
                    .IsFixedLength();

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Rosters)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Roster_FK");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Rosters)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Roster_FK_1");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasCharSet("utf8mb4")
                    .UseCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.Email, "UNIQUE_EMAIL")
                    .IsUnique();

                entity.Property(e => e.UserId)
                    .HasColumnType("int(10) unsigned")
                    .HasColumnName("UserID");

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
