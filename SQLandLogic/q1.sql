select staff.first_name, stafflast_name from staff
inner join payment on staff.staff_id = payment.staff_id ORDER BY payment.payment_date