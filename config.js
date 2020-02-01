const config = {
    dbUrl : process.env.DB_URL || "mongodb://pbtxt:paola123xD@cluster0-shard-00-00-lx2tv.mongodb.net:27017,cluster0-shard-00-01-lx2tv.mongodb.net:27017,cluster0-shard-00-02-lx2tv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    port : process.env.PORT || 3000,
    host : process.env.HOST || "http://localhost",
    publicRoute : process.env.PUBLIC_ROUTE || "/app",
    filesRoute: process.env.FILES_ROUTE || 'files',

}; 

module.exports = config; 
