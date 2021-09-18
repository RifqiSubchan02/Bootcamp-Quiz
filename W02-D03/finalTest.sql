-- 5 --

-- A
SELECT policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status, policy_due_date FROM t_policy
	JOIN t_client USING(client_number)
WHERE policy_submit_date > '2018-01-15' AND(EXTRACT(MONTH FROM birth_date)) = 9

-- B
SELECT policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status, policy_due_date FROM t_policy
	JOIN t_agent USING(agent_code)
WHERE policy_status = 'INFORCE' AND agent_office = 'JAKARTA';

-- C
SELECT 
	policy_number,
	agent_code,
	((premium/commission)*100)basic_commission
FROM t_policy

-- D
SELECT policy_number,policy_submit_date, (policy_submit_date + interval '30 day')::date
AS policy_due_date
FROM t_policy;

-- E
SELECT 
	*, 
	(premium-(premium*10/100))premium_after_diskon 
FROM t_policy 
ORDER BY premium_after_diskon ASC