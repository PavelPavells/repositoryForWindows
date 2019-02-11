//Part1
1) cnum;
2)rating;
3)Запись, полеж
4)Строки неупорядочены по умолчанию;
//Part2
1)Символ(или текст) и номер;
2)Нет;
3)DML
4)Спец значение;
//Part 3;
1)SELECT onum, amt, odate
     FROM Orders;
2)SELECT * 
    FROM Customers
    WHERE snum = 1001;
3)SELECT city, sname, snumm, comm
    FROM Salespeople;
4)SELECT rating, cname
    FROM Customers
    WHERE city = 'SanJose';
5)SELECT DISTINCT snum  
    FROM Orders;
Part 4;
1)SELECT *
    FROM Orders
    WHERE amt > 1000;
2) SELECT sname, city   
    FROM Salespeople
    WHERE city = 'London' AND comm > .10;
3) SELECT * 
    FROM Customers
    WHERE NOT rating <= 100 OR city = 'ROME';

    SELECT * 
        FROM Customers
        WHERE NOT rating <= 100 OR city = 'Rome';
    SELECT * 
        FROM Customers
        WHERE NOT (rating <= 100 AND city <> 'Rome');
4) SELECT * FROM Salespeople;

// Part 5;
1) SELECT *
    FROM Orders
    WHERE odate BETWEEN 10/03/1990 AND 10/04/1990;
2) SELECT *
    FROM Customers 
    WHERE snum IN (1001, 1004);
3) SELECT *
    FROM Customers
    WHERE cname BETWEEN 'A' AND 'H';
4) SELECT * 
    FROM Customers
    WHERE cname LIKE 'C%';
5) SELECT * 
    FROM Orders
    WHERE amt <> 0 AND (amt IS NOT NULL);

    SELECT *
    FROM Orders
    WHERE NOT (amt = 0 OR amt IS NULL);
//Part6
1)SELECT COUNT(*)
        FROM Orders
        WHERE odate = 10/03/1990;
2)  SELECT COUNT (DISTINCT city)
        FROM Customers;
3)  SELECT cnum, MIN (amt)
        FROM Orders
        GROUP BY cnum;
4)  SELECT MIN (cname)    
        FROM Customers
        WHERE cname LIKE 'G%';
5)  SELECT city, MAX (rating)
        FROM Customers
        GROUP BY city;
6)  SELECT odate, COUNT (DISTINCT snum)
        FROM Orders
        GROUP BY odate;
//Part7
1)  SELECT onum, snum, amt * .12
        FROM Orders;
2)  SELECT 'For the city', city, ', the highest rating is:', MAX(rating)
        FROM Customers
        GROUP BY city;
3)  SELECT rating, cname, cnum
        FROM Customers
        ORDER BY rating DESC
4)  SELECT odate, SUM (amt)
        FROM Orders
        GROUP BY odate
        ORDER BY 2 DESC;
//Part8
1)  SELECT onum, cname
        FROM Orders, Customers
        WHERE Customers.cnum = Orders.cnum;
2)  SELECT onum, cname, sname
        FROM Orders, Customers, Salespeople
        WHERE Customers.cnum = Orders.cnum AND Salespeople.snum = Orders.snum;
3)  SELECT cname, sname, comm
        FROM Salespeople, Customers
        WHERE Salespeople.snum = Customers.snum AND comm * .12;
4)  SELECT onum, comm * amt
        FROM Salespeople, Orders, Customers
        WHERE rating > 100
        AND Orders.cnum = Customers.cnum
        AND Orders.snum = Salespeople.snum;        

        
