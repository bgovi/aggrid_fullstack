/*
aggrid modules


pull and push config into json or nodejs

//add repull options for dropdowns?
*/

//component configuration
let config = {
    'namespace': 'xyz',
    'name': 'xyz',
    'id': '1', //for update/delete ?
    'component': '', // survey, grid, download, upload, notes as markdown
    'description': '',

    //read only. crud operations displayed on screen
    'test': false, //for testing uses test routes
    'config': {

    }
}

//requires links to api


//add permissions link table to api
//test default false

//'ui': 'aggrid', //aggrid download import survey
//columnDefs (required)
//ui: string
//ui_params: object
    //type_check
    //api
    //colors
    //error

//api //select, insert, update, delete

//default ui

//later
//valueSetter, valueGetter, valueFormatter, cellStyle
//cellRenderer, cellEditor

//dynamic survey for grid
//tasks

/*
survey modules
bulma with pagination
*/

//


//layout same as aggrid. but allows conditional display
//pagination
//allows data initialization.

//save and next and close. for task or multiple surveys


//autoocomplete


/*
download modules
*/


//on in operation replace space with newline

//filter
//pagination
//order_by


/*
import modules
*/

//mapping
//column_matching

//filters  map to column constraints?


//best to pull in link data one time if lookups.
//best to make sure limit test works?

//add repull options for dropdowns?

//requires data field

//split for aggregation?
//Example: Aligned Grid as Footer