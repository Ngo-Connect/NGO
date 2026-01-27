using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using NGO_Connect_LoginAndRegister_API.Models;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace NGO_Connect_LoginAndRegister_API.Data;

public partial class P01NgoConnectContext : DbContext
{
    public P01NgoConnectContext()
    {
    }

    public P01NgoConnectContext(DbContextOptions<P01NgoConnectContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BeneficiaryRequest> BeneficiaryRequests { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Donation> Donations { get; set; }

    public virtual DbSet<Item> Items { get; set; }

    public virtual DbSet<RequestFulfilLog> RequestFulfilLogs { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<State> States { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public DbSet<Story> Stories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<BeneficiaryRequest>(entity =>
        {
            entity.HasKey(e => e.RequestId).HasName("PRIMARY");

            entity.ToTable("beneficiary_request");

            entity.HasIndex(e => e.BeneficiaryId, "fk_req_beneficiary");

            entity.HasIndex(e => e.ItemId, "fk_req_item");

            entity.Property(e => e.RequestId).HasColumnName("request_id");
            entity.Property(e => e.AmountNeeded)
                .HasPrecision(10, 2)
                .HasColumnName("amount_needed");
            entity.Property(e => e.BeneficiaryId).HasColumnName("beneficiary_id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.ItemId).HasColumnName("item_id");
            entity.Property(e => e.RequestDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("request_date");
            entity.Property(e => e.RequestStatus)
                .HasMaxLength(50)
                .HasColumnName("request_status");

            entity.HasOne(d => d.Beneficiary).WithMany(p => p.BeneficiaryRequests)
                .HasForeignKey(d => d.BeneficiaryId)
                .HasConstraintName("fk_req_beneficiary");

            entity.HasOne(d => d.Item).WithMany(p => p.BeneficiaryRequests)
                .HasForeignKey(d => d.ItemId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_req_item");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PRIMARY");

            entity.ToTable("cities");

            entity.HasIndex(e => e.StateId, "fk_state_cities");

            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CityName)
                .HasMaxLength(100)
                .HasColumnName("city_name");
            entity.Property(e => e.StateId).HasColumnName("state_id");

            entity.HasOne(d => d.State).WithMany(p => p.Cities)
                .HasForeignKey(d => d.StateId)
                .HasConstraintName("fk_state_cities");
        });

        modelBuilder.Entity<Donation>(entity =>
        {
            entity.HasKey(e => e.DonationId).HasName("PRIMARY");

            entity.ToTable("donations");

            entity.HasIndex(e => e.ItemId, "fk_donation_item");

            entity.HasIndex(e => e.UserId, "fk_donation_user");

            entity.Property(e => e.DonationId).HasColumnName("donation_id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.DonationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("donation_date");
            entity.Property(e => e.ItemId).HasColumnName("item_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Item).WithMany(p => p.Donations)
                .HasForeignKey(d => d.ItemId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_donation_item");

            entity.HasOne(d => d.User).WithMany(p => p.Donations)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_donation_user");
        });

        modelBuilder.Entity<Item>(entity =>
        {
            entity.HasKey(e => e.ItemId).HasName("PRIMARY");

            entity.ToTable("items");

            entity.Property(e => e.ItemId).HasColumnName("item_id");
            entity.Property(e => e.ItemName)
                .HasMaxLength(100)
                .HasColumnName("item_name");
        });

        modelBuilder.Entity<RequestFulfilLog>(entity =>
        {
            entity.HasKey(e => e.RequestId).HasName("PRIMARY");

            entity.ToTable("request_fulfil_log");

            entity.Property(e => e.RequestId).HasColumnName("request_id");
            entity.Property(e => e.BenfId).HasColumnName("benf_id");
            entity.Property(e => e.DonationDate)
                .HasColumnType("timestamp")
                .HasColumnName("donation_date");
            entity.Property(e => e.DonationItemId).HasColumnName("donation_item_id");
            entity.Property(e => e.DonorId)
                .HasMaxLength(45)
                .HasColumnName("donor_id");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.HasIndex(e => e.RoleName, "role_name").IsUnique();

            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.StateId).HasName("PRIMARY");

            entity.ToTable("states");

            entity.HasIndex(e => e.StateName, "state_name").IsUnique();

            entity.Property(e => e.StateId).HasColumnName("state_id");
            entity.Property(e => e.StateName)
                .HasMaxLength(100)
                .HasColumnName("state_name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.RoleId, "fk_role");

            entity.HasIndex(e => e.CityId, "fk_users_city");

            entity.HasIndex(e => e.StateId, "fk_users_state");

            entity.HasIndex(e => e.PanNo, "pan_no_UNIQUE").IsUnique();

            entity.HasIndex(e => e.RegNo, "reg_no_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Username, "username").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.AccountStatus)
                .HasMaxLength(45)
                .HasColumnName("account_status");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.PanNo)
                .HasMaxLength(15)
                .HasColumnName("pan_no");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(20)
                .HasColumnName("phone_no");
            entity.Property(e => e.RegNo).HasColumnName("reg_no");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.StateId).HasColumnName("state_id");
            entity.Property(e => e.Username)
                .HasMaxLength(50)
                .HasColumnName("username");

            entity.HasOne(d => d.City).WithMany(p => p.Users)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("fk_users_city");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_role");

            entity.HasOne(d => d.State).WithMany(p => p.Users)
                .HasForeignKey(d => d.StateId)
                .HasConstraintName("fk_users_state");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
