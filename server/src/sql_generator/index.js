/*
This modules is used to create the sql string to be ran

only postgres is supported currently


*/
const mustache = require('mustache');
const pg_escape = require("pg-escape")


// subfield generator
// engine i.e. postgres, mysql, .. etc
// field must be xyz

//field must start with a letter
//template generator

//error log in admin table.
//error_message, template query, data
//timestamp
//clear log button

class sql_generator {
    constructor(sql_engine, agfields, route_type, model_config, payload, is_test ) {

    }

    create_prepared_statement () {



        if (this.is_test) {
            let x = test_routes['']
            if (! x) {
                //raw query with interface
            }
            //model structure

        } else {

        }



        //returns generator function.
    }


    bind_operator( bind_type ) {
        let x = ":"
        if (bind_type = 'bind') {x = '$'}
        return x
    }
    bind_name( bind_type ) {
        if (bind_type == 'bind') {return 'bind'}
        else if (bind_type == 'replacements') {return 'replacements'}
        else { return 'replacements' }
    }

    bind_object( interface ) {
        /*
            loops through interface and creates object for replacements when using
            expressions

            loop through function also?
        */
        let bind_char = this.bind_operator()
        //need bind map first

        //loop through expression
        let exps = []
        let bind_fields = {}
        for(let i = 0; i < interface.length; i++ ) {
            let x = interface[i]
            if (x.hasOwnProperty('field') ) {
                let fx = x['field']
                bind_fields[fx] = `${bind_char}${fx}`
                
            } else if ( x.hasOwnProperty('vfield') ) {
                if (this.is_expression(x)) {continue}

                let fx = x['vfield']
                bind_fields[fx] = `${bind_char}${fx}`
                //if is expression

            } else if ( x.hasOwnProperty('agfield') ) {
                if (this.is_expression(x)) {continue}
                this.agfield_parser(x)
                //referenced as select


                //expression injected on insert/update/delete?

                //if is expression

            } else if ( x.hasOwnProperty('sfield') ) {
                //query
                //document

                if (this.is_expression(x)) {continue}
                //if is expression
                //type column alias

            }
        }
        let bind_exprs = {}

        for(let i =0; i < exps.length; i++) {
            // add to bind_exprs
            let x = exps[i]
            bind_fields[i] = this.expression_column( expression_template, field_map )
        }
        //add bind_exprs to bind_fields
        //maybe how should be called on select vs .. need to keep track
        //based on field type
        //injection type?
    }

    is_expression( interface_row ) {
        return interface_row.hasOwnProperty('expression')
    }


    expression_parser ( ) {
        //no referenceing other expressions
        //send error

    }
    agfield_parser( ) {
        /*
            type handling

        */

        // {'agfield': 'user_id', 'agtype': 'user_id'}, 

        //is datetime

    }

    rls_parser ( ) {

    }

    route_interface ( ) {
        //select, insert, update and delete
        //determine what fields are allowed
        //ignore text filter
    }



    expression_column ( expression_template, field_map ) {
        //
        let expr = mustache.render(expression_template, field_map)
        return expr
    }

    raw_query (bind_field, sql_template ) {
        //require all fields if missing requires default
        //what to do with select statement?

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

    //parse_payload
    parse_model (route_type) {
        if (route_type == 'select') {
            //allow select filter vs allow returning filter
            //server side injected? now to handle payload parameters
        } else if ( route_type == 'insert' ) {

        } else if ( route_type == 'update' ) {

        } else if ( route_type == 'delete' ) {

        } else if ( route_type == 'truncate' )
        {

        } else {

        }

        //all should pass

    }

    parse_route () {

    }

    raw_query () {

    }

    //bind or replace

    //field to columns
    //field to alias

    //cross joins for text filter

    //rls
    //text filter cross join

    field_to_column () {

    }

    field_to_alias () {

    }
    field_to_column_as_alias () {
        //for returning or select

    }



    returning () {
        /*
            DELETE FROM table_name
            WHERE condition
            RETURNING column1, column2, ...;
        */
    }

    dynamic_column_entry( ) {
        /*
            columns are dynamically added in insert statement
            and update statement
        */


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


    mustach_parser (bind_fields, expression_template) {
        //used to add proper bind field when using rls or expressions
        //bind_type
        //interface to data
        // Data to be used in the template
        const data = {
            name: ':John',
            age: 30,
            city: ':New York'
        };
        
        // Mustache template
        const expression_template = 'Hello, {{name}}! You are {{age}} years old and live in {{city}}.';
        //mustache syntax dollar quote string
        const output = mustache.render(template, data);
        console.log(output);
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


//build query
//template, payload_row


// constructor(sql_engine, agfields, route_type, model_config, payload, is_test ) {

// }

function update_build( sql_template, columns, data ) {
    //create set and where conditions 
}

function insert_build( sql_template, columns, data ) {
    //create set and where conditions

    //add columns that are sent and not requried
}

function select_filter_buid() {}


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