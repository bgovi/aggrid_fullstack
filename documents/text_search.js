/*
Just return on default if set true or



*/


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


//expects string

//tsfilter
//tsrank //add to filters
//ilike

//func_rank
//func_filter
//func_filter_rank



//for rank create ts_vector on columns as cross_join
//column name is available in order by
// like_any
// ilike_any
// tsfilter
// tsrank
// tsfilter_rank
// e_rank
// e_filter
// e_filter_rank

//SELECT to_tsvector('english', column1 || ' ' || column2 || ' ' || column3) AS concatenated_vector

//add to select statemetn
let x = {'sfield':'search_string', 'stype': 'tsfilter',  'column': '',
    'input': 'string or json',
    //return_value:?

    //query_type:
        //phraseto_tsquery
        //plainto_tsquery
        //default operator. can overwrite
        //websearch_to_tsquery
        // to_tsquery('english', 'cat | dog'


                //search_columns: []  //casted so string and concatenated with space?

    //document_type:

    //tsvector: column of ts_vector to use
        //select 1 WHERE 'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )
        //select 1 WHERE 'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )
        //REPLACE(your_column, '\n', ' ')


    // plainto_tsquery('english', 'cat dog')

    // WHERE your_column LIKE ANY (array['%pattern1%', '%pattern2%', '%pattern3%']);

    //to_tsvector: concatenated list of columns
    "search_columns": [],
    "delimiter": "",
    "expression": "" //for advanced search. i.e. concatenating values etc.

}


// SELECT *
// FROM your_table
// WHERE your_column ILIKE '%word1%'
//   AND your_column ILIKE '%word2%'
//   AND your_column ILIKE '%word3%';




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

//operator: how to define tsquery and tsvector operation?
//how to handle numerical operations?
//now to handle null?





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

// select 'robin pattern batman' LIKE ANY (array['%pattern1%', '%pattern2%', '%pattern3%']);

//select 1 WHERE 'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )
//select 1 WHERE 'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )
//REPLACE(your_column, '\n', ' ')