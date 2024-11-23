from flask import Flask, request, jsonify, send_file, redirect, url_for, send_from_directory
import sqlite3
import os
import matplotlib as plt

app = Flask(__name__)

# Función para crear conexión
def crear_conexion():
    return sqlite3.connect("juego_memoria.db")

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(os.path.abspath(os.path.curdir), filename)

@app.route('/')
def home():
    return '''
    <h1>Bienvenido al Juego de Memoria</h1>
    <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <form action="/login" method="POST">
        <label for="nombre_usuario">Usuario:</label>
        <input type="text" name="nombre_usuario" id="nombre_usuario" required><br><br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="contrasena" required><br><br>
        <button type="submit">Iniciar Sesión</button>
    </form>
    <form action="/crear_cuenta" method="POST">
        <label for="nuevo_usuario">Nuevo Usuario:</label>
        <input type="text" name="nombre_usuario" id="nuevo_usuario" required><br><br>
        <label for="nueva_contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="nueva_contrasena" required><br><br>
        <button type="submit">Crear Cuenta</button>
    </form>
    '''

# Esto para crear la tabla de usuarios
def crear_tabla_usuarios():
    conn = crear_conexion()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre_usuario TEXT UNIQUE NOT NULL,
            contrasena TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Crear cuenta
@app.route('/crear_cuenta', methods=['POST'])
def crear_cuenta():
    nombre_usuario = request.form.get('nombre_usuario')
    contrasena = request.form.get('contrasena')

    conn = crear_conexion()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO usuarios (nombre_usuario, contrasena) VALUES (?, ?)", 
                       (nombre_usuario, contrasena))
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        return jsonify({"mensaje": "El usuario ya existe"}), 400

    conn.close()
    return jsonify({"mensaje": "Cuenta creada exitosamente"})

# Inicio de sesión
@app.route('/login', methods=['POST'])
def login():
    nombre_usuario = request.form.get('nombre_usuario')
    contrasena = request.form.get('contrasena')

    conn = crear_conexion()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?", 
                   (nombre_usuario, contrasena))
    usuario = cursor.fetchone()

    conn.close()

    if usuario:
        return redirect(url_for('jugar'))  # Redirige al juego si el login es exitoso
    else:
        return jsonify({"mensaje": "Usuario o contraseña incorrectos"}), 401

# Crear tabla de intentos
def crear_tabla_intentos():
    conn = crear_conexion()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS intentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre_jugador TEXT,
            aciertos INTEGER,
            intentos INTEGER,
            tiempo REAL,
            nivel INTEGER,
            fecha TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Esto para que nos lleve al juego
@app.route('/jugar')
def jugar():
    return send_file('juego.html')  # Sirve juego.html desde la raíz

# Esto para imprimir los datos de los intentos en la consola
def imprimir_intentos():
    conn = crear_conexion()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM intentos')
    intentos = cursor.fetchall()

    if intentos:
        print("Datos de intentos:")
        for intento in intentos:
            print(intento)
    else:
        print("No hay intentos registrados en la base de datos.")
    
    conn.close()

@app.route('/guardar_resultado', methods=['POST'])
def guardar_resultado():
    datos = request.get_json()
    nombre_jugador = datos['nombre_jugador']
    aciertos = datos['aciertos']
    intentos = datos['intentos']
    tiempo = datos['tiempo']
    nivel = datos['nivel']

    conn = sqlite3.connect('juego_memoria.db')
    cursor = conn.cursor()

    # Esto para insertar los datos en la base de datos
    cursor.execute("SELECT * FROM intentos WHERE nombre_jugador = ?", (nombre_jugador,))
    jugador = cursor.fetchone()

    if jugador:
        cursor.execute("""
            UPDATE intentos 
            SET aciertos = ?, intentos = ?, tiempo = ?, nivel = ? 
            WHERE nombre_jugador = ?
        """, (aciertos, intentos, tiempo, nivel, nombre_jugador))
    else:
        cursor.execute("""
            INSERT INTO intentos (nombre_jugador, aciertos, intentos, tiempo, nivel) 
            VALUES (?, ?, ?, ?, ?)
        """, (nombre_jugador, aciertos, intentos, tiempo, nivel))

    conn.commit()

    # Esto para mostrar los datos en la consola
    print("Datos guardados para el jugador:", nombre_jugador)
    cursor.execute('SELECT nombre_jugador, aciertos, intentos, tiempo, nivel FROM intentos')
    jugadores = cursor.fetchall()
    for jugador in jugadores:
        print(f"Nombre: {jugador[0]}, Aciertos: {jugador[1]}, Intentos: {jugador[2]}, Tiempo: {jugador[3]}, Nivel: {jugador[4]}")

    conn.close()

    return jsonify({"mensaje": "Resultado guardado correctamente"})

@app.route('/ver_intentos', methods=['GET'])
def ver_intentos():
    conn = crear_conexion()
    cursor = conn.cursor()

    # esto para que nos de los datos de los jugadores
    cursor.execute('SELECT nombre_jugador, aciertos, intentos, tiempo, nivel FROM intentos')
    resultados = cursor.fetchall()

    # Mostrar los datos en consola
    print("Datos de los intentos:")
    for jugador in resultados:
        print(f"Nombre: {jugador[0]}, Aciertos: {jugador[1]}, Intentos: {jugador[2]}, Tiempo: {jugador[3]}, Nivel: {jugador[4]}")

    conn.close()

    return jsonify(resultados)

# Inicializar la base de datos
def inicializar_bd():
    crear_tabla_usuarios()
    crear_tabla_intentos()

if __name__ == '__main__':
    inicializar_bd()
    app.run(debug=True)

