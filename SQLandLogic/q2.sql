select customer.first_name, customer.last_name, payment.amount
inner join payment on customer.customer_id = payment.customer_id ORDER BY payment.amount