import uvicorn
from fastapi import FastAPI
from sqlglot import parse, exp


app = FastAPI()

query_types = [
    "bigquery", "clickhouse", "databricks", "dialect", "duckdb",
    "hive", "mysql", "oracle", "postgres", "presto", "redshift",
    "snowflake", "spark", "spark2", "sqlite", "starrocks", "teradata",
    "trino", "tsql"
]


default_query = "postgres"

def IsUpdate(stree):
    x = len( list( stree[0].find_all(exp.Update) ) )
    if len(x) == 1:
        return True
    else:
        return False

def IsSelect(stree):
    x = len( list( stree[0].find_all(exp.Select) ) )
    if len(x) == 1:
        return True
    else:
        return False

def IsDelete(stree):
    x = len( list( stree[0].find_all(exp.Delete) ) )
    if len(x) == 1:
        return True
    else:
        return False

def IsInsert(stree):
    x = len( list( stree[0].find_all(exp.Insert) ) )
    if len(x) == 1:
        return True
    else:
        return False

def Transpile(sql, sql_type):
    pass

def ReplaceNameParameter(self, sql):
    pass

def SqlValidator(sql, sql_type):


    try:
        pass

    except:
        x = "Invalid query"


@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=2000)