import dotenv from "dotenv";
dotenv.config();
export default `mongodb+srv://crispen:${process.env.PASSWORD}@cluster0.haoyt.mongodb.net/Todos?retryWrites=true&w=majority`;
