# Write your MySQL query statement below
WITH cte AS
(
    SELECT *,
           CASE
               WHEN operation = 'Buy' THEN -price
               ELSE price
           END AS gain_loss
    FROM Stocks
)

SELECT stock_name,
       SUM(gain_loss) AS capital_gain_loss
FROM cte
GROUP BY stock_name;