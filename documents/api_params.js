/*
All routes are post routes this allows json to be sent back and forth. Api calls function
in three steps.

1.) route guard and permissions check:
    checks if users has access to api and if the token sent is valid.
    tokens 
2.) query assembly
3.) database call

post_route:
auth_bearer_token: jwt_token
payload:

jwt_token: {
    user_id: x
    valid_key: ''
}

user_id and valid_key act as a pseudo username/password thats checked in the database for equivalency. If 
a jwt requires to be revoked the valid_key for the user can be changed in the database. The user would need
a new jwt_token with the updated valid_key


Get routes will display informations on the api for calling and testing.
get_routes meta information. allow for search string?

api: runs queries from post routes
test_api. returns assembled query for test routes
prod_api. returns assembled query for production routes



Routes can be built with pseudo code using the model syntax or each route can be
explicitly wrote with pure sql


bullk would be a json array thats parrsed?


//app should only have table read write permissions.
//table creation and deletion controlloed by separate connection.
//admin conneciton explicitly gives permissions to app

//user interface structure
field: expected to be used for pull and push operations. maps to the column name
    fields can only be alphanumeric which prevents injection
vfield: expected to be pulled only. might be a calculation or some other operations
agfield: used for pull and push. however the push data is handled by the server.
    examples are raw expressions that are added or the user_id of the individual
    making the change or the now() function used to track when the operation occured.
sfield: used for text search against rows. generally not returned only used for 
    searching and ranking.

//database structure
column: this is the name of the column in the actual table. field maps to the column name
    when running queries
alias: used to change the name of the column being returned.



Input structure




Output structure

output structure

types: //type information for column. everything is returned as a string
output: // output structure
error: //route error. i.e. permission denied or some other global issue.


api_table
id:
description:
test: false, //for testing uses test routes
config: {
    model:  {}
    routes: {}
    test_routes: {}
}

*/



//use defaults at the sql level if possible
/*
model: 


error table for apis. sends query and data and user id?
*/



let model = {

        'schema': "prod_schema",
        'table': "table_name",
        'view': "view", //meant for select when inner joins are required. primarily meant for select. table name
        //will be used when view is not available.
        'test_schema': "test_schema",
        'test_table': "table_name",
        'test_view': "view_name",
        //if using test schema and test_name the columns are expected to match exactly
        'description': '',
        'bind_type': null, //replacement or bind
        //routes_to_build
        //deleted_at: true

        /*
        if replacement :variable_name
        if bind: $variable_name
        the names are automaticaly used correctly if using model object.
        if writing raw query or expression must properly name variables. 
        doubling will ignore xyz

        :variable_name for replacement
        $variable_name for bind parameter
        */


        'upsert': {
            // "on_conflict": "", //string a-zA-Z0-9 name: //set_fields if missing or empty do_nothing
            //  set [] //column_names with escapes required? if empty or null do_nothing
            // "on_constraint": "", //string a-zA-Z0-9 name: //set_fields or do_nothing 
        },

        /*
        rls:
            boolean expression. wrapped into where statement.
            only can use user information. column condtion with user information
            for insert data is checked in select into statement
            for update data is checed in select and on column value in update where clause
            for delete only checked in where statement
            for select
            default used for all unless otherwise specified
            ignore on insert?
            cast on rls for insert
            string template for where statement allows quick rls for model
        */


        //filter syntax. allows subquery. exists

        //using add to values to check if allowed
        //on_check in the where clause

        //expressions and rls written as raw querires components.
        //input fields will use the {{mustach}} syntax. will be swapped out
        //during final query build with proper bind type.


        //raw_using create full select statement with type and value checks?


        'rls':  
            {
                //subquery_name?
                //default: if nothing else
                //on_select, insert, update, delete?
                //add table name to column comparision in where clause
                //i.e. table1.column1 = :field
                //either filter or exists
                //column in subquery
                //column not in subquery
                //value and type?
                //raw string only
                //insert, select, update, delete. set of boolean statements.
                //insert is inject in select statement. select, update and delete in where
                //route info take precedence. add lazy error function.
            }
        //
        , 
        


        /*
            error_meaning for constraints

        */
        error_constraint: {
            'sql_error_name': "message to append to is meaningful"
        },


        /*

            append null need correct types. does a union on raw query
            field is bydirectional for interface
            column is the actual column used in postgres or mysql for name mapping.
            alias will change them of return column select column as alias 
            vfield is for computed values for select and filters and order by only. not available as a modification parameter.
            sfield for text based search or rank. expects a string and
            agfield
        */
 
        'interface': [
            /* 
                field_types
            field: bidirectional field. corresponds to real column. used for all crud operations.
            agfield: server maintained field. server responsible for injecting data.
                ag_type, expression. all user info available in query in order to track modificaitons.
                Also allows implementation of rls. on_select, on_insert, on_update, on_delete, and
                optional. This field can be bidirectional or read only. 
                All data modifications would be injected by the server. Optional means if the field name
                is in the user query the value is replaced by the server and injected into the mutation.
            sfield: this is meant to provide an interface for full text based search. often consists of a query
                string and a set of concatenated columns to compare it against. if specified as a rank field it
                can also be returned. 
            vfield: virtual/read_only field. used for select, filter and order by operations. generally used to 
                append simple calculations to a real table. i.e. sum of values in a row. meant to avoid unnecessary
                view creation in the database. if no expression is used, the column is assumed to already exist.
            */
            { 'field': 'id',         'column': 'id',         'type': 'bigint',  'description': '',  'default_value': ''},
            { 'field': 'first_name', 'column': 'First Name', 'type': 'text',    'description': '',  'default_value': '',   },

            //if missing default reject
            { 'field': 'value', 'type': 'numeric'   },
 
            //agfield

            //modification rules. server inserts infor. does query have any say?
            //has defaults

            //on_insert, on_update, on_delete, on_input. mutation information handled by server.
            //on_input if field is in json value is replaced by server. otherwise left as undefined.
            //on_insert, on_update adds fields regardless on these operations.
            //user allowed to delete on_select. can it be pulled?
            {'agfield': 'updated_at' , 'agtype': 'updated_at', 'column': 'updated_at'},
            {'agfield': 'created_at' , 'agtype': 'created_at', 'column': 'Creataed At'},
            {'agfield': 'deleted_at' , 'agtype': 'deleted_at'}, //expression
            {'agfield': 'user_check' , 'agtype': 'expression', 
                //modification_rules
                'expresssion': '', 'for': []

            },
            // virtual_columns and or calculated columns only select
            // vfield refrences column always alphaNumeric. no sql injection possible.
            // if no expression assumes its precalculated by the view
            {'vfield':'cfte', 'column': '',  'alias': '', 'type': 'boolean',
                'description': '',
                "expression": ""
            },

        ],
        search: [
            {

            //search string field. string comming from user, can add multiple columns as input
            //first input alwasy user string.

            //operator ignored search_filter number or rank search_filter: "", //string or object with quick filter type
            //rank added in select clause. used as where and order by. removed from final return query

            //coalesce null as '' and add space
            //details in text_search.js

            'sfield':'search_string', 'stype': 'tsquery',  'column': '',  'alias': '', 'type': 'boolean',
                //tsquery
                //tsvector

                //input cast as ts_query

                //ts_vector cast?
                //column concatenated

                // SELECT title, ts_rank_cd(textsearch, query, 32 /* rank/(rank+1) */ ) AS rank
                // FROM apod, to_tsquery('neutrino|(dark & matter)') query
                // WHERE  query @@ textsearch
                // ORDER BY rank DESC
                // LIMIT 10;


                // true/false or threshold
                //json or string. 
                //input type cast
                //input keys with default for json

                //search style?

                //object is conditional where clause

                //multicolumn and if not null

                //text search

                //search_columns: []  //casted so string and concatenated with space?
                //or string for specific_column ?
                //output_type filter type
                //enforce json
                // compare_columns?
                // operator

                'description': '', 'allow_null': False, 'default_value': '', 'alias': '',
                'return': false,
        }
        ]
        ,


        //50000
        'max_rows': false, //number

        /*
        primary_key for update/delete if other primary key is required
        'do_instead': null // for route use only. overwrites how route is dynamically generated.
            otherwise query will be generated based on route it is created in.
            options are select, insert, update, delete. this is ignored for select route.

            undefined values ignored unless required is used and default_value is injected
            if using raw query default values is accessible.
            include fields determine what to use.
        */

        // #primary key
        //field column alias alias
        'primary_key': '', //defaults to id or [ ] for composite
        'exclude_pk_insert': true, //default true. doesnt allow insert to pass for model based query
        'ignore_undefined': true,// for dynamic assembly only. default_value to filter in raw query.
        //if rls just dont use column name in insert

};



//routes

/*
Pulling data all post routes.
server/namespace/name/action
actions: select/insert/update/delete/truncate

//admin information
//test assembles full route with documentation
*/

//query

//include for subsets of model. for column level permissions
//primary_key for update/delete key sway. usefully if unique field as identity
//redefined model or add function for something different.
//specify crud_type for overwrite.
//hard code query for full dynamic expression.
//routes route_name: /namespace/name/action

/*
function syntax args parameter is same as column structure in model
'function': {
    'schema': '',
    'name': '',
    'args': [
        { 'field':  'name', 'required': true, 'default_value': ''}, //field used to inject user values
        { 'expression': ''} //add raw string as component. may require access to now() for example
    ]
},
*/



/*
routes and test routes are for raw queries to be written.
they take precedence if defined. otherwise use model
*/
let routes = {
    //interface global?

    select: {
        // 'description': '',
        // 'interface': []
        // 'search' : []
        // 'query': '', //raw_query
        //  bind: '' //bind or replacement
        // }
        // allow additions of filters.
    }, //  function or model overwrite


    insert: {

    },
    update: {},
    delete: {},
    truncate: {} //boolean //true defaults to false
}

/*
test_model for separate set if test_schema or test_name not defined
use schema and name not test_schema and test_name
test_prod is sync check string equivalency with diff?
if no testing using routes will do nothing
*/

let test_routes = {
    //interface global?
    select: {},
    insert: {}, 
    update: {},
    delete: {},
    truncate: {} //true defaults to false

}