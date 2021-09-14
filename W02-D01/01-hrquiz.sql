-- 1 --
CREATE TABLE projects (
	proj_id SERIAL PRIMARY KEY,
	proj_name VARCHAR (100) DEFAULT NULL,
	proj_createdon DATE NOT NULL,
	proj_duedate DATE NOT NULL,
	proj_cust_name VARCHAR (100) DEFAULT NULL
)

CREATE TABLE project_assignment (
	pras_proj_id INT,
	pras_employee_id INT,
	pras_startdate DATE NOT NULL,
	pras_enddate DATE NOT NULL,
	pras_status VARCHAR (15) DEFAULT NULL,
	PRIMARY KEY (pras_proj_id,pras_employee_id),
	FOREIGN KEY (pras_proj_id) REFERENCES projects(proj_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (pras_employee_id) REFERENCES employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE
)

-- 2 --
ALTER TABLE projects ADD COLUMN proj_description VARCHAR(100);
ALTER TABLE projects ADD COLUMN proj_status VARCHAR (15);
ALTER TABLE projects ADD COLUMN proj_amount NUMERIC;

-- 3 --
ALTER TABLE projects ADD COLUMN proj_account_mgr INT, ADD CONSTRAINT proj_account_mgr FOREIGN KEY (proj_account_mgr) REFERENCES employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 4 --
INSERT INTO projects (proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr) VALUES ('E-COMMERCE',now(),now()+interval '90 day','TELKOMSEL',NULL,'IN PROGRESS',1000,100);
INSERT INTO projects (proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr) VALUES ('TRAVELOKA',now(),now()+interval '90 day','XL',NULL,'IN PROGRESS',2000,100);
INSERT INTO projects (proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr) VALUES ('TIKET.COM',now(),now()+interval '90 day','INDOSAT',NULL,'IN PROGRESS',1500,100);

-- 5 --
INSERT INTO project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES (1,104,now(),NULL,'ASSIGNED');
INSERT INTO project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES (1,105,now(),now() + interval '10 day','COMPLETED');
INSERT INTO project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES (1,106,now(),NULL,'INPROGRESS');
INSERT INTO project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES (2,104,now(),NULL,'ASSIGNED');
INSERT INTO project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES (2,105,now(),now() + interval '10 day','COMPLETED');
INSERT INTO project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES (2,106,now(),NULL,'INPROGRESS');

-- 6 --
SELECT a.employee_id, a.first_name, a.last_name, a.email, a.phone_number, a.hire_date, a.job_id, a.manager_id, a.department_id FROM employees AS a, project_assignment AS b WHERE a.employee_id = b.pras_employee_id AND b.pras_status = 'COMPLETED';