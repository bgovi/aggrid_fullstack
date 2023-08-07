# type: ignore
"""
This module uses postgres sql strings as template and creates replacement query objects

#no spaces. no special characters
query_description

interface = {
    "column_name": {'is_null', 'is_empty', 'is_undefined', 'description', type, 'is_returned'}
}
returns = {
    'idx': {description:asd, type:xsf, alias}
}
query = {

}

quickly generate api template



query
select
insert
update
delete
execute

"""
import sys
import os
from sqlglot import parse, exp, transpile


path_to_server = ""

query_types = [
    "bigquery", "clickhouse", "databricks", "dialect", "duckdb",
    "hive", "mysql", "oracle", "postgres", "presto", "redshift",
    "snowflake", "spark", "spark2", "sqlite", "starrocks", "teradata",
    "trino", "tsql"
]


#key is seqeulize name
#value is sqlglot name
sql_servers ={
    "pg": "postgres",
    "mysql2": "mysql",
    "mariadb": "mariadb",
    "sqlite3": "sqlite3",
    "tedious": "sql_server",
    "oracledb": "oracledb"
}