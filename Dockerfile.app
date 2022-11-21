FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/kiedy-gramy /usr/share/nginx/html
