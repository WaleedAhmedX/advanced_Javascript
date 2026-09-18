class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        this.connection = "Database Connected";

        Database.instance = this;
    }

    connect() {
        console.log(this.connection);
    }
}

const db1 = new Database();
const db2 = new Database();

db1.connect();

console.log(db1 === db2);