/*
Interacting with API as an end users. If using oauth dont need token just run post request.
in https://{hostname}/api/namespace/name/action?=version

actions: select, insert, update, delete, truncate


curl -X POST -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}"
    https://api.{hostname}/api/namespace/name/action?=version

*/



/*
Arguments and payload structure for select route.
*/

let select_query = {
    order_by: '', // "order_by": ""  // [{'field_name': 'asc}, {'field_name': 'desc'}]
    where: '', //[]
    // {'field': field_name, 'operator': 'not_in', 'value':  StringifyArray(value) }
    // {'field': field_name, 'operator': 'not_in', 'value':  [str(val_1), str(val_2)] }
    // {'field': field_name, 'operator': 'tsvector', 'value':  "", ; 'threshold': numerical, 'score': true }
    // delimiter? query_type, document_type

    //pagination limit and offset should be positive integers > 0
    limit: '',
    offset: '',
    // {'field': field_name, 'threshold': numerical, 'value':  StringifyArray(value) }
    //threshold 1 for true and 0 for false. if purely numerical any number between 0 and 1

    null: true ,//adds null to returned results. using for mapping and dropdown',
    "returning": [], //return list of fields //defaults to all columns
    //excluding: [] ?
    tid: null,
    or: true, //defaults to false. joins filters using or statement. defaults to using and
    //by default all fields returned as string. in some cases maybe okay to set type during query
    //may have issues with dates and biginteger.

    //text or json
}
/*
filter operators

OPERATORS: 

=	Equal
>	Greater than
<	Less than
>=	Greater than or equal
<=	Less than or equal
<> or !=	Not equal
AND	Logical operator AND
OR	Logical operator OR
IN	Return true if a value matches any value in a list
BETWEEN	Return true if a value is between a range of values
NOT BETWEEN 
LIKE	Return true if a value matches a pattern
IS NULL	Return true if a value is NULL
NOT	Negate the result of other operators

a BETWEEN x AND y
a NOT BETWEEN x AND y
BETWEEN SYMMETRIC (does automatic swap)


*/



//individual statement structure
let select_param = { select_query}
/*
    send several requests in one statement
    sends several select request. each request only allows for 10 value maximum to be returned
    generally used to search or map several data points in a single request.
*/
let select_params = [
    { select_query_1},
    { select_query_2},
    { select_query_3}
    //...
]


/*
For insert, update and delete payload structure
*/

let modify_query = {
        "data":  {}, //{"field_1":"valx1", "field_2":"valy1"}
        "tid": null, //transaction id. used to keep track of input and output results.
        "returning": ['id', 'column_1', 'xxx'] //if missing all fields returned
        //excluding: [] ?
}

//data modificaiton structure individual
let post_param_ = {
    modify_query
}

let post_params = [
    // Array of objects. Contains information for crud operations.
    // Operation order is not preserved.
    modify_query_1,
    modify_query_2,
    modify_query_3
    //...
]

/*
Return structure of select or mutation operations

output: [

]

error:

types: {}
*/


let return_object = {
 
    output: [
        {
            data: [{}], //returned data for each statement. modificaiton will ususally only return 1 record.
            //select may return multiple rows.
            transaction_id: "",
            error: '', //error on individual crud operation. invalid query or data validation issue
            count: '', //number of rows affected.
            success: 'true' //boolean infor
        }
        //if batch each request has a separate object
    ],
    error: (str), //route level error such as server error or permission denied
    success: 'true', //boolean
    types: {} //column_name or alias as key. type as value
}

/*
for truncate only requires route in post request with empty payload

only return success true/false
*/