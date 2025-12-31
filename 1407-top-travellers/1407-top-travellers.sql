# Write your MySQL query statement below
select
    name,
    coalesce(travelled_distance, 0) as travelled_distance
from
    (select
        u.id,
        u.name,
        sum(r.distance) over(partition by u.id) as travelled_distance
    from
        users u
        left join
        rides r
        on u.id = r.user_id
    order by
        travelled_distance desc,
        u.name asc) t
group by
    id;