import sqlite3
from datetime import datetime

# Función para crear conexión
def crear_conexion():
    try:
        conexion = sqlite3.connect("juego_memoria.db")
        return conexion
    except sqlite3.Error as e:
        print(f"Error al conectar a la base de datos: {e}")
        return None

# Función para crear la tabla de intentos
def crear_tabla_intentos():
    conn = crear_conexion()
    if conn:
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS intentos (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            nombre_jugador TEXT,
                            aciertos INTEGER,
                            intentos INTEGER,
                            tiempo REAL,
                            nivel INTEGER,
                            fecha TIMESTAMP
                          )''')
        conn.commit()
        conn.close()

# Función para registrar el intento en la base de datos
def registrar_intento(nombre_jugador, aciertos, intentos, tiempo, nivel):
    conn = crear_conexion()
    if conn:
        cursor = conn.cursor()
        cursor.execute('''INSERT INTO intentos (nombre_jugador, aciertos, intentos, tiempo, nivel, fecha) 
                          VALUES (?, ?, ?, ?, ?, ?)''', 
                       (nombre_jugador, aciertos, intentos, tiempo, nivel, datetime.now()))
        conn.commit()
        conn.close()

# Función para mostrar los intentos
def mostrar_intentos():
    conn = crear_conexion()
    if conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM intentos')
        intentos = cursor.fetchall()
        for intento in intentos:
            print(f"ID: {intento[0]}, Nombre: {intento[1]}, Aciertos: {intento[2]}, Intentos: {intento[3]}, Tiempo: {intento[4]}, Nivel: {intento[5]}, Fecha: {intento[6]}")
        conn.close()


def reiniciar_tabla_usuarios():
    conn = crear_conexion()
    if conn:
        cursor = conn.cursor()
        cursor.execute("DROP TABLE IF EXISTS usuarios") 
        cursor.execute('''CREATE TABLE usuarios (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            nombre_usuario TEXT UNIQUE NOT NULL,
                            contrasena TEXT NOT NULL
                          )''')  
        conn.commit()
        conn.close()

crear_tabla_intentos()
reiniciar_tabla_usuarios()