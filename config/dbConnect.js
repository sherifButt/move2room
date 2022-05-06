import mongoose from "mongoose";

const dbConnect = async () => {
   if (mongoose.connection.readyState >= 1) {
      return;
   }
   try {
      await mongoose.connect(
         `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
      );
      console.log("Connected to local database.");
   } catch (err) {
      console.log("Error connecting to database:", err);
   }
};
export default dbConnect;
