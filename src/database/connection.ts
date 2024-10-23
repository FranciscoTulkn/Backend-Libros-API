import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbURL: string | undefined = process.env.CONNECTION;

    if(!dbURL){
      throw new Error('No hay conexión con la base de datos');
    }

    await mongoose.connect(dbURL);
    console.log('Base de datos conectada');
  } catch (error) {
    console.log(error);
  }
};