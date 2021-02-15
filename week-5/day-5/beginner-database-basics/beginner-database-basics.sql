-- PROBLEM #1: TABLE PERSON
-- ////////////////////////////////////////////
-- Create a table called person that records a person's id, name, age, height ( in cm ), city, favorite_color.
        -- id should be an auto-incrementing id/primary key - Use type: SERIAL
CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    age INTEGER,
    height INTEGER,
    city VARCHAR(200),
    favorite_color VARCHAR(200)
);

-- Add 5 different people into the person database.
    -- Remember to not include the person_id because it should auto-increment.
INSERT INTO person 
(name, age, height, city, favorite_color)
VALUES ('Jake', 34, 191, 'New York','Blue');

INSERT INTO person 
(name, age, height, city, favorite_color)
VALUES ('Stacy', 34, 178, 'New York', 'Blush');

INSERT INTO person 
(name, age, height, city, favorite_color)
VALUES ('Yuta', 36, 175, 'Brooklyn','Jade');

INSERT INTO person 
(name, age, height, city, favorite_color)
VALUES ('Vashti', 40, 166, 'Los Angelos','Crimson');

INSERT INTO person 
(name, age, height, city, favorite_color)
VALUES ('Nicky', 33, 1452, 'South Hampton','Plum');

-- List all the people in the person table by height from tallest to shortest.
SELECT *
FROM person
ORDER BY height DESC;

-- List all the people in the person table by height from shortest to tallest.
SELECT *
FROM person
ORDER BY height ASC;

-- List all the people in the person table by age from oldest to youngest.
SELECT *
FROM person
ORDER BY age DESC;

-- List all the people in the person table older than age 20.
SELECT *
FROM person
WHERE age > 20;

-- List all the people in the person table that are exactly 18.
SELECT *
FROM person
WHERE age = 18;

-- List all the people in the person table that are less than 20 and older than 30.
SELECT *
FROM person
WHERE age > 30 OR age < 20;

-- List all the people in the person table that are not 27 (Use not equals).
SELECT *
FROM person
WHERE age != 27;

-- List all the people in the person table where their favorite color is not red.
SELECT *
FROM person
WHERE favorite_color != 'red';

-- List all the people in the person table where their favorite color is not red and is not blue.
SELECT *
FROM person
WHERE favorite_color != 'red' AND favorite_color != 'blue'; 

-- List all the people in the person table where their favorite color is orange or green.
SELECT *
FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';

-- List all the people in the person table where their favorite color is orange, green or blue (use IN).
SELECT *
FROM person
WHERE favorite_color IN('orange', 'green', 'blue');

-- List all the people in the person table where their favorite color is yellow or purple (use IN).
SELECT *
FROM person
WHERE favorite_color IN('yellow', 'purple');





-- PROBLEM #2: TABLE ORDERS
-- ////////////////////////////////////////////

-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(200),
    product_price NUMERIC,
    quantity INTEGER
);

-- Add 5 orders to the orders table.
        -- Make orders for at least two different people.
        -- person_id should be different for different people.

INSERT INTO orders
(person_id, product_name, product_price, quantity)
VALUES (2, 'product_1', 45.50, 2);

INSERT INTO orders
(person_id, product_name, product_price, quantity)
VALUES (45, 'product_75', 21.80, 4);

INSERT INTO orders
(person_id, product_name, product_price, quantity)
VALUES (23, 'product_21', 15.25, 6);

INSERT INTO orders
(person_id, product_name, product_price, quantity)
VALUES (12, 'product_3', 32.50, 3);

INSERT INTO orders
(person_id, product_name, product_price, quantity)
VALUES (8, 'product_14', 78.90, 1);

-- Select all the records from the orders table.
SELECT *
FROM oders;

-- Calculate the total number of products ordered.
SELECT sum(quantity)
FROM orders;

-- Calculate the total order price.
SELECT sum(product_price * quantity)
FROM orders;

-- Calculate the total order price by a single person_id.
SELECT sum(product_price * quantity)
FROM orders
WHERE person_id = 2;



-- PROBLEM #3: TABLE ARTIST
-- ////////////////////////////////////////////
-- Add 3 new artists to the artist table. ( It's already created )
INSERT INTO artists
(name)
VALUES ('Monet');

-- Select 10 artists in reverse alphabetical order.
SELECT *
FROM artists
ORDER BY name DESC
LIMIT 10;

-- Select 5 artists in alphabetical order.
SELECT *
FROM artists
ORDER BY name ASC
LIMIT 5;

-- Select all artists that start with the word 'Black'.
SELECT *
FROM artists
WHERE name LIKE 'Black%'

-- Select all artists that contain the word 'Black'.
SELECT *
FROM artists
WHERE name LIKE '%Black%'




-- PROBLEM #4: TABLE EMPLOYEE
-- ////////////////////////////////////////////
-- List all employee first and last names only that live in Calgary.
SELECT first_name, last_name
FROM employee
WHERE city = 'Calgary';

-- Find the birthdate for the youngest employee.
SELECT max(birth_date)
FROM employee;

-- Find the birthdate for the oldest employee.
SELECT min(birth_date)
FROM employee;

-- Find everyone that reports to Nancy Edwards (Use the ReportsTo column).
        -- You will need to query the employee table to find the Id for Nancy Edwards
SELECT *
FROM employee 
WHERE reports_to = 'Nancy Edwards';

-- Count how many people live in Lethbridge.
SELECT count(*)
FROM employee 
WHERE city = 'lethbridge';


-- PROBLEM #5: TABLE INVOICE
-- ////////////////////////////////////////////
-- Count how many orders were made from the USA.
SELECT count(*)
FROM invoice
WHERE billing_country = 'USA';

-- Find the largest order total amount.
SELECT max(total)
FROM invoice;

-- Find the smallest order total amount.
SELECT min(total)
FROM invoice;

-- Find all orders bigger than $5.
SELECT *
FROM invoice
WHERE total > 5;

-- Count how many orders were smaller than $5.
SELECT *
FROM invoice
WHERE total < 5;

-- Count how many orders were in CA, TX, or AZ (use IN).
SELECT *
FROM invoice
WHERE billing_state IN('CA', 'TX', 'AZ');

-- Get the average total of the orders.
SELECT avg(total)
FROM invoice;

-- Get the total sum of the orders.
SELECT  sum(total)
FROM invoice;