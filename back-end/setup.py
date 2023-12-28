from sqlalchemy import create_engine, sql

engine = create_engine('mysql+mysqlconnector://root:senha12345678@localhost:3306/mite')
conn = engine.connect()
sql_query = sql.text('SELECT * FROM pessoas;')
response = conn.execute(sql_query)

for c in response:
    print(c)