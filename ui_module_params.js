/*
aggrid modules


pull and push config into json or nodejs
*/

//component configuration
let config = {
    'namespace': 'xyz',
    'name': 'xyz',
    'id': '1', //for update/delete ?
    'component': '', // survey, grid, download, upload, notes as markdown

    //read only. crud operations displayed on screen
    'test': false, //for testing uses test routes
    'config': {

    }
}

// let config = {
//     'ui': 'aggrid', //aggrid download import survey
//     'namespace': 'xyz',
//     'name': 'xyz',
//     'id': '1', //for update/delete ?
//     'test': false, //for testing
//     'config': {

//     }
// }


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

//filter
//pagination
//order_by


/*
import modules
*/

//mapping
//column_matching