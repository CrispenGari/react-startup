import password from "../keys/keys.js";
const database_name = "history";

const connection_url = `mongodb+srv://crisp:${password}@cluster0.krtvn.mongodb.net/${database_name}?retryWrites=true&w=majority`;

export default connection_url;
