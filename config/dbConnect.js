import mongoose from "mongoose";

const dbConnect = async () => {
  if ( mongoose.connection.readyState >= 1 )
  {
      return;
   }
   try {
      await mongoose.connect(process.env.DB_LOCAL_URL);
      console.log("Connected to local database.");
   } catch (err) {
      console.log("Error connecting to database:", err);
   }
};
export default dbConnect;
