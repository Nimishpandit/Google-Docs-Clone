import mongoose from "mongoose";

const Connection = async (username = "user", password = "nimish") => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.52yndz0.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
