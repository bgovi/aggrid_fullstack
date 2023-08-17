/*
used for model compliance

i.e. now() in postgres is equivalent to GetDate in sql server


*/


function type_cast_value(sql_engine, column_field, sql_type) {
    if (sql_engine == 'postgres') {
        return `(${column_field})::${sql_type}`
    } else {
        return `CAST( ${column_field} AS ${sql_type} )`

    }
}

function type_cast_column(sql_engine, column_field, column_name, sql_type) {
    if (sql_engine == 'postgres') {
        return `(${column_field})::${sql_type} as ${column_name}`
    } else {
        return `CAST( ${column_field} AS ${sql_type} ) as ${column_name}`
    }
}

function escape_character(sql_engine) {
    if (sql_engine == 'postgres') {
        return '"'
    } else { return '"' }
}

function date_now(sql_engine) {
    if (sql_engine == 'postgres') {
        return 'now()'
    } else { return 'now()' }

}