select SUM(payment.amount) from payment 
inner join staff on  payment.staff_id = staff.staff_id where store_id = ... ;