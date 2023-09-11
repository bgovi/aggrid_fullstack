/*
This modules is used to parse the api parameters and fill in gaps and expressions.
only postgres is supported currently

let api_interface = [
    Array of objects. Contains information for crud operations.
    Operation order is not preserved.

    {
        "crud_type": "", //only needed for save route 
        "default_fields": "", //object with default type {x:"default_value_x", y:"default_value_y"}
        "set_fields": "",  //array that has columns that should be used for set
        "on_conflict": "", //string a-zA-Z0-9
        "on_constraint": "", //string a-zA-Z0-9
        "search_filter": "", //string or object with quick filter type:
        "search_rank": "", //bool
        "returning": "", //array of fields to used for returning [id, column_1, xxx] //defaults to id?
        "rls": "",
        "interface": ""
        "query" "":
        "deleted_at": 
        "schema": ""
        "table": ""
        "is_invalid": {} //missing info?

        "field_types": //available for operations based on select/insert/update/delete
        "required": 


            split_part(str, ':', 2) as part_no_2, 
            split_part(str, ':', 3) as part_no_3

        }
]

run compile and explain

*/

const mustache       = require('mustache');
const key_parameters = require('key_parameters')

class sql_generator {
    constructor(sql_engine, agfields, route_type, model_route_config, is_test ) {

    }



    api_parameters () {
        /*
            returns function used to assemble sql query for a specific route
        */

        //if model or route missing return error?
        let route_ = null


        //is test


        //schema
        //table
        //view vfields are for views unless is expression then can be both
        //is table or view



        let params = this.model_parameters() //get rls, interface and 
        //api_parameters create and assemble api paramters
        let api_params = this.api_parameter_generator(params['interface'], params['rls_object'], params['search_interface'])
        let sql_generator = null
        return sql_generator

    }

    route_parameters () {

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

    agfield_parser(ag_field, bind_fields, bind_char, route_type ) {
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
        else if (agtype == 'expression') {
            //insert, update, delete

        }



    }

    rls_parser ( route_type, rls_object, field_map ) {
        /*
            creates rls expressions for each crud operations
        */

        let crud_types = ['select', 'insert', 'update', 'delete']
        if (rls_object.hasOwnProperty(route_type) ) {
            let rls_statement = this.parse_expression(rls_object[route_type], field_map)
            return rls_statement
        } else if ( rls_object.hasOwnProperty('default') ) {
            let rls_statement = this.parse_expression(rls_object['default'], field_map)
            return rls_statement
        }

        return null
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