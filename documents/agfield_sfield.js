/*
sfield: for text based search against multiple fields. This can be a filter only, rank, or filter and rank.
filters are not available in the select statements or order by. rank is. and can be filtered separately based
on a threshold value. value: stores the string to send. 


ilike or like as text search is just injected into the where string.

sfield return:
    optional if query value is present.

filter_rank does on rank option



*/






//SELECT to_tsvector('english', column1 || ' ' || column2 || ' ' || column3) AS concatenated_vector

//add to select statemetn
let xfilter = {'sfield':'search_string', 'stype': 'tsfilter',  'column': '',
    'output_type': 'bool', //or numeric
    'default': '', //always injected into select statement
    //if filter return false as defaults, else 0?
    'return': true, //include in select statement? hidden by default

    //defaults to '' if not in use.

    //query_type: for tsfilter or tsrank
        //phraseto_tsquery
        //plainto_tsquery
        //default operator. can overwrite
        //websearch_to_tsquery
        // to_tsquery('english', 'cat | dog'


                //search_columns: []  //casted so string and concatenated with space?

    //document_type:
    // in where clause
    // like_any
    // ilike_any

    // in cross join
    // tsfilter
    // tsrank
    // tsfilter_rank
    // e_rank

    //to_tsvector: concatenated list of columns
    "document_columns": [],
    "document_delimiter": "",
    "document_expression": "", //for advanced search. i.e. concatenating values etc.
    'document_cast': "",
    'query_cast': "",
    "query_delimiter": "",
    "query_expression": "",

    //if using expression how to convert query and document?
    //// e_filter



    /*like_any or ilike_any structure
        //'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )
        //CONCATENATE(column_1, ' ', column_2) ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY(query_string, ' '), '') ) || '%' )
        // space can be replaced with document_delimiter or query_delimiter to change string concatenation types.

        ///need to use replace and coalesce to empty string for null.
        //if all any field null concat returns null
    */

    'query_name': "", //defaults ? search_string_query
    'document_name': "", //defaults ? search_string_document
    'tsvector': "", //name of precaulcated tsvector //ts_vector cast?
    'to_tsvector': []

    /*
        query_types:
            phraseto_tsquery, plainto_tsquery, websearch_to_tsquery to_tsquery 
            plainto_tsquery('english', query_string)

        filter added as cross join
        SELECT 
            courses.id,
            courses.title,
            courses.description,
            ts_rank(to_tsvector(courses.title), query) as rank_title,
            ts_rank(to_tsvector(courses.description), query) as rank_description
        FROM 
            courses, 
            to_tsvector(courses.title || courses.description) document_name,
            to_tsquery('sales') query_name
        WHERE query @@ document
        ORDER BY rank_description, rank_title DESC

    */

    //gin index
    //CREATE INDEX courses_search_idx ON courses USING GIN (to_tsvector(courses.title || courses.description));
}

let xrank = {
    'sfield':'search_string', 'stype': 'tsrank',  'column': '',
    'output_type': 'bool', //or numeric
    'default': '1', //always injected into select statement
    //if filter return false as defaults, else 0?
    'return': true, //include in select statement? hidden by default


    //depends on filter query.

    //to ignore filter and only use rank set threshold to null in depedant filter.
    //than use rank to filter or order_by based on threshold
    //requires listing depdencancy.

    //this appears in xyz.

    //requires variable if not in payload replace with default

    //how to share query?
    //for using same query sting
    //   //sub_rank // plainto_tsquery('english', 'cat dog')

    // SELECT title, ts_rank_cd(textsearch, query, 32 /* rank/(rank+1) */ ) AS rank
    // FROM apod, to_tsquery('neutrino|(dark & matter)') query
    // WHERE  query @@ textsearch
    // ORDER BY rank DESC
    // LIMIT 10;

    // ts_rank(
    //     to_tsvector('Java in a nutshell'),
    //     to_tsquery('java')
    // )

    // WHERE query @@ document
    // ORDER BY rank_description, rank_title DESC

    // SELECT title, ts_rank_cd(textsearch, query, 32  ) AS rank
    // FROM apod, to_tsquery('neutrino|(dark & matter)') query
}

let xfilter_rank = {
    'sfield':'search_string', 'stype': 'tsfilter_rank',  'column': '',
    'output_type': 'bool', //or numeric
    'default': '1', //always injected into select statement
    //if filter return false as defaults, else 0?
    'return': true, //include in select statement? hidden by default

    //cross join filter and rank calculation.

    //does both.
    //accessible as a value
    //if not sent rank set query defaults to ''
}




//on_insert, on_update, on_delete, on_input. mutation information handled by server.
//on_input if field is in json value is replaced by server. otherwise left as undefined.
//on_insert, on_update adds fields regardless on these operations.
//user allowed to delete on_select. can it be pulled?
// {'agfield': 'updated_at' , 'agtype': 'updated_at', 'column': 'updated_at'},
// {'agfield': 'created_at' , 'agtype': 'created_at', 'column': 'Creataed At'},
// {'agfield': 'deleted_at' , 'agtype': 'deleted_at'}, //expression
// {'agfield': 'user_check' , 'agtype': 'expression', 
//     //modification_rules on_insert, on_update, on_delete, on_input
//     'expresssion': ''
// }

/*
agfield key words come from the users table. agfields are generally bidierectional.
selects are preformed on the column_name. For inserts, updates or other data modifications
the server injects values. either as an sql expression or the value stored in the agfield used.
the fields will always be injects unless otherwise specified by using on_update, on_delete, on_insert.
on_input means the key:value pair must be present in the payload. the value is ignored so can be set as null.
This is to allow for optional injection of server side values.

id
oauth_id
first_name
last_name

keywords as 
ag_field
ag_id
ag_oauth_id
ag_first_name
ag_updated_at
ag_created_at
ag_deleted_at
ag_expression for input or update,
*/