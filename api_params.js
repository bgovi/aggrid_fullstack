/*
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

refresh redis button
update redis cache with user


let config = {
    'ui': 'aggrid', //aggrid download import survey
    'namespace': 'xyz',
    'name': 'xyz',
    'id': '1', //for update/delete ?
    'test': false, //for testing
    'config': {

    }
}



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
*/


/*










module_api_perms

//route
//query: 'asdf'
//batch. add values statement. cte?
//column order
// #values


*/



//for save route ui only
let post_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.
    {
        "crud_type": "", //only needed for save route s or select
        "data": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}] or object
        "include": [], //return list of fields
        "exclude": [],
        "row_id": null //name_of field
        //"type_cast": boolean
    }
]

//row_id

//for select route
let select_params = {

    order_by: '',
    where: '',
    limit: '',
    offset: '',  
    // --maybe quick search just in where string?
    // search_filter: "", //string or object with quick filter type:
    // functions?
    /*
        data:  [],
        types: {}
    */
    "type_cast": 'boolean', //just dont wrap into text
    "include": [], //return list of fields
    "exclude": []
}



//for other routes:

//check by second?

//global post counter 100,000


//global download counter 1,000,000


//len 100 * 50 = 5000

/*
{
    "data": [

    ]
}


*/


//insert, upsert, select, delete, update
//sql_token


//generic
//read only as default
//crud_type: 'siud'

//route

//undefined_value

//max payload and size.


//type is for filters
//all returned data is as text.
//send types?

//client side alias


//append null

x = {
    model:{
        'schema': None,
        'name': None,
        'description': '',
        'crud_type': 'siudt', //allow overwrite in columns. assembles select, insert, update, delete
        'batch_size': 50, //default?  _ag_values_ [] column stored in order. underscore added to keep track of each row.
        //one at a time if not explicitly defined
        //type also required for filtering on input
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


            // virtual_columns and or calculated columns
            // vfield refrences column always alphaNumeric. no sql injection possible.


            //vcolumn etc.
            //field maps to column

            //xyz
            {'vfield':'x', 'column': '',  'alias': '', 'type': 'boolean',
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
                },
                'operation': {

                }
            }
            //empty vfields

            //input type_cast
        ]   
            //vfield for searching tsvector, tsquery


                //return?
        ,

        'raw': "", //requires bind types to be specified

            // query: {
            //     'description': '',
            //     'args': []
            // }


            // 'virtual_columns': [

            // ],





        //filter column
        //json

        //ifnull. type not enforced
        //ag_param: token values
        //optional can be injected
        //true must be entered
        //alias i.e. alias if different then named_parameter


        'max_rows': false,
        //flag for server modification only
        'primary_key': '', //defaults to id or [ ] for composite
        'exclude_pk_insert': true, //default true. doesnt allow insert to pass for model based query
        'bind_type:': null,
        'ignore_undefined': true,// for dynamic assembly only. default_value to filter in raw query. default value is null by default?
        //trigger_value always set by server. as raw sting. user has no choice
        //deleted_at use trigger_value check options i.e 'sd' on crud_type for created_at use si
        //type_cast select values?
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
    //for specific route
    func: {
        'schema': '',
        'name': '',
        'description': '',
        'args': [

        ],
        //query: {tmpl: aa, columns: [], }
        //--ag_values--
        //--ag_columns--
        //must containt --ag_values-- for batch
        // https://stackoverflow.com/questions/1564956/how-can-i-select-from-list-of-values-in-sql-server
        // simple inject for values test. nulls?
        //'from': 1//bool
        //where
        //deleted at
        //query test select doesnt have trailing semicolon. wrap in select
    },
    query: {
        'description': '',
        'args': []
    }
}

//query

//insert into ( ) FROM values


//overwrites
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