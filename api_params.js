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
get_routes

meta information
documentation
types
interface
dev



Routes can be built with pseudo code using the model syntax or each route can be
explicitly wrote with pure sql


bullk would be a json array thats parrsed?
*/

//app should only have table read write permissions.
//table creation and deletion controlloed by separate connection.
//admin conneciton explicitly gives permissions to app

//use defaults at the sql level if possible
let model = {

        'schema': "prod_schema",
        'name': "table_name",
        'test_schema': "test_schema",
        'test_name': "table_name",
        'description': '',

        'bind_type': null, //replacement or bind
        /*
        if replacement :variable_name
        if bind: $variable_name
        the names are automaticaly used correctly if using model object.
        if writing raw query must properly name variables. 
        doubling will ignore xyz
        */


        //deleted_at: true
        'upsert': {
            // "on_conflict": "", //string a-zA-Z0-9 name: //set_fields if missing or empty do_nothing
            //  set
            // "on_constraint": "", //string a-zA-Z0-9 name: //set_fields or do_nothing 
            // "do_nothing"
        },

        'rls': "", //boolean expression. wrapped into where statement.
        //string template for where statement allows quick rls for model

        /*
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
        */


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
        'columns': [
            // #primary key
            //field column alias alias
            { 'field': 'id',         'column': 'id',         'type': 'bigint',  'description': '',  'default_value': ''},
            { 'field': 'first_name', 'column': 'First Name', 'type': 'text',    'description': '',  'default_value': '',   },

            //if missing default reject
            { 'field': 'value',                              'type': 'numeric', 'required': true   },
 
            //agfield

            //modification rules. server inserts infor. does query have any say?
            //has defaults

            //on_insert, on_update, on_delete, mutation information handled by server.
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
                //operator

                'function': {
                    'schema': '',
                    'name': '',
                    'args': [
                        { 'field':  'name', 'required': true},
                        { 'field':  'name', 'default_value': '' },
                        { 'expression': 'sql text'}
                    ]
                },
                "expression": ""

            }
        ]   
        ,

        'max_rows': false, //number
        //50000

        'primary_key': '', //defaults to id or [ ] for composite
        'exclude_pk_insert': true, //default true. doesnt allow insert to pass for model based query
        'ignore_undefined': true,// for dynamic assembly only. default_value to filter in raw query.
        // default value is null by default?
        // truncate: default false not implemented
        //

        // include syntax
        // primary_key for update/delete if other primary key is required
        //'do_instead': null // for route use only. overwrites how route is dynamically generated.
        // otherwise query will be generated based on route it is created in

        //undefined values ignored unless required is used and default_value is injected
        //if using raw query default values is accessible.
        //include fields determine what to use.

};

/*
function syntax args parameter is same as column structure in model
'function': {
    'schema': '',
    'name': '',
    'args': [
        { 'field':  'name', 'required': true, 'default_value': ''},
        { 'column': 'name'},
        { 'expression': 'name'}
    ]
},
*/

// query: {
//     'description': '',
//     'args': []
// }



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
        //crud_type for model use only

        //func or model replacement
        //instead: insert//upsert
        //upsert: {}
        //query //template and interface
        
    }, //function or model overwrite


    insert: {
        //upsert: {}

    },
    //upsert: {} 
    update: {},
    delete: {},
    // deleted_at: "update column"
    truncate: {} //true defaults to false
}

let test_routes = {
    //for testing
    select: {
        //func or model replacement
        //instead: insert//upsert
        //upsert: {}
        //query //template and interface
        
    }, //function or model overwrite


    insert: {
        //upsert: {}

    },
    //upsert: {} 
    update: {},
    delete: {},
    // deleted_at: "update column"
    truncate: {} //true defaults to false

}



/*
if replacement :variable_name
if bind: $variable_name
the names are automaticaly used correctly if using model object.
if writing raw query must properly name variables. 
doubling will ignore xyz
*/



//test_prod is sync


//for save route ui only

// where to return type information
// "types": null,
// meta?


/*
Interacting with API as an end users



*/


//data pull options:
//for select route
let select_params = {

    // "on_conflict": "", //string a-zA-Z0-9
    // "on_constraint": "", //string a-zA-Z0-9
    // "where": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]
    // "offset": "", //should be integer greater or equal to 0
    // "limit": "", //should be positive integer
    // "search_filter": "", //string or object with quick filter type:
    // "returning": "", //array of fields to used for returning [id, column_1, xxx] //defaults to id?
    // "order_by": ""  // [{'field_name': 'asc}, {'field_name': 'desc'}]


    order_by: '', //[]
    where: '', //[]
    limit: '',
    offset: '',

    search: {}, //rank or text search
    //operator ignored search_filter number or rank search_filter: "", //string or object with quick filter type
    //rank added in select clause. used as where and order by. removed from final return query

    /*
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
    */

    //filters then search

    //if rank. filter then order by?

    //for mapping. provides a set of null values to search against
    //union as first or last column in select and set as null?
    prepend_null: '',
    append_null: '',
    /*
        data:  [],
        types: {}
    */



    //'boolean', //just dont wrap into text
    "include": [] //return list of fields
}

// sql_token

let select_return = {
    data: [],
    error_msg: "",
    count: 0,
    // "types": null
}


//data modificaiton structure

let post_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.
    {
        "data": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}] or object
        "transaction_id": null, //name_of field underscore append for multi data
        //"type_cast": boolean
    }
]

//for other route
//type returned from get route
//append type


let post_return = [
    {

        //data: {}
        //transaction_id: ""
        //error_msg:
    }
]


// #set as primary key type


/*
    //require fields
    //batch_insert/batch_upsert
    //batch_update 
    //batch_delete
    //batch_select

    //requires data field
    //filters  map to column constraints?


    //best to pull in link data one time if lookups.
    //best to make sure limit test works?

    //add repull options for dropdowns?
*/