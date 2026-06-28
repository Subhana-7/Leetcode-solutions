# Write your MySQL query statement below
SELECT 
    p.product_name,
    SUM(unit) AS unit
FROM Products p
LEFT JOIN Orders o
    on p.product_id = o.product_id
WHERE o.order_date LIKE '2020-02-%'
GROUP BY o.product_id, p.product_name
HAVING SUM(o.unit) >= 100;