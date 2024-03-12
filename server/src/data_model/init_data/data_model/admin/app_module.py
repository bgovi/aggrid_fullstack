"""
connects app with modules.

app_id
module_id
module_name
    how its displayed in the app

something for public

"""


columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'app_id',         'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'module_id',      'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }


]