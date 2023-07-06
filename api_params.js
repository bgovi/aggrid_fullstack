/*

array of objects or just objects


admin test route


wrap_in jwt_token
route_gaurd
user_id
ui_id: app_module_id, app_permission?
route_name: /namespace/name/action
check route_name in linked view config file?


api_token:
user_id:
pwd: tmp //incase need to close
is_active
rate_limit



data params

api_route:
post_route: /
token:
data:
order_by:
where:
limit:
offset:
--maybe quick search just in where string?
search_filter: "", //string or object with quick filter type:
search_rank: "", //bool


config and api route arguments.

test mode returns query on select and template for xyz
and or query string
display?

create builder route. still requires direct connections.

/save

route can add parameters for download type on select






module_api_perms

//route
//query: 'asdf'
//batch. add values statement. cte?
//column order
// #values




//ui config


server crash and restart.

get route displays config

// "default_fields": "", //object with default type {x:"default_value_x", y:"default_value_y"}
// "set_fields": "",  //array that has columns that should be used for set
// "on_conflict": "", //string a-zA-Z0-9
// "on_constraint": "", //string a-zA-Z0-9
// "upsert": "",
// "where": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]
// "offset": "", //should be integer greater or equal to 0
// "limit": "", //should be positive integer
// "search_filter": "", //string or object with quick filter type:
// "returning": "", //array of fields to used for returning [id, column_1, xxx] //defaults to id?
// "order_by": ""  // [{'col1': 'asc}, {'col_2': 'desc'}]
// #env
// special_names _ag_meta_, _ag_first_name_ ...
// rls row level security, expression or model
// column equality
// filter object, subquery filter

//field types

field
vfield
sfield

primary_key: str or array of strings


agfield: 

tfield
timestamps: 
    created_at
    updated_at
    deleted_at
        // deleted_at: key. select where deleted_at is null


truncate: default false


bind_type: replacement or bind


if replacement :variable_name
if bind: $variable_name
the names are automaticaly used correctly if using model object.
if writing raw query must properly name variables. 

doubling will ignore xyz
*/



//test_prod is sync


//for save route ui only
let post_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.
    {
        "crud_type": "", //only needed for save route s or select
        "data": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}] or object
        "include": [],
        "transaction_id": null //name_of field underscore append for multi data
        //"type_cast": boolean
    }
]

//for other route
let post_params_2 = {
    "data": [], // {}
    "transaction_id": ""
}
//or 
let post_params_3 = [
    {
        "crud_type": "",
        "data": [],
        "transaction_id": ""
    }
]


let post_return = [
    {

        //data: {}
        //transaction_id: ""
        //error_msg:
    }
]


//for select route
let select_params = {

    order_by: '', //[]
    where: '', //[]
    //operator ignored search_filter number or rank search_filter: "", //string or object with quick filter type

    limit: '',
    offset: '',
    //for mapping. provides a set of null values to search against
    //union as first or last column in select and set as null?
    prepend_null: '',
    append_null: '',
    /*
        data:  [],
        types: {}
    */
    "type_cast": [], //true
    //type_cast select values?

    
    //'boolean', //just dont wrap into text
    "include": [] //return list of fields
}

// sql_token

let select_return = {
    "crud_type": "",
    data: [],
    error_msg: ""
}



//type is for filters
//all returned data is as text.
//send types?
//client side alias


//append null
//field is bydirectional for interface
//column is the actual column used in postgres or mysql for name mapping.
//alias will change them of return column select column as alias 
//vfield is for computed values for select and filters and order by only. not available as a modification parameter.
//sfield for text based search or rank. expects a string and 

x = {
    model:{
        'schema': None,
        'name': None,
        'test_schema': None,
        'test_name': None,

        'bind_type': null,
        'description': '',

        'batch_size': null, //defaults to 1. does nothing yet for bulk_insert/ bulk_update/ bulk_delete
        //for all or nothing?
        //defaults to insert, update, delete
        //may only return count of changes.

        //one at a time if not explicitly defined
        //type also required for filtering on input

        //deleted_at: true

        'upsert': {
            // "on_conflict": "", //string a-zA-Z0-9 name: //set_fields if missing or empty do_nothing
            // "on_constraint": "", //string a-zA-Z0-9 name: //set_fields or do_nothing 
            // "do_nothing"
        },

        'rls': "", //equality or expression added as where statement

        // insert into LeadCustomer (Firstname, Surname, BillingAddress, email)
        // select 
        //     'John', 'Smith', 
        //     '6 Brewery close, Buxton, Norfolk', 'cmp.testing@example.com'
        // where not exists (
        //     select 1 from leadcustomer where firstname = 'John' and surname = 'Smith'
        // );



        //error_meaning for constraints

        'columns': [
            // #primary key
            //field column alias
            { 'field': 'id', 'column': 'id', 'alias': '',            'type': 'bigint', 'description': '',  'allow_null': False, 'default_value': ''},
            {'column': 'first_name',     'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'middle_name',    'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'last_name',      'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'email',          'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'oauth_id',       'type': 'text',   'description': '',  'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'api_rate',       'type': 'bigint', 'description': '',  'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'is_admin',       'type': 'boolean','description': '',  'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'password',       'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'is_tmp_password','type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'alias': ''  },
            {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'alias': ''  },

            {'ag_field': '' , 
                'ag_type': '',
                //function()

                'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'alias': ''  },

            // virtual_columns and or calculated columns
            // vfield refrences column always alphaNumeric. no sql injection possible.
            //xyz
            {'vfield':'cfte', 'column': '',  'alias': '', 'type': 'boolean',
                //funciton inputs?
            
                //args required

                'description': '', 'allow_null': False, 'default_value': '', 'alias': '',
                'return': false,
                'function': {
                    'schema': '',
                    'name': '',
                    'args': [
                        { 'field':  'name', 'required': true, 'default_value': ''},
                        { 'column': 'name'},
                        { 'raw': 'name'}
                    ]
                }
                // "expression": {
                //     "bind_type": false
                //      "xyz": false
                // }
                // "bind_type": "" return: false


            },
            //search string field. string comming from user, can add multiple columns as input
            //first input alwasy user string.
            {'sfield':'search_string', 'column': '',  'alias': '', 'type': 'boolean',

                //input_type
                //keys: defaults?
                //output_type

                //enforce json

                //funciton inputs?
                //args required

                //input type_cast


                // compare_columns?
                //operator



                'description': '', 'allow_null': False, 'default_value': '', 'alias': '',
                'return': false,
                'function': {
                    'schema': '',
                    'name': '',
                    'args': [
                        { 'field':  'name', 'required': true, 'default_value': ''},
                        { 'column': 'name'},
                        { 'raw': 'name'}
                    ]
                },
                "expression": ""

            }
        ]   
        //vfield for searching tsvector, tsquery
        ,

        'max_rows': false,
        //50000

        //flag for server modification only
        'primary_key': '', //defaults to id or [ ] for composite
        'exclude_pk_insert': true, //default true. doesnt allow insert to pass for model based query
        'bind_type:': null,
        'ignore_undefined': true,// for dynamic assembly only. default_value to filter in raw query. default value is null by default?
        //trigger_value always set by server. as raw sting. user has no choice
        //deleted_at use trigger_value check options i.e 'sd' on crud_type for created_at use si
        //must contain atleast one value to update for update or delete?
        //deleted_at is datetime column: column, value:
        'where': '', //string template for where statement allows quick rls for model
        // batch_size
        //filter
        // 'upsert': 
        // deleted_at: key. select where deleted_at is null
        // values
        // instead: insert, update, delete, etc
        // return: * or string or array of strings
        //where predicate for views? conditionals
        //column_order
        //if contains query and or model overwrite
        //text_cast: true by default

        // insert/upsert: {
        //     on_conflict:
        //     on_constraint:
        // }
    },

}

// query: {
//     'description': '',
//     'args': []
// }



//raw query needs required fields if using subset
//just for knowledge?


//query
//null_query

//undefined values ignored unless required is used and default_value is injected
//if using raw query default values is accessible.
//include fields determine what to use.

let routes = {

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

// #set as primary key type


/*

//require fields
//batch_insert/batch_upsert
//batch_update 
//batch_delete


boolean or object
select: {
    model: {
        raw_query:
        column_order: [] //for values
        batch_size

    }
    bind_type:

    only:    []
    require: [] //string or arrayif object if else for multiple keys or composite keys
    exclude: [] //string or array
    instead: insert, update, delete, etc
    primary_key: 
    return
}

insert/upsert: {
    on_conflict:
    on_constraint:
}
update: {
    primary_key:     require: [] //string or arrayif object if else for multiple keys or composite keys
}

delete: {

}

if no default value ignore
*/

//undefined value
//skip undefined?
//type_cast boolean
//if_null value
//user_defined_functions

//raw_query: ""
//bind_type: replacement or bind
//values_columns [order]
//batch_size: 100 default

//returning null, *, []
//query