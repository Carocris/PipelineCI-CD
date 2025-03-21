# Proyecto CI/CD con GitHub Actions 🚀

Este es un proyecto básico de CI/CD utilizando GitHub Actions para ejecutar pruebas automatizadas en una aplicación Node.js con Express.

---

## 📌 Descripción del Proyecto
Este proyecto implementa un pipeline de **CI/CD** usando **GitHub Actions**. Cada vez que se realiza un `push` o `pull request`, se ejecutan pruebas automatizadas para verificar que la aplicación funcione correctamente.

Además, se puede configurar el despliegue automático en **GitHub Pages**.

---

## 📌 Instalación y Ejecución Local
### 🔹 Prerrequisitos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v18 o superior)
- Git

### 🔹 Clonar el Repositorio
```sh
git clone https://github.com/Carocris/PipelineCI-CD.git
cd PipelineCI-CD
```

### 🔹 Instalar Dependencias
```sh
npm install
```

## 📌 CI/CD con GitHub Actions
Este proyecto usa GitHub Actions para:
- **Ejecutar pruebas automatizadas** cada vez que se sube código.
- **Construir y verificar la aplicación** antes de su despliegue.
- **Opcional:** Desplegar en **GitHub Pages**.

---

## 📌 Licencia
Este proyecto está bajo la licencia MIT. Puedes leer más en el archivo `LICENSE`.

---

# 📌 Guía de Contribución

## 🔹 Normas de Código
- Mantén un código limpio y bien documentado.
- Sigue las convenciones de nombres en JavaScript (camelCase para variables y funciones).
- Usa `prettier` y `eslint` para mantener el formato.

## 🔹 Cómo hacer un Pull Request
1. **Haz un Fork** del repositorio.
2. **Crea una rama** con tu nueva funcionalidad:
   ```sh
   git checkout -b feature-nueva-funcionalidad
   ```
3. **Realiza los cambios y haz un commit:**
   ```sh
   git commit -m "Añadir nueva funcionalidad"
   ```
4. **Sube los cambios a tu fork:**
   ```sh
   git push origin feature-nueva-funcionalidad
   ```
5. **Abre un Pull Request** en el repositorio principal.

## 🔹 Formato de Commits
Usa el siguiente formato para tus mensajes de commit:
```sh
feat: Descripción corta de la funcionalidad
fix: Descripción corta del bug resuelto
chore: Pequeños cambios sin afectar la funcionalidad
```

---

# 📌 Instrucciones de Despliegue (DEPLOY.md)

## 🔹 Cómo funciona el pipeline CI/CD
El proyecto tiene un **workflow en GitHub Actions** que realiza lo siguiente:
1. **Compilación**: Instala las dependencias (`npm install`).
2. **Pruebas**: Ejecuta los tests con Jest (`npm test`).
3. **(Opcional) Despliegue**: Publica la aplicación en **GitHub Pages**.

## 🔹 Configurar Despliegue en GitHub Pages
1. Ve a la sección **Settings** en tu repositorio.
2. En **Pages**, selecciona la rama `gh-pages`.
3. Guarda los cambios y espera unos minutos.
4. Tu aplicación estará disponible en:
   ```
   ```

