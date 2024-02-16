# Verwende einen vorhandenen Webserver-Image als Basis
FROM nginx:latest

# Kopiere die HTML-Dateien in das Verzeichnis, das der Webserver verwenden soll
COPY . /usr/share/nginx/html

# Exponiere den Port 80, auf dem der Webserver lauscht
EXPOSE 80