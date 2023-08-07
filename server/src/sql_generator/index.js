/*
This modules is used to create the sql string to be ran


*/


// subfield generator

class sql_generator {
    constructor(agfields, route, model_config, payload, is_test ) {

    }

    create_sql () {

    }
    create_function () {

    }
    raw_query () {

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
            (   SELECT type_cast as column, .. FROM 
                    VALUES (:bind, :bind) 
                
                
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

    //insert into from
    //update from
    //delete from


    //rls
    //subquery
}


//api_error table

//select


//insert


//update


//delete


//truncate

//save


//map field to column

//map field to alias

//text_cast alias

//function xyz

//return function