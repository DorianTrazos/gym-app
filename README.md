# 🔥 Configuración de Firebase (.env)

Este proyecto requiere que crees un archivo `.env` con tus credenciales de Firebase.  
**⚠️ No compartas nunca este archivo ni lo subas a GitHub.**

## 🧪 Pasos para configurar tu entorno

### 1. Crea un proyecto en Firebase

1. Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
2. Haz clic en **"Agregar proyecto"**
3. Sigue los pasos hasta finalizar la creación

### 2. Activa Firebase Authentication

1. Entra en tu proyecto de Firebase
2. Ve a la pestaña **"Authentication"**
3. Haz clic en **"Empezar"** y activa el proveedor que vayas a usar (por ejemplo, google)

### 3. Crea una app web

1. En el panel del proyecto, haz clic en el icono `</>` (Agregar app web)
2. Ponle un nombre
3. Marca la opción de usar Firebase Hosting solo si lo necesitas
4. Al finalizar, Firebase te mostrará tus claves

### 4. Crea un archivo `.env` en la raíz del proyecto

Copia y pega lo siguiente en el archivo `.env`, sustituyendo los valores por los de tu proyecto:

```.env
VITE_FIREBASE_API_KEY=tu_clave_aquí
VITE_FIREBASE_AUTH_DOMAIN=tu_dominio.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=nombre_del_proyecto
VITE_FIREBASE_STORAGE_BUCKET=tu_bucket_aquí
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

⚠️ Importante:
No cambies los nombres de las variables. Están escritas así para que el proyecto las detecte correctamente al compilar con Vite.
