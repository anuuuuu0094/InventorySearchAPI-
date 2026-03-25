## Database Schema

The database consists of two main tables: **Suppliers** and **Inventory**.

* The **Suppliers** table stores basic supplier details like name and city.
* The **Inventory** table stores product-related data such as product name, quantity, price, and category.

Each inventory item is linked to a supplier using `supplier_id`, creating a one-to-many relationship (one supplier can have multiple inventory items).

---

## Why I Chose SQL

I chose SQL (PostgreSQL) because this project involves clear relationships between entities (suppliers and inventory).

SQL makes it easy to:

* maintain data integrity using foreign keys
* perform joins between tables
* run aggregation queries like total inventory value

---

## Optimization Suggestion

To improve performance for larger datasets, I would add an **index on frequently queried fields** such as `product_name` and `supplier_id`.

This would make search and join operations faster.
