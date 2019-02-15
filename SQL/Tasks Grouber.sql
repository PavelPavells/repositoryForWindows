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
//Part9
1)   SELECT first.sname, second.sname
        FROM Salespeople first, Salespeople second
        WHERE first.city = second.city AND first.sname < second.sname;
2)   SELECT cname, first.onum, second.onum      
        FROM Orders first, Orders second, Customers
        WHERE first.cnum = second.cnum 
        AND first.cnum = Customers.cnum
        AND first onum < second.onum;
3)   SELECT a.cname, a.city
        FROM Customers a, Customers b
        WHERE a.rating = b.rating
        AND b.cnum = 2001;
//Part10
1)   SELECT *
        From Orders
        WHERE cnum = (SELECT cnum
                            FROM Customers
                            WHERE cname = 'Cisneros');
     SELECT *
        From Orders
        WHERE cnum IN (SELECT cnum
                            FROM Customers
                            WHERE cname = 'Cisneros');
2)   SELECT DISTINCT cname, rating
        FROM Customers, Orders
        WHERE amt > (SELECT AVG(amt)
                     FROM Orders)
                     AND Orders.cnum = Customers.cnum;
3)   SELECT snum, SUM(amt)
        FROM Orders
        GROUP BY snum
        HAVING SUM(amt) > (SELECT MAX(amt)
                                FROM Orders);
//Part11
1)   SELECT cnume, cname
        FROM Customers outer
        WHERE rating = (SELECT MAX(rating)
                        FROM Customers inner
                        WHERE inner.city = outer.city);
2) //Соотнесенный подзапрос
     SELECT snum, sname
        FROM Salespeople main
        WHERE city IN (SELECT city
        FROM Customers inner
        WHERE inner.snum < > main.snum);
   //Объединение
     SELECT DISTINCT first.snum, sname
        FROM Salespeople first, Customers second
        WHERE first.city = second.city AND first.snum <> second.snum;
//Part12
1) SELECT *
        FROM Salespeople first
        WHERE EXISTS (SELECT * 
                        FROM Customers second
                        WHERE first.snum = second.snum 
                        AND rating = 300);
2) SELECT a.snum, sname, a.city, comm
        FROM Salespeople a, Customers b
        WHERE a.snum = b.snum 
        AND b.rating = 300;
3) SELECT *
        FROM Salespeople a
        WHERE EXISTS (SELECT *
                        FROM Customers b
                        WHERE b.city = a.city
                        AND a.snum <> b.snum);
4) SELECT *
        FROM Customers a
        WHERE EXISTS (SELECT *
                        FROM Orders b
                        WHERE a.snum = b.snum
                        AND a.cnum <> b.cnum);
//Part13
1) SELECT *
        FROM Customers
        WHERE rating >= ANY (SELECT rating
                                FROM Customers
                                WHERE snum = 1002);
2) SELECT *
        FROM Salespeople
        WHERE city <> ALL (SELECT city
                                FROM Customers);
2.1)SELECT *
        FROM Salespeople
        WHERE NOT city = ANY (SELECT city
                                FROM Customers);
3) SELECT *
        FROM Orders
        WHERE amt > ALL (SELECT amt     
                                FROM Orders a, Customers b
                                WHERE a.cnum = b.cnum
                                AND b.city = 'London');
4) SELECT *
        FROM Orders
        WHERE amt > (SELECT MAX(amt)
                        FROM Orders a, Customers b
                        WHERE a.cnum = b.cnum
                        AND b.city = 'London');
//Part14
1) SELECT cname, city, rating, 'High rating'
        FROM Customers
        WHERE rating >= 200

        UNION

        SELECT cname, city, rating, ' Low rating'
        FROM Customers
        WHERE rating < 200;
2) SELECT cnum, cname
        FROM Customers a
        WHERE 1 < (SELECT COUNT(*)
                        FROM Orders b
                        WHERE a.cnum = b.cnum)

        UNION

        SELECT snum, sname
        FROM Salespeople a
        WHERE 1 < (SELECT COUNT(*)
                        FROM Orders b
                        WHERE a.snum = b.snum)
        ORDER BY 2;
3) SELECT snum
        FROM Salespeople
        WHERE city = 'San Jose'

        UNION

        (SELECT cnum
         FROM Customers
         WHERE city = 'San Jose'

         UNION ALL

         SELECT onum
         FROM Orders
         WHERE odate = 10/03/1990);
//Part15
1) INSERT INTO Salespeople (city, cname, comm, cnum)
        VALUES ('San Jose', 'Bianco', NULL, 1100);
2) DELETE FROM Orders WHERE cnum = 2006;
3) UPDATE Customers
        SET rating = rating + 100
        WHERE city = 'Rome';
4) UPDATE Customers
        SET snum = 1004
        WHERE snum = 1002;
//Part16
1) INSERT INTO Multicust
        SELECT *
        FROM Salespeople
        WHERE 1 < (SELECT COUNT(*)
                        FROM Customers
                        WHERE Customers.snum = Salespeople.snum);
2) DELETE FROM Customers
        WHERE NOT EXISTS (SELECT *
                                FROM Orders
                                WHERE cnum = Customers.cnum);
3) UPDATE Salespeople
        SET comm = comm + (comm * .2)
        WHERE 3000 < (SELECT SUM(amt)
                        FROM Orders
                        WHERE snum = Salespeople.snum);
//withcheck
  UPDATE Salespeople
        SET comm = comm + (comm * .2)
        WHERE 3000 < (SELECT SUM(amt)
                        FROM Orders
                        WHERE snum = Salespeople.snum)
                AND comm + (comm * .2) < 1.0;
//Part17