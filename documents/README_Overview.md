# Overview
Process driven data collection. MDM.

Organized data requires specialied data schemas.

Flatten out for user input and output.

As close to a database as possible.

Meant for data thats important and requires accuracy.

As applications become more and more intuitive, 
I get the impression that the tools used to create them get harder and harder.

This is a Low Code High Code framework for collecting and sharing data. Prebuild UI components allow for fast
deployment. However, when needed interfaces allow full programtic access.

Fullstack interface for aggrid. Allows quick deployment of grid based apps.


Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN. If you are passing Auth Token, make sure that the header is called xc-auth.

API Token is a Nano ID with a length of 40. If you are passing API Token, make sure that the header is called xc-token.

https://www.reddit.com/r/selfhosted/comments/11ek60p/nocodb_complex_queries_andor_view_from_raw_sql/


# Tools and Technology
aggrid: https://www.ag-grid.com/
bulma: https://bulma.io/
mathjs: https://mathjs.org/
sequelize: ttps://sequelize.org

sequelize supported databases
postgres
mysql
mariadb
sqlite3
microsoft sql server
oracle

# Initialization


## Meta Data Location and Permissions.


# Client Side Key Variables
__ag_meta__:


# Client Side route configuration


# Server Side Key Variables


# Query based row level security


# Login
oauth only for now () powered by passportjs
initial loging. set user to admin.


# API structure

field:
column:
alias:

fn:



## Admin structure

All are post routes:


```sql
BEGIN;
SELECT ;
COMMIT;
```

key
```json
{
    "x": "abd":
}
```


variable additions


## Use Cases

## Row Level Security


## Conditional Changes 

## ID mapping

## MDM conditions
When data is important. Need to track history. protect limited id (older servers). allow batch changes.


## API Limiting
    Large scale payloads

# UI Interfaces:

* ag grid
* survey
* download
* upload


## APP/Project

## Modules

### Module Types

# Ag grid


## UI Form Components


# Building/Development/Testing


# Order of building and changing.

# API Module Test and builder


# UI Module Test and builder


# App Test












<!-- ```json
   // code for coloring
```
```html
   // code for coloring
```
```js
   // code for coloring
```
```css
   // code for coloring
``` -->
# Ag grid


## UI Form Components

# Survey


## UI Form Components


# Download




# Upload


# Batch Conditional Changes


# aggrid_fullstack
Fullstack interface for aggrid. Allows quick deployment of grid based apps.

symbolic links?

client

user vue router in web history mode


server:
    nodejs
    redis
    python sqlglot
        no transactions. if needed write function

sql_server_proxy:

init_data:


dev_env


```javascript





```


```json
{
    "x": "abd":
}
```