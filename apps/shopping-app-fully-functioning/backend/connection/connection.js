import password from "../keys/password.js";
const database_name = "shopping";
const _url = `mongodb+srv://crispen:${password}@cluster0.a3k3l.mongodb.net/${database_name}?retryWrites=true&w=majority`;

export default _url;
