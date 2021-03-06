-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT PRODUCT.ProductName, CATEGORY.CategoryName
FROM PRODUCT
    JOIN CATEGORY ON PRODUCT.CATEGORYID = CATEGORY.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- SELECT * FROM [ORDER]
-- WHERE ORDERDATE < '2012-08-09'

SELECT o.Id, s.CompanyName
FROM [Order] as o JOIN [Shipper] as s on o.ShipVia = s.id
WHERE o.OrderDate < '2012-08-09';


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT P.PRODUCTNAME, OD.QUANTITY
FROM ORDERDETAIL AS OD
    JOIN PRODUCT AS P ON OD.PRODUCTID = P.ID
WHERE OD.ORDERID = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT O.ID, C.COMPANYNAME, E.LASTNAME
FROM [ORDER] AS O
    JOIN CUSTOMER AS C ON O.CUSTOMERID = C.ID
    JOIN EMPLOYEE AS E ON O.EMPLOYEEID = E.ID

