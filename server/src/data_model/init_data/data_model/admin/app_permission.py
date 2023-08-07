"""
Connects users with app_module table.
user_id
app_id
"""


columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'app_module_id',  'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'user_id',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }


]