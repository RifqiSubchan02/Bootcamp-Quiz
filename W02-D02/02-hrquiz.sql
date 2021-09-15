-- 1 --
SELECT regions.region_id, regions.region_name, countries.country_id, countries.country_name 
FROM regions, countries 
WHERE regions.region_id = countries.region_id ORDER BY region_id, country_id ASC;

-- 2 --
SELECT regions.region_id, regions.region_name, COUNT(countries.country_id)total_countries 
FROM regions, countries 
WHERE regions.region_id = countries.region_id 
GROUP BY regions.region_id 
ORDER BY region_id ASC;

-- 3 --
SELECT countries.country_id, countries.country_name, locations.location_id, locations.street_address, locations.postal_code, locations.city, locations.state_province 
FROM regions, countries, locations 
WHERE countries.region_id = 1 AND countries.country_id = locations.country_id 
GROUP BY countries.country_id, locations.location_id 
ORDER BY country_id ASC;

-- 4 --
SELECT departments.department_id, departments.department_name, locations.location_id 
FROM departments, locations, countries 
WHERE departments.location_id = locations.location_id AND locations.country_id = countries.country_id AND countries.region_id = 2;

-- 5 --
SELECT region_name, COUNT(department_id)total_departments
	FROM regions
		JOIN countries ON regions.region_id = countries.region_id
		JOIN locations ON countries.country_id = locations.country_id 
		JOIN departments ON locations.location_id = departments.location_id 
GROUP BY regions.region_id
ORDER BY region_name ASC;

-- 6 --
SELECT country_name, COUNT(department_id)total_departments
	FROM countries
		JOIN locations ON countries.country_id = locations.country_id 
		JOIN departments ON locations.location_id = departments.location_id 
GROUP BY countries.country_id
ORDER BY country_name ASC;

-- 7 --
SELECT country_name, COUNT(department_id)total_departments
	FROM countries 
		JOIN locations ON countries.country_id = locations.country_id 
		JOIN departments ON locations.location_id = departments.location_id 
GROUP BY country_name
ORDER BY country_name DESC LIMIT 1;

-- 8 --
SELECT departments.department_id, departments.department_name, COUNT(employees.employee_id)total_emps
  FROM departments
    JOIN employees ON departments.department_id = employees.department_id
GROUP BY departments.department_id
ORDER BY total_emps ASC;

-- 9 --
SELECT departments.department_id, departments.department_name, COUNT(employees.employee_id)total_emps
  FROM regions
    JOIN countries ON regions.region_id = countries.region_id
    JOIN locations ON countries.country_id = locations.country_id
    JOIN departments ON locations.location_id = departments.location_id
    JOIN employees ON departments.department_id = employees.department_id
WHERE regions.region_id = 2
GROUP BY departments.department_id
ORDER BY total_emps ASC;

-- 10 --
SELECT 
	employee_id, 
	first_name, 
	last_name, 
	salary, 
	EXTRACT(YEAR FROM age(now(), hire_date))masa_kerja, 
	CASE
		WHEN EXTRACT(YEAR FROM age(now(), hire_date)) >= 25 THEN salary * 5
		ELSE salary * 2
	END AS bonus
FROM employees;

-- 11 --
SELECT masa_kerja, SUM(bonus)bonus_per_masa_kerja
	FROM (
		SELECT  
			EXTRACT(YEAR FROM age(now(), hire_date))masa_kerja, 
		CASE
			WHEN EXTRACT(YEAR FROM age(now(), hire_date)) >= 25 THEN salary * 5
			ELSE salary * 2
		END AS bonus
		FROM employees) AS t
GROUP BY masa_kerja
ORDER BY masa_kerja ASC;

-- 12 --
SELECT 
	SUM(COALESCE(mk_satu,null,0)) "15 <= masa kerja <=25",
	SUM(COALESCE(mk_dua,null,0)) " 25 < masa kerja <=30",
	SUM(COALESCE(mk_tiga,null,0)) "30 < masa kerja <=35" 
FROM (
	SELECT 
	CASE 
		WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 15 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=25 THEN COUNT(employee_id) 
		END mk_satu,
	CASE 
		WHEN EXTRACT(YEAR FROM age(now(),hire_date)) > 25 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=30 THEN COUNT(employee_id) 
		END mk_dua,
	CASE 
		WHEN EXTRACT(YEAR FROM age(now(),hire_date)) > 30 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=35 THEN COUNT(employee_id) 
		END mk_tiga
	FROM employees e
	GROUP BY hire_date
	) AS t

-- 13 --
SELECT 
	department_id,
	department_name,
	SUM(COALESCE(mk_satu,NULL,0)) "15 <= masa kerja <=25",
	SUM(COALESCE(mk_dua,NULL,0)) " 25 < masa kerja <=30",
	SUM(COALESCE(mk_tiga,NULL,0)) "30 < masa kerja <=35" 
FROM (
	SELECT 
		d.department_id,
		department_name,
	CASE 
		WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 15 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=25 THEN COUNT(employee_id) 
		END mk_satu,
	CASE 
		WHEN EXTRACT(YEAR FROM age(now(),hire_date)) > 25 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=30 THEN COUNT(employee_id) 
		END mk_dua,
	CASE 
		WHEN EXTRACT(YEAR FROM age(now(),hire_date)) > 30 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=35 THEN COUNT(employee_id) 
		END mk_tiga
	FROM employees e
		JOIN departments d ON e.department_id = d.department_id 
	GROUP BY d.department_id,department_name,hire_date
	) AS t
GROUP BY department_id,department_name
ORDER BY department_name;