"""
id
first_name
middle_name
last_name
oauth_id
api_rate
email
is_admin
password (encrypted)
is_tmp_password: boolean
by server i.e. pg_crypto extra or via middleware


"""

#env
table = {
    'schema_name': None,
    'table_name': None,
    'description': '',
}

#primary key
#alternative key
#composite key

#dynamic insert update. unless query available
#values
#columns

#set as primary key type
columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'first_name',     'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'middle_name',    'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'last_name',      'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'email',          'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'oauth_id',       'type': 'text',   'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'api_rate',       'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'is_admin',       'type': 'boolean','description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'password',       'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'is_tmp_password',    'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }
]
