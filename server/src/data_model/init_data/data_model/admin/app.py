"""
namespace:
name:
display_name: (defaults to namespace.name)
type
config
    module side panel order


"""

columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'namespace',      'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'name',           'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'version',           'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'display_name',   'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'config',         'type': 'json', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }
]