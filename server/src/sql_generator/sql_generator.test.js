/*
default model
*/

//for single route. i.e. select/insert/update/delete
let model_function = {
    'schema': "prod_schema",
    'function': "function_name",
    'test_schema': "test_schema",
    'test_function': "function_name",
    'action': '', //select, insert, update, delete
    'description': '',
    'args': [
        {'agfield': 'user_id', 'agtype': 'user_id'},
        { 'field':  'name', 'required': true, 'default_value': ''}, //field used to inject user values
        { 'column': 'name'},  //column used to add table columns in funciton call
        { 'expression': 'name'} //add raw string as component. may require access to now() for example
    ]
}