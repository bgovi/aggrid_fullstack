"""
Connects api to user for permissions.
user_id
api_id
"""


# references

columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': '', 'primary_key': ''  },
    {'column': 'api_id',         'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'user_id',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    #interface based api or custom

    {'column': 'allow_insert',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'allow_update',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'allow_delete',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'allow_select',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',          'type': 'timestampz', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',          'type': 'timestampz', 'description': '', 'allow_null': False, 'default_value': ''  },

    #who changed it id?
    {'column': 'updated_at',          'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  }

]