interface DataBaseConnection {
  connect(host: string, user: string, password: string): void
}

class MySqlConnection implements DataBaseConnection {
  connect(host: string, user: string, password: string): void { }
}

class MongoDBConnection implements DataBaseConnection {
  connect(host: string, user: string, password: string): void { }
}

class Auth {
  connection: DataBaseConnection

  constructor(connection: DataBaseConnection) {
    this.connection = connection
  }

  authentificate(login: string, password: string) { }
}

const sqlConnector = new MySqlConnection()
const mongoDBConnector = new MongoDBConnection()

const auth1 = new Auth(sqlConnector)
const auth2 = new Auth(mongoDBConnector)