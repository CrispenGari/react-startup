import pwd from "../keys";

const dbName: string = "Products";
const conn = `mongodb+srv://crispen:${pwd}@cluster0.max21.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export default conn;
