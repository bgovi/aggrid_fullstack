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


//ilike_or
//ilike_and

//like_or
//like_and

//for rank create ts_vector on columns as cross_join
//column name is available in order by
// like_any
// ilike_any

// select 'robin pattern batman' LIKE ANY (array['%pattern1%', '%pattern2%', '%pattern3%']);

//select 1 WHERE 'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )
//select 1 WHERE 'world' ILIKE ANY ( SELECT '%' || unnest(  ARRAY_REMOVE(STRING_TO_ARRAY('Hello World OpenAI', ' '), '') ) || '%' )

let x = {'sfield':'search_string', 'stype': 'tsfilter',  'column': '',
    'input': 'string or json',
    //phraseto_tsquery
    //plainto_tsquery
    //default operator. can overwrite
    //websearch_to_tsquery

    // to_tsquery('english', 'cat | dog')

    //tsvector: column of ts_vector to use
    //to_tsvector: concatenated list of columns
    'operation': {
        //tsrank_filter
        //threshold

        //function
        //rank in select statement
        //expression

    }
    // plainto_tsquery('english', 'cat dog')

    // WHERE your_column LIKE ANY (array['%pattern1%', '%pattern2%', '%pattern3%']);

}

let y = {
    'sfield':'search_string', 'stype': 'map',  'column': '',
    'input': 'string or json',
    //phraseto_tsquery
    //plainto_tsquery
    //default operator. can overwrite
    //websearch_to_tsquery


    //conditions on how to search. dynamic assembly


    // order chosen by precendence and existance in object
    k:[
        { 'key': '', 'input_type': '=' },

        { 'key': ['', ''], "search_type": '', 'columns': '' } 


    ]
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