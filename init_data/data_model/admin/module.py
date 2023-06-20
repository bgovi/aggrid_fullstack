"""
allows versioning
namespace
title
description
json_config

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
    {'column': 'namespace',      'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'title',          'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'description',    'type': 'text', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'type',           'type': 'json', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'config',         'type': 'json', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  }
]