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

*/



//use defaults at the sql level if possible
let model = {

        'schema': "prod_schema",
        'name': "table_name",
        'test_schema': "test_schema",
        'test_name': "table_name",
        //if using test schema and test_name the columns are expected to match exactly
        'description': '',

        'bind_type': null, //replacement or bind
        /*
        if replacement :variable_name
        if bind: $variable_name
        the names are automaticaly used correctly if using model object.
        if writing raw query or expression must properly name variables. 
        doubling will ignore xyz

        :variable_name for replacement
        $variable_name for bind parameter
        */


        //deleted_at: true
        'upsert': {
            // "on_conflict": "", //string a-zA-Z0-9 name: //set_fields if missing or empty do_nothing
            //  set [] //column_names with escapes required?
            //  not_set columns?
            // "on_constraint": "", //string a-zA-Z0-9 name: //set_fields or do_nothing 
            // "do_nothing"
            //  upsert requires set or do nothing
        },

        'rls': "", //boolean expression. wrapped into where statement.
        //string template for where statement allows quick rls for model




        //error_meaning for constraints
        error_constraint: {
            'sql_error_name': "message to append to is meaningful"
        },


        //append null
        //field is bydirectional for interface
        //column is the actual column used in postgres or mysql for name mapping.
        //alias will change them of return column select column as alias 
        //vfield is for computed values for select and filters and order by only. not available as a modification parameter.
        //sfield for text based search or rank. expects a string and 
        'interface': [
            // #primary key
            //field column alias alias
            { 'field': 'id',         'column': 'id',         'type': 'bigint',  'description': '',  'default_value': ''},
            { 'field': 'first_name', 'column': 'First Name', 'type': 'text',    'description': '',  'default_value': '',   },

            //if missing default reject
            { 'field': 'value',                              'type': 'numeric', 'required': true   },
 
            //agfield

            //modification rules. server inserts infor. does query have any say?
            //has defaults

            //on_insert, on_update, on_delete, on_input. mutation information handled by server.
            //on_input if field is in json value is replaced by server. otherwise left as undefined.
            //on_insert, on_update adds fields regardless on these operations.
            //user allowed to delete
            {'agfield': 'updated_at' , 'agtype': 'updated_at', 'column': 'updated_at'},
            {'agfield': 'created_at' , 'agtype': 'created_at', 'column': 'Creataed At'},
            {'agfield': 'deleted_at' , 'agtype': 'deleted_at'}, //expression
            //or expression


            // virtual_columns and or calculated columns only select
            // vfield refrences column always alphaNumeric. no sql injection possible.
            {'vfield':'cfte', 'column': '',  'alias': '', 'type': 'boolean',
                'description': '',
                "expression": {
                    "bind_type": false,
                     "xyz": false
                }


            },
            //search string field. string comming from user, can add multiple columns as input
            //first input alwasy user string.

            //operator ignored search_filter number or rank search_filter: "", //string or object with quick filter type
            //rank added in select clause. used as where and order by. removed from final return query
            {'sfield':'search_string', 'column': '',  'alias': '', 'type': 'boolean',
                // true/false or threshold

                //input type cast
                //input keys with default for json

                //search_columns: []  //casted so string and concatenated with space?
                //or string for specific_column ?
                //output_type filter type
                //enforce json
                // compare_columns?
                // operator

                'description': '', 'allow_null': False, 'default_value': '', 'alias': '',
                'return': false,
                //operator: how to define tsquery and tsvector operation?
                //how to handle numerical operations?
                //now to handle null?

                /*
                function syntax args parameter is same as column structure in model
                'function': {
                    'schema': '',
                    'name': '',
                    'args': [
                        { 'field':  'name', 'required': true, 'default_value': ''}, //field used to inject user values
                        { 'column': 'name'},  //column used to add table columns in funciton call
                        { 'expression': 'name'} //add raw string as component. may require access to now() for example
                    ]
                },
                */


                'function': {
                    'schema': '',
                    'name': '',
                    'args': [
                        { 'field':  'search_string', 'required': true},
                        { 'column':  'name'} 
                    ]
                },
                //this is a raw string that is injected into the query
                "expression": ""
            }
        ]   
        ,

        'max_rows': false, //number
        //50000

        'primary_key': '', //defaults to id or [ ] for composite
        'exclude_pk_insert': true, //default true. doesnt allow insert to pass for model based query
        'ignore_undefined': true,// for dynamic assembly only. default_value to filter in raw query.


        //optional in specific route definitions to change default behavior
        /*
        primary_key for update/delete if other primary key is required
        'do_instead': null // for route use only. overwrites how route is dynamically generated.
            otherwise query will be generated based on route it is created in.
            options are select, insert, update, delete. this is ignored for select route.

            undefined values ignored unless required is used and default_value is injected
            if using raw query default values is accessible.
            include fields determine what to use.
        */

};



// query: {
//     'description': '',
//     'interface': []
//     'str: []
// }




/*
query assembly select


Select cast (column_1 as text ) as alias_1,
    cast (column_2 as text ) as alias_2
    FROM (
        --null option here with type cast to match types
        --if null should be excluded remove flag.

        UNION ALL

        Select column_1, column_2, text_filter as text_filter from table
        //coalesce null for text_filter
        --filters
    ) "a"
    --text_filter here?
    --order_by
    --add order_by text filter here

--if null injection


Select cast (column_1 as text ) as alias_1,
    cast (column_2 as text ) as alias_2
    FROM (
        select null::column_1_type, null::column_2_type
            UNION ALL
        Select column_1, column_2,  from table
        --filters
    ) "a"
    --text_filter here?
    --order_by




query assembly rls
    INSERT INTO table2
    SELECT * FROM table1
    WHERE condition;

    INSERT INTO table2 (column1, column2, column3, ...)
    SELECT column1, column2, column3, ...
    FROM table1
    WHERE condition;

// insert into LeadCustomer (Firstname, Surname, BillingAddress, email)
// select 
//     'John', 'Smith', 
//     '6 Brewery close, Buxton, Norfolk', 'cmp.testing@example.com'
// where not exists (
//     select 1 from leadcustomer where firstname = 'John' and surname = 'Smith'
//  SELECT * FROM (VALUES (1, 'one'), (2, 'two'), (3, 'three')) AS t (num,letter);


//ts_ran and tas query?

    select *
    from (
        SELECT
            pictures.id,
            ts_rank_cd(to_tsvector('english', pictures.title), 
            to_tsquery('small dog')) AS score
        FROM pictures
        --filters go here--
    ) s
    WHERE score > 0
    ORDER BY score DESC

https://stackoverflow.com/questions/12933805/best-way-to-use-postgresql-full-text-search-ranking


query assembly insert/update/delete



appending nulls





return type. everything casted to string. how to handle big int. big numbers
and datetime.


cast(column as text) as alias

*/









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
let routes = {

    select: {
        model: {


        }


        //crud_type for model use only

        //func or model replacement
        //instead: insert//upsert
        //upsert: {}
        //query //template and interface
        
    }, //function or model overwrite


    insert: {
            //optional 
            //do_instead: ''
    },
    //upsert: {} 
    update: {},
    delete: {
            //optional 
            //do_instead: ''


    },
    // deleted_at: "update column"
    truncate: {} //true defaults to false
}

//test_model for separate set if test_schema or test_name not defined
//use schema and name not test_schema and test_name
//test_prod is sync check string equivalency with diff?
//if no testing using routes will do nothing


let test_routes = {
 
    select: {
        //model
        //use schema and name not test_schema and test_name

    }, //function or model overwrite
    insert: {}, 
    update: {},
    delete: {},
    // deleted_at: "update column"
    truncate: {} //true defaults to false

}


/*
Interacting with API as an end users



*/


//data pull options:
//for select route

//allow array? has hard coded limit
let select_query = {

    // "offset": "", //should be integer greater or equal to 0
    // "limit": "", //should be positive integer
    // "search": "", //string or object with quick filter type:
    // "returning": "", //array of fields to used for returning [id, column_1, xxx] //defaults to id?

    order_by: '', // "order_by": ""  // [{'field_name': 'asc}, {'field_name': 'desc'}]
    where: '', //[]
    // "where": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]

    //pagination limit and offset should be positive integers > 0
    limit: '',
    offset: '',

    search: {}, //rank or text search
    // "search": "", //string or object with quick filter type:

    //for mapping. provides a set of null values to search against
    //union as first or last column in select and set as null?
    null: true ,///false//'',
    "returning": [] //return list of fields
    //defaults to all columns
}

let modify_query = {
        "data":  {}, //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}] or object
        "transaction_id": null, //name_of field underscore append for multi data
        "returning": ['id', 'column_1', 'xxx']
        //tid for short
        //defaults to id?
}


//map alias for search meant for batch structure?


//data modificaiton structure

let post_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.

]

let post_params_ = {
    data: {},
    transaction_id: null
}


//for other route
//type returned from get route
//append type


//api return structure
let return_object = {
 
    output: [
        {
            data: [{}],
            transaction_id: "",
            error_msg: '',
            count: ''
        }
        //if batch each request has a separate object
    ],
    error: (str),
    types: {}
}