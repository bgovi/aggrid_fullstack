/*
Interacting with API as an end users



*/


//data pull options:
//for select route

//allow array? has hard coded limit
let select_query = {
    order_by: '', // "order_by": ""  // [{'field_name': 'asc}, {'field_name': 'desc'}]
    where: '', //[]
    // "where": "", //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}]

    //pagination limit and offset should be positive integers > 0
    limit: '',
    offset: '',

    search: [], //rank or text search. need to add search structure
    null: true ,//adds null to returned results. using for mapping and dropdown',
    "returning": [], //return list of fields //defaults to all columns
    tid: null,
    //or: true

    //how to send file?
}

let select_param = { select_query}

//sends several select request. each request only allows for 1 value maximum to be returned
//generally used to search or map several data points in a single request.
let select_params = [
    { select_query_1},
    { select_query_2},
    { select_query_3}
    //...
]




let modify_query = {
        "data":  {}, //array of objects: [{x:"valx1", y:"valy1"},{x:"valx2", y:"valy2"}] or object
        "tid": null, //transaction id. used to keep track of input and output results.
        "returning": ['id', 'column_1', 'xxx']
        //tid for short
        //defaults to id?
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

//api return structure
let return_object = {
 
    output: [
        {
            data: [{}],
            transaction_id: "",
            error_msg: '',
            count: ''
        }
        //if batch each request has a separate object
    ],
    error: (str),
    types: {} //column_name or alias as key. type as value
}