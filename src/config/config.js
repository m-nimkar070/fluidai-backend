const dotenv =require("dotenv")
dotenv.config()

//Taking env variables from .env file and Exporting the enviroment Variables for other modules

module.exports={
    PORT:process.env.PORT,
    MONGODB_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET
}