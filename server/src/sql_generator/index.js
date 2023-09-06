/*
This modules is used to create the sql string to be ran

only postgres is supported currently


*/
const mustache       = require('mustache');
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
    constructor(sql_engine, agfields, route_type, model_config, is_test ) {

    }



    query_generator () {
        /*
            returns function used to assemble sql query for a specific route
        */

        //if model or route missing return error?


        let params = this.model_parameters() //get rls, interface and 
        //api_parameters create and assemble api paramters
        let api_params = this.api_parameter_generator(params['interface'], params['rls_object'], params['search_interface'])
        let sql_generator = null
        return sql_generator


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


        let get_params = '' //get rls, interface and 



        //api_parameters create and assemble api paramters
        let api_params = this.api_parameter_generator()
        //get route or model type
        
        
        //rls generator?
        
        //model_params
        // let crud_generator = ''

        //returns generator function. 
        //takes user_token, client_data
    }




    api_parameter_generator( interface, rls_object, search_interface ) {
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

            } 
        }
        //rls
        let rls = this.rls_parser(rls_object, bind_fields)

        //search


        for(let i =0; i < exps.length; i++) {
            // add to bind_exprs
            let x = exps[i]
            bind_fields[i] = this.parse_expression( expression_template, field_map )
        }

    }

    is_expression( interface_row ) {
        return interface_row.hasOwnProperty('expression')
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

    rls_parser ( rls_object, field_map ) {
        /*
            creates rls expressions for each crud operations
        */
        let rls = {}
        let crud_types = ['select', 'insert', 'update', 'delete']
        for (let i =0 ; i < crud_types.length; i++) {
            let ct = crud_types[i]

            if (rls_object.hasOwnProperty('select') ) {
                rls[ct] = this.parse_expression(rls_object[crud_types], field_map)
            } else if ( rls_object.hasOwnProperty('on_all') ) {
                rls[ct] = this.parse_expression(rls_object['on_all'], field_map)
            }
        }
        return rls
    }


    parse_expression ( expression_template, field_map ) {
        /*
            // Mustache template
            const expression_template = 'Hello, {{name}}! You are {{age}} years old and live in {{city}}.';
        */
        let expr = mustache.render(expression_template, field_map)
        return expr
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