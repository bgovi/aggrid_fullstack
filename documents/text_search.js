let x = [

//stype rank or filter
//threshold
//bool

//rank or filter or map
//tsfilter or tsrank or map

//srank appears in order by default

//if rank only? check filter

//add parameter to input order?

//rank only. rank and filter
//filter only


//tsfilter
//tsrank //add to filters

{'sfield':'search_string', 'stype': 'tsfilter',  'column': '',



input: 'string or json',

//tsquery
//tsvector

//gin index

//expression




operation: {

    //tsrank_filter
    //threshold

    //function

    //expression

},

//rank in select statement

//filter added as cross join
// SELECT 
//     courses.id,
//     courses.title,
//     courses.description,
//     ts_rank(to_tsvector(courses.title), query) as rank_title,
//     ts_rank(to_tsvector(courses.description), query) as rank_description
// FROM 
//     courses, 
//     to_tsvector(courses.title || courses.description) document,
//     to_tsquery('sales') query
// WHERE query @@ document
// ORDER BY rank_description, rank_title DESC

//map

// courses.title LIKE '%java%' OR courses.description LIKE '%java%'


//input cast as ts_query

//ts_vector cast?
//column concatenated


// SELECT title, ts_rank_cd(textsearch, query, 32 /* rank/(rank+1) */ ) AS rank
// FROM apod, to_tsquery('neutrino|(dark & matter)') query
// WHERE  query @@ textsearch
// ORDER BY rank DESC
// LIMIT 10;


// true/false or threshold
//json or string. 
//input type cast
//input keys with default for json

//search style?

//object is conditional where clause

//if map

//multicolumn and if not null

//text search

//search_columns: []  //casted so string and concatenated with space?
//or string for specific_column ?
//output_type filter type
//enforce json
// compare_columns?
// operator

'description': '', 'allow_null': False, 'default_value': '', 'alias': '',
'return': false,
//operator: how to define tsquery and tsvector operation?
//how to handle numerical operations?
//now to handle null?

/*
function syntax args parameter is same as column structure in model
'function': {
    'schema': '',
    'name': '',
    'args': [
        { 'field':  'name', 'required': true, 'default_value': ''}, //field used to inject user values
        { 'column': 'name'},  //column used to add table columns in funciton call
        { 'expression': 'name'} //add raw string as component. may require access to now() for example
    ]
},
*/
'function': {
    'schema': '',
    'name': '',
    'args': [
        { 'field':  'search_string', 'required': true},
        { 'column':  'name'} 
    ]
},
//this is a raw string that is injected into the query
"expression": ""
}
]


//LIKE
// courses.title LIKE '%java%' OR courses.description LIKE '%java%'
//ILIKE
//courses.title ILIKE '%sales%' OR courses.description ILIKE '%sales%'

//tsquery input. tsvector stored data
// to_tsquery('java & in & a & nutshell') @@ to_tsvector('Java in a nutshell')

/*
    ts_rank(
        to_tsvector('Java in a nutshell'),
        to_tsquery('java')
    )

    WHERE query @@ document
    ORDER BY rank_description, rank_title DESC


    //cross join query

    //where as filter or rank as filter?

    CREATE INDEX courses_search_idx ON courses USING GIN (to_tsvector(courses.title || courses.description));
*/