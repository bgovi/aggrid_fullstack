/*
Handles generation of rls component

USING: This clause is used in combination with SELECT, UPDATE, DELETE, or INSERT operations to specify a 
policy that should be applied when accessing the table. The policy defines the conditions under which rows 
are visible or modifiable.

WITH CHECK: This clause is used to enforce the defined policies when inserting or updating rows in a table.
It ensures that the data being inserted or updated adheres to the conditions specified in the RLS policy

*/


class rls_policy {
    constructor(agfields, route, rls_config ) {

    }
    //on select

    //on_update
        //using add to values to check if allowed
        //on_check in the where clause
    select() {

    }


    insert() {
        /*
            INSERT INTO x.x (column_1, ..,) FROM
                SELECT * FROM (
                    SELECT cast(:field)
                ) x
                where rls
        */
    }
    upsert () {

    }

    update() {
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
    }
    delete() {
        /*
            DELETE FROM table_name WHERE id = :id AND (rls_using) 
        */
        //set where condition
    }
    delete_at() {
        /*
            UPDATE table_name SET deleted_at = now() WHERE id = :id AND (rls_using);        
        */
        //set fields
        //where condition
    }


}


/*
add to filters

field 

in_subquery
not_in_subquery



main_column
sub_column


field:

exists
schema:
name:
return_column:

//rls only

//where processed by filters

//sub_filter for rls structure

where: [{
    main_field  
    sub_column: must be a-zA-Z0-9_
    field

    value_1:
    operator: 
    value_2

    main_cast
    sub_cast

}

SELECT product_id, product_name
FROM products p
WHERE EXISTS (
    SELECT 1
    FROM order_items oi
    WHERE oi.product_id = p.product_id
);


*/