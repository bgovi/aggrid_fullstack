"""
api is post only
namespace
name
action (select, insert, update, delete)
config (json):
    description:
    input: 
    output:  
    sql_cmd: text

quick pull

batch information type in config


select: text. null to ignore

column_order in config

"""

#if undefined
#if values
#if batch_number: x
#set_undefined: true/false if true use defualt value else ignore.
#computed fields
#pk or updated primary key or deleted primary key
#id or composite or xx
#precedance
#column_name
#insert type upsert, on_conflict on constraint, etc
#primary key. true
#returns
#route type select, insert, update, delete. allow overwrite.
#bulk query substring.
#onconflict and or on constraint.
#select must be select. no transactions 

columns = [
    #primary key
    {'column': 'id',             'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'namespace',      'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'name',           'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'version',        'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'description',    'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'config',         'type': 'bigint', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'created_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },
    # modified_by_user_id
    # {'column': 'updated_at',     'type': 'boolean', 'description': '', 'allow_null': False, 'default_value': ''  },

]