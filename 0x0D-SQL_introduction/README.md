Introduction

MySQL is one of the most popular and widely used open-source relational database management systems.

It's a fast, simple, and scalable SQL-based system, and it represents an integral component of the LAMP stack that runs much of the Internet.

$ sudo apt update
$ sudo apt install mysql-server
...
$ mysql --version
mysql  Ver 8.0.25-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))
$

SQL technique: functions
Sometimes, the information that we need is not actually stored in the database, but has to be computed in some way from the stored data. In our order entry example, there are two derived attributes (/subtotal in OrderLines and /total in Orders) that are part of the class diagram but not part of the relation scheme. We can compute these by using SQL functions in the SELECT statement.

There are many, many functions in any implementation of SQL—far more than we can show here. Unfortunately, many of the functions are defined quite differently in different database packages, so you should always consult a reference manual for your specific software.

Computed columns
We can compute values from information that is in a table simply by showing the computation in the SELECT clause. Each computation creates a new column in the output table, just as if it were a named attribute.

Example: We want to find the subtotal for each line of the OrderLines table, just as shown in the UML class diagram. Obviously, the total of each line is simply the unit sale price times the quantity ordered, so we don’t even need a function yet—just the computation. We have included all three of the OrderLines PK attributes in the SELECT clause attribute list, to be sure that we show the subtotal for each distinct line.
~                                                             
