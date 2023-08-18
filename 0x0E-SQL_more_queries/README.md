Introduction
MySQL is an open-source relational database management system. It is commonly deployed as part of the LAMP stack (which stands for Linux, Apache, MySQL, and PHP) and, as of this writing, is the most popular open-source database in the world.

This guide outlines how to create a new MySQL user and grant them the permissions needed to perform a variety of actions.

Prerequisites
In order to follow along with this guide, you’ll need access to a MySQL database. This guide assumes that this database is installed on a virtual private server running Ubuntu 20.04, though the principles it outlines should be applicable regardless of how you access your database.

If you don’t have access to a MySQL database and would like to set one up yourself, you can follow one of our guides on How To Install MySQL. Again, regardless of your server’s underlying operating system, the methods for creating a new MySQL user and granting them permissions will generally be the same.

You could alternatively spin up a MySQL database managed by a cloud provider. For details on how to spin up a DigitalOcean Managed Database, see our product documentation.

Please note that any portions of example commands that you need to change or customize will be highlighted like this throughout this guide.

Creating a New User
Upon installation, MySQL creates a root user account which you can use to manage your database. This user has full privileges over the MySQL server, meaning it has complete control over every database, table, user, and so on. Because of this, it’s best to avoid using this account outside of administrative functions. This step outlines how to use the root MySQL user to create a new user account and grant it privileges.

In Ubuntu systems running MySQL 5.7 (and later versions), the root MySQL user is set to authenticate using the auth_socket plugin by default rather than with a password. This plugin requires that the name of the operating system user that invokes the MySQL client matches the name of the MySQL user specified in the command. This means that you need to precede the mysql command with sudo to invoke it with the privileges of the root Ubuntu user in order to gain access to the root MySQL user:

## $ sudo mysql
Note: If your root MySQL user is configured to authenticate with a password, you will need to use a different command to access the MySQL shell. The following will run your MySQL client with regular user privileges, and you will only gain administrator privileges within the database by authenticating with the correct password:

## $ mysql -u root -p
Once you have access to the MySQL prompt, you can create a new user with a CREATE USER statement. These follow this general syntax:

### mysql> CREATE USER 'username'@'host' IDENTIFIED WITH authentication_plugin BY 'password';

After CREATE USER, you specify a username. This is immediately followed by an @ sign and then the hostname from which this user will connect. If you only plan to access this user locally from your Ubuntu server, you can specify localhost. Wrapping both the username and host in single quotes isn’t always necessary, but doing so can help to prevent errors.

You have several options when it comes to choosing your user’s authentication plugin. The auth_socket plugin mentioned previously can be convenient, as it provides strong security without requiring valid users to enter a password to access the database. But it also prevents remote connections, which can complicate things when external programs need to interact with MySQL.

As an alternative, you can leave out the WITH authentication_plugin portion of the syntax entirely to have the user authenticate with MySQL’s default plugin, caching_sha2_password. The MySQL documentation recommends this plugin for users who want to log in with a password due to its strong security features.

Run the following command to create a user that authenticates with caching_sha2_password. Be sure to change sammy to your preferred username and password to a strong password of your choosing:
