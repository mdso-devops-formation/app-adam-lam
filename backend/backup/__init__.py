from flask import Flask
from flask_mysqldb import MySQL
from flask import jsonify

back = Flask(__name__)

# Configuration of db
back.config["MYSQL_HOST"] = "localhost"
back.config["MYSQL_USER"] = "mdso"
back.config["MYSQL_PASSWORD"] = "mdso1234"
back.config["MYSQL_DB"] = "mdso"

# Extra configs, optional:
back.config["MYSQL_CURSORCLASS"] = "DictCursor"
back.config["MYSQL_CUSTOM_OPTIONS"] = {"ssl": {"ca": "/path/to/ca-file"}}  # https://mysqlclient.readthedocs.io/user_guide.html#functions-and-attributes

mysql = MySQL(back)

@back.route("/")
def home():
    return "<h1 style='text-align: center;'>Welcome to your back app </h1>"

@back.route("/db/")
def db():
    cur = mysql.connection.cursor()
    cur.execute(""" SELECT * FROM mdsoMember""")
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

@back.route('/identify/<name>/<mail>/')
def identify(name, mail):
    cur = mysql.connection.cursor()
    cur.execute(""" SELECT * FROM mdsoMember WHERE name=%s AND mail=%s """,(name, mail))
    data = cur.fetchall()
    cur.close()
    if( data == [ ] ):
        return jsonify("[{status: False}]")
    else:
        return jsonify(data)

if __name__ == "__main__":
    back.run(debug=True)
