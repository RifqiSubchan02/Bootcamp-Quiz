CREATE TABLE agent(
  agent_code VARCHAR(5),
  agent_name VARCHAR(50),
  agent_office VARCHAR(50),
  basic_commission INT,
  PRIMARY KEY(agent_code)
);

CREATE TABLE client(
  client_number VARCHAR(5),
  client_name VARCHAR(50),
  birth_date date,
  PRIMARY KEY(client_number)
);

insert into agent values('AG001', 'LIDYA', 'JAKARTA', null), ('AG002', 'RUDI', 'BALI', null), ('AG003', 'DICKY', 'BALI', null), ('AG004', 'DAVID', 'SURABAYA', NULL), ('AG005', 'FARIZ', 'SURABAYA', NULL);
INSERT INTO CLIENT VALUES('CL001', 'WAYNE ROONEY', '5/11/1956'), ('CL002', 'RYAN GIGGS', '9/3/1972'), ('CL003', 'DAVID BECKHAM', '9/3/1985'), ('CL004', 'MICHAEL OWEN', '9/3/2012');

CREATE TABLE T_POLICY(
  policy_number varchar(3),
  policy_submit_date date,
  premium int,
  discount int,
  commission int,
  client_number varchar(5),
  agent_code varchar(5),
  policy_status varchar(15),
  policy_due_date date,
  PRIMARY KEY(policy_number),
  foreign key(client_number) references t_client(client_number) on update cascade on delete cascade,
  foreign key(agent_code) references t_agent(agent_code) on update cascade on delete cascade
)

INSERT INTO public.t_policy(
  policy_number, policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status, policy_due_date)
VALUES
  ('001', '1/5/2018', 18600000, 10, 930000, 'CL001', 'AG001', 'INFORCE', null),
  ('002', '1/5/2018', 2500000, 10, 125000, 'CL002', 'AG002', 'INFORCE', null),
  ('003', '1/10/2018', 2500000, 10, 125000, 'CL003', 'AG003', 'TERMINATE', null),
  ('004', '1/25/2018', 4000000, 10, 200000, 'CL003', 'AG002', 'PROPOSAL', null),
  ('005', '1/25/2018', 2625000, 10, 131250, 'CL004', 'AG002', 'INFORCE', null)
