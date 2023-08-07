/*
This modules is used to create the sql string to be ran


*/


// subfield generator
// engine i.e. postgres, mysql, .. etc
class sql_generator {
    constructor(sql_engine, agfields, route_type, model_config, payload, is_test ) {

    }

    create_sql () {

    }

    //map field to column
    //map field to alias for final return type
    //select column as Alias
    //text_cast alias

    type_cast () {
        //everything is sent as string by default. can overwrite.
        //data is casted into correct type on data modification.
        //engine type
    }

    create_function () {

    }
    parse_model () {

    }

    parse_route () {

    }

    raw_query () {

    }
    raw_select () {
        //wrap so filters and order by can be used
        //i.e. select * FROM ( select function_x(:field_1) ) x
        //where statements 
    }


    prepend_null () {
        /*
            For select query prepends with null. Used as first row.
        */
    }

    //bind or replace

    //field to columns
    //field to alias

    //cross joins for text filter

    //rls
    //text filter cross join

    insert_rls () {
        /*
            INSERT INTO schema.table (x,y) FROM
            (   SELECT type_cast as column, .. FROM 
                    VALUES (:bind, :bind) 
                
                
            ) x (x,Y) WHERE (rls)
        */
    }
    update_rls () {
        /*
            INSERT INTO schema.table (x,y) FROM
            (   SELECT (:bind)::text as column
                
            ) x (x,Y) WHERE (rls)
        */
    }
    delete_rls () {

    }
    select_rls () {
        /*
            SELECT * FROM (
                SELECT * FROM schema.table
                WHERE (rls )
            )

            SELECT  column1
            FROM  table_1
            WHERE 
                EXISTS( SELECT 
                            1 
                        FROM 
                            table_2 
                        WHERE 
                            column_2 = table_1.column_1);
        */
    }
    ts_query_cross_join () {
        //add a default if undefined.
    }

    field_to_column () {

    }

    field_to_alias () {

    }
    field_to_column_as_alias () {
        //for returning or select

    }

    function_call () {
        
    }

    returning () {
        /*
            DELETE FROM table_name
            WHERE condition
            RETURNING column1, column2, ...;
        */
    }


    //insert into from
    //update from
    //delete from

    //select
    //insert
    //update
    //delete
    //truncate


    //rls
    //subquery
}

//concat model syntax with crud statement and payload
//if 1 value returned success if 0 then error

//api_error table

/*
    pagination sql server

    SELECT employee_id, first_name, last_name
    FROM employees
    ORDER BY employee_id
    OFFSET 10 ROWS
    FETCH NEXT 10 ROWS ONLY;
*/