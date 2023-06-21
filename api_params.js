

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


/save
*/


/*
module_api_perms

*/




let query_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.

    {
        "crud_type": "", //only needed for save route s or select
        "data": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]
        }
    ]


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

//special_names _ag_meta_, _ag_first_name_ ...


//generic
//read only as default
//crud_type: 'siud'

model = {
    'schema_name': None,
    'table_name': None,
    'function_name': None,
    'args': None, //array list in order.
    'description': '',
    'columns': [
        // #primary key
        {'column': 'id',             'type': 'bigint', 'description': '',  'allow_null': False, 'default_value': ''  },
        {'column': 'first_name',     'type': 'text', 'description': '',    'allow_null': False, 'default_value': ''  },
        {'column': 'middle_name',    'type': 'text', 'description': '',    'allow_null': False, 'default_value': ''  },
        {'column': 'last_name',      'type': 'text', 'description': '',    'allow_null': False, 'default_value': ''  },
        {'column': 'email',          'type': 'text', 'description': '',    'allow_null': False, 'default_value': ''  },
        {'column': 'oauth_id',       'type': 'text',   'description': '',  'allow_null': False, 'default_value': ''  },
        {'column': 'api_rate',       'type': 'bigint', 'description': '',  'allow_null': False, 'default_value': ''  },
        {'column': 'is_admin',       'type': 'boolean','description': '',  'allow_null': False, 'default_value': ''  },
        {'column': 'password',       'type': 'text', 'description': '',    'allow_null': False, 'default_value': ''  },
        {'column': 'is_tmp_password','type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
        {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
        {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }
    ]
}

//actions
//model overwrite

//route
//query: 'asdf'
//batch. add values statement. cte?
//column order
//query_type

// #primary key
// #alternative key
// #composite key
// #dynamic insert update. unless query available
// #values
// #columns

// #set as primary key type


/*
boolean or object
select: {
    raw_query:
    bind_type:
    only: []
    require: [] //string or arrayif object if else for multiple keys or composite keys
    exclude: [] //string or array
    overwrites
    instead: insert, update, delete, etc
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

//returning null, *, []
//query


//select, insert/upsert, delete, update 

//batch_insert/batch_upsert
//batch_update
//batch_delete