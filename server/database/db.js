import mongoose from "mongoose";

const connection = async (MONGO_URI) => {
  try {
    await mongoose.connect(
      MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("DB Connected");
      }
    );
  } catch (error) {
    console.log(`DAtabase Connection error ${error}`);
  }
};
export default connection;
