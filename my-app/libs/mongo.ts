import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      process.env.MONGODB_URI as string,
      options as mongoose.ConnectOptions
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongoDB;
