import sqlite3
from datetime import datetime

def registrar_intento(nombre_jugador, aciertos, intentos, tiempo, nivel):
    # Conectar a la base de datos (asegúrate de que esté creada)
    conn = sqlite3.connect('juego_memoria.db')
    cursor = conn.cursor()

    # Crear la tabla si no existe
    cursor.execute('''CREATE TABLE IF NOT EXISTS intentos (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nombre_jugador TEXT,
                        aciertos INTEGER,
                        intentos INTEGER,
                        tiempo REAL,
                        nivel INTEGER,
                        fecha TIMESTAMP
                      )''')

    # Insertar los datos del intento
    cursor.execute('''INSERT INTO intentos (nombre_jugador, aciertos, intentos, tiempo, nivel, fecha) 
                      VALUES (?, ?, ?, ?, ?, ?)''', 
                   (nombre_jugador, aciertos, intentos, tiempo, nivel, datetime.now()))

    # Guardar los cambios y cerrar la conexión
    conn.commit()
    conn.close()
