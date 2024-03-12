/*
user

columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'first_name',     'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'middle_name',    'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'last_name',      'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'email',          'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'oauth_id',       'type': 'text',   'description': '', 'allow_null': False, 'default_value': ''  },
    #max payload size upload/download
    #max per minute
    #post rate 100
    {'column': 'api_upload_rate', 'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    #select rate 50,000 per min
    {'column': 'api_download_rate', 'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    #ui calls
    {'column': 'api_pwd',         'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'is_admin',        'type': 'boolean','description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'password',        'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'is_tmp_password', 'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'is_active',       'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',      'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',      'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }
]






*/



/*
api

id:
description:
test: false, //for testing uses test routes
config: {
    model:  {}
    routes: {}
    test_routes: {}
}

*/


/*
user_api_permissions
id:
user_id:
api_id:
select:
insert
update
delete
truncate
*/

/*
module

id: 1, //for update/delete ?
namespace': 'xyz',
name': 'xyz',

component: '', // survey, grid, download, upload, notes as markdown
description: '',

//read only. crud operations displayed on screen
'test': false, //for testing uses test routes
'config': {

}

*/

/*
module_api_permissions
id:
module_id:
api_id:
select
insert
update
delete
truncate
*/


/*
app

id: 1, //for update/delete ?
namespace': 'xyz',
name': 'xyz',

description: '',

//read only. crud operations displayed on screen
'test': false, //for testing uses test routes
'config': {

}


*/

/*
app_module_permissions
id
app_id
module_id
*/

/*
user_app_permissions
id
app_id
user_id
*/