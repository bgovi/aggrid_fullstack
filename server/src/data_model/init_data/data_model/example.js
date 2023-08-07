// inject schema if postgres and if available

// module.exports = function(sequelize, DataTypes) {

//     return sequelize.define("project", {
//         name: DataTypes.STRING,
//         description: DataTypes.TEXT,
//     }, {
//         schema: 'prefix',
//         classMethods: {
//             method1: function() {},
//             method2: function() {}
//         },
//         instanceMethods: {
//             method3: function() {}
//         }
//     }
// };

// sequelize.createSchema('prefix').then(() => {
//     // new schema is created
// });

//sync() create table if not exists
//alter alters table to match