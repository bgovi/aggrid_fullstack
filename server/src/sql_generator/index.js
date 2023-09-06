/*
This modules is used to create the sql string to be ran

only postgres is supported currently


*/
const mustache       = require('mustache');
const pg_escape      = require("pg-escape")
const key_parameters = require('key_parameters')

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

    model_parameters () {
        /*
            generates model parameters
        */

        //if model or route missing return error?

        let route_type = this.route_type
        let is_test    = this.is_test

        let use_model = true
        let route_name = 'routes'
        if (is_test) { route_name = 'test_routes' }


        if (model_config.hasOwnProperty(route_name) ) {
            let rx = model_config[route_name]
            if (rx.hasOwnProperty(route_type) ) { use_model = false }
        }



        //api_parameters create and assemble api paramters
        let api_params = this.api_parameter_generator()
        
        
        //rls generator?
        
        //model_params
        // let crud_generator = ''

        //returns generator function. 
        //takes user_token, client_data
    }


    crud_params() {
        /*
            Used to assemble sql generator parameters.

            //if vfield is expression use to assemble column
            //complete missing information and filter

            select: requries field, vfield and agfield
            vfield if no expression adds column name to select.
            otherwise (expression) as "column" in select
            must wrap in a select so filters work on values.

            insert gets field and agfield on_insert: true/false/null or on 



        */




        //select, insert, update, delete
        //add using rls
        //add with check rls

        //
    }
    crud_types() {
        //for interface and search set behavior
        //i.e. for select/insert/update/delete 
        //optional or enforced //agfields only


    }






    bind_object( interface, search_interface ) {
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


        //text search
    }

    is_expression( interface_row ) {
        return interface_row.hasOwnProperty('expression')
    }


    expression_parser ( ) {
        //no referenceing other expressions
        //send error

    }
    agfield_parser(ag_field, bind_fields, bind_char ) {
        /*
            type handling
            user_token has ag_xx names

        */
        let sql_engine = this.sql_engine
        if (agtype == 'id')              { bind_fields[ag_field] = `${bind_char}ag_id`}
        else if (agtype == 'oauth_id')   { bind_fields[ag_field] = `${bind_char}ag_oauth_id` }
        else if (agtype == 'first_name') { bind_fields[ag_field] = `${bind_char}ag_first_name` }
        else if (agtype == 'last_name')  { bind_fields[ag_field] = `${bind_char}ag_last_name` }
        else if (agtype == 'email')      { bind_fields[ag_field] = `${bind_char}ag_email` }
        else if (agtype == 'created_at') { bind_fields[ag_field] = key_parameters.date_now(sql_engine) }
        else if (agtype == 'updated_at') { bind_fields[ag_field] = key_parameters.date_now(sql_engine) }
        else if (agtype == 'deleted_at') { bind_fields[ag_field] = key_parameters.date_now(sql_engine)}
    }

    rls_parser ( ) {
        //if all

        //select, insert, update and delete
        //upsert uses insert and update?
        //determine what fields are allowed
        //ignore text filter
    }


    expression_column ( expression_template, field_map ) {
        //
        let expr = mustache.render(expression_template, field_map)
        return expr
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

}