

/*
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



//for save route
let query_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.
    {
        "crud_type": "", //only needed for save route s or select
        "data": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]
    }
]

//for other routes:
/*
{
    "data": [

    ]
}


*/


//insert, upsert, select, delete, update
//sql_token


// "default_fields": "", //object with default type {x:"default_value_x", y:"default_value_y"}
// "set_fields": "",  //array that has columns that should be used for set
// "on_conflict": "", //string a-zA-Z0-9
// "on_constraint": "", //string a-zA-Z0-9
// "upsert": "",
// "where": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]
// "offset": "", //should be integer greater or equal to 0
// "limit": "", //should be positive integer
// "search_filter": "", //string or object with quick filter type:
// "search_rank": "", //bool
// "returning": "", //array of fields to used for returning [id, column_1, xxx] //defaults to id?
// "order_by": ""  // [{'col1': 'asc}, {'col_2': 'desc'}]
// #env
// special_names _ag_meta_, _ag_first_name_ ...

//generic
//read only as default
//crud_type: 'siud'

//route

//undefined_value


x = {
    model:{
        'schema': None,
        'name': None,
        'description': '',
        'crud_type': 'siudt', //allow overwrite in columns. assembles select, insert, update, delete
        //type also required for filtering on input
        'columns': [
            // #primary key
            {'column': 'id',             'type': 'bigint', 'description': '',  'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'first_name',     'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'middle_name',    'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'last_name',      'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'email',          'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'oauth_id',       'type': 'text',   'description': '',  'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'api_rate',       'type': 'bigint', 'description': '',  'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'is_admin',       'type': 'boolean','description': '',  'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'password',       'type': 'text', 'description': '',    'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'is_tmp_password','type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'display_name': ''  },
            {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': '', 'display_name': ''  }
            //ifnull. type not enforced
            //ag_param: token values
            //optional can be injected
            //true must be entered
            //display_name i.e. alias if different then named_parameter
        ],
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


//overwrites
let routes = {

    select: {
        //func or model replacement
        //instead
        //query //template and interface
        
    }, //function or model overwrite
    insert: {},
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

//values
//select, insert/upsert, delete, update 

