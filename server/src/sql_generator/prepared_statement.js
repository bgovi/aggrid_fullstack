/*
Handles generation of rls component

USING: This clause is used in combination with SELECT, UPDATE, DELETE, or INSERT operations to specify a 
policy that should be applied when accessing the table. The policy defines the conditions under which rows 
are visible or modifiable.

WITH CHECK: This clause is used to enforce the defined policies when inserting or updating rows in a table.
It ensures that the data being inserted or updated adheres to the conditions specified in the RLS policy

calculate fields regardless. has default value when not entered.
*/

        //model_params

        // let crud_generator = ''

        //returns generator function. 
        //takes user_token, client_data

const pg_escape = require("pg-escape")

class prepared_generator {
    /*
        Creates functions that assemble queries

    */



    constructor(sql_engine, api_interface, agfields, route_type, rls_config ) {

    }
    //on select

    //on_update
        //using add to values to check if allowed
        //on_check in the where clause
    create_prepared_statement_from_model(sql_engine, model) {
        if (raw_query) {
            if (route == 'select') {

                //append_filters
            }


        }
        else {
            if (route == 'select') {

            } else if (route = 'insert') {

            } else if (route = 'update') {
                
            } else if (route = 'delete') {
                
            } else if (route = 'truncate') {
                
            }

        }

    }

    create_prepared_statement_from_route(sql_engine, model) {
        if (raw_query) {
            if (route == 'select') {

                //append_filters
            }


        }
        else {
            if (route == 'select') {

            } else if (route = 'insert') {

            } else if (route = 'update') {
                
            } else if (route = 'delete') {
                
            } else if (route = 'truncate') {
                
            }

        }

    }

    crud_types() {
        //for interface and search set behavior
        //i.e. for select/insert/update/delete 
        //optional or enforced //agfields only


    }

    type_cast () {
        //everything is sent as string by default. can overwrite.
        //data is casted into correct type on data modification.
        //engine type
    }


    create_function () {

    }


    from_statement ( sql_engine, model ) {
        /*
            Generally only one from statement. May require multiple if cross join
            is required for full text search



            let sql_model = ""
            let prod_routes = ""
            let test_routes = ""


            let use_prod_model = ""
            let use_test_model = ""
            // 'schema': "prod_schema",
            // 'table': "table_name",
            // 'view': "view", //meant for select when inner joins are required. primarily meant for select. table name
            // //will be used when view is not available.
            // 'test_schema': "test_schema",
            // 'test_table': "table_name",
            // 'test_view': "view_name",
        */
        //from view or table? 
    }

    ts_query_cross_join () {
        //assembles values for cross join

        //add a default if undefined.
        //modify from statement and add filter
    }

    prepend_null () {
        /*
            For select query prepends with null. Used as first row.
            cast everything as null with correct type

            //need final statement
        */

        // null loop with type cast for select
    }


    select_rls() {
        /*
                --cast types?

                --where to prepend null

                SELECT * FROM (
                    SELECT column_1, ...,
                    FROM x
                    CROSS JOIN
                    --text_filter
                ) x
                where rls


                add to filters
        */
    }


    insert_rls() {
        /*
            INSERT INTO x.x (column_1, ..,) FROM
                SELECT * FROM (
                    SELECT cast(:field)
                ) x
                where rls
        */
    }
    upsert_rls () {
        /*
            INSERT INTO x.x (column_1, ..,) FROM
            SELECT * FROM (
                SELECT cast(:field)
            ) x
            ON CONFLICT x
            ON CONSTRAINT x
        */


        //columns


    }

    update_rls() {
        /*
            UPDATE target_table
            SET target_column = subquery_calculated_value
            FROM (
                SELECT join_column, aggregated_value
                FROM source_table
                WHERE rls_using
            ) AS subquery_alias
            WHERE id = id 
                AND (rls_with_check)
            ;
        */

        //columns
        //returning columns
    }
    delete_rls() {
        /*
            DELETE FROM table_name WHERE id = :id AND (rls_using) 
        */
        //set where condition
    }
    delete_at_rls() {
        /*
            UPDATE table_name SET deleted_at = now() WHERE id = :id AND (rls_using);        
        */
        //set fields
        //where condition
    }

    //regular

    upsert () {
        //columns
        //values placeholder
        //returning columns



    }


    insert () {
        /*
            INSERT INTO schema.table (x,y) FROM
            (   SELECT type_cast as column
                
                
            ) x (x,Y) WHERE (rls)
        */

        //columns
        //returning columns

    }
    update () {
        /*
            UPDATE dummy
                SET customer=:val1,
                address=:val2
            WHERE dummy.address_id=subquery.address_id
            AND --using_rls
            ;
        */

        //add bind_exprs to bind_fields
        //maybe how should be called on select vs .. need to keep track
        //based on field type
        //injection type?

        //columns
        //returning columns


    }
    delete () {
        /*
            DELETE FROM films
                WHERE films.id = :id AND (--using_rls)
        */
    }
    returning() {
        //assemble returning statement with type cast
    }
    function_call () {
        /*
            select x.x( )

        function syntax args parameter is same as column structure in model
        'function': {
            'schema': '',
            'name': '',
            'args': [
                { 'field':  'name', 'required': true, 'default_value': ''}, //field used to inject user values
                { 'expression': ''} //add raw string as component. may require access to now() for example
            ]
        }
        */
    }

    raw_query (bind_field, sql_template ) {
        //require all fields if missing requires default
        //what to do with select statement?

        //check if valid query with select wrapper?
        //ping sqlglot. also know transactions

    }

    literal_escape(sql_engine, sql_literal) {
        //only allow alphanumeric and spaces?
        const regex = /^[a-zA-Z0-9_]+$/;
        if ( regex.text(sql_literal) ) {
            return `"${sql_literal} "`
        }
        else {
            return pg_escape.ident(sql_literal)
        }
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
}

// crud_params() {
//     /*
//         Used to assemble sql generator parameters.

//         //if vfield is expression use to assemble column
//         //complete missing information and filter

//         select: requries field, vfield and agfield
//         vfield if no expression adds column name to select.
//         otherwise (expression) as "column" in select
//         must wrap in a select so filters work on values.

//         insert gets field and agfield on_insert: true/false/null or on 



//     */




//     //select, insert, update, delete
//     //add using rls
//     //add with check rls
// }

   //parse_payload
//    parse_model (route_type) {
//     if (route_type == 'select') {
//         //allow select filter vs allow returning filter
//         //server side injected? now to handle payload parameters
//     } else if ( route_type == 'insert' ) {

//     } else if ( route_type == 'update' ) {

//     } else if ( route_type == 'delete' ) {

//     } else if ( route_type == 'truncate' )
//     {

//     } else {

//     }

//     //all should pass
// }