import password from "./keys.js";

const db_name = "linkedin";
const db_url = `mongodb+srv://crispen:${password}@cluster0.zdycu.mongodb.net/${db_name}?retryWrites=true&w=majority`;

export default db_url;
