/*
query assembly select

Select cast (column_1 as text ) as alias_1,
    cast (column_2 as text ) as alias_2
    FROM (
        --null option here with type cast to match types
        --if null should be excluded remove flag.

        UNION ALL

        Select column_1, column_2, text_filter as text_filter from table
        //coalesce null for text_filter
        --filters
    ) "a"
    --text_filter here?
    --order_by
    --add order_by text filter here

--if null injection


Select cast (column_1 as text ) as alias_1,
    cast (column_2 as text ) as alias_2
    FROM (
        select null::column_1_type, null::column_2_type
            UNION ALL
        Select column_1, column_2,  from table
        --filters
    ) "a"
    --text_filter here?
    --order_by




query assembly rls
    INSERT INTO table2
    SELECT * FROM table1
    WHERE condition;

    INSERT INTO table2 (column1, column2, column3, ...)
    SELECT column1, column2, column3, ...
    FROM table1
    WHERE condition;

// insert into LeadCustomer (Firstname, Surname, BillingAddress, email)
// select 
//     'John', 'Smith', 
//     '6 Brewery close, Buxton, Norfolk', 'cmp.testing@example.com'
// where not exists (
//     select 1 from leadcustomer where firstname = 'John' and surname = 'Smith'
//  SELECT * FROM (VALUES (1, 'one'), (2, 'two'), (3, 'three')) AS t (num,letter);


//ts_ran and tas query?

    select *
    from (
        SELECT
            pictures.id,
            ts_rank_cd(to_tsvector('english', pictures.title), 
            to_tsquery('small dog')) AS score
        FROM pictures
        --filters go here--
    ) s
    WHERE score > 0
    ORDER BY score DESC

https://stackoverflow.com/questions/12933805/best-way-to-use-postgresql-full-text-search-ranking


query assembly insert/update/delete



appending nulls





return type. everything casted to string. how to handle big int. big numbers
and datetime.


cast(column as text) as alias

*/

//how to handle versions?

//set null
//set main

//version_number decimal?
//how to specify version in api call?

//main route /namespace/name/action
//version route /namespace/name/version/action?
//http://www.example.com/api/products?version=1

//latest not in testing? permissions?
