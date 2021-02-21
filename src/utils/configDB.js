module.exports =  {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  
    server: process.env.DB_SERVER,   
    database: process.env.DB_DATABASE,    
    //port: process.env.DB_PORT,    
    pool: {
        max: 10,       
        min: 0,   
        idleTimeoutMillis: 30000  
    },
    options: {
        //trustedConnection: true
    }
}      