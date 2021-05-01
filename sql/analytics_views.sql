create or replace view a_dvd_rental as
	select r.rental_id, r.rental_date, r.return_date, r.customer_id, sf.store_id, i.film_id, p.amount
		from rental r 
			join staff sf on sf.staff_id = r.staff_id 
			join store s on s.store_id = sf.store_id 
			join inventory i on i.inventory_id = r.inventory_id 
			join film f on f.film_id = i.film_id
			join payment p on p.rental_id = r.rental_id;
			
-- select * from a_dvd_rental;
		
create or replace view a_dvd_store as
	select s.store_id, a.city_id, c.country_id
		from store s 
			join address a on a.address_id = s.address_id 
			join city c on c.city_id = a.city_id; 
			
--- select * from a_dvd_store;