

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