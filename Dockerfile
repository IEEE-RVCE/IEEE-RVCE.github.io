FROM node:lts

WORKDIR /usr/share/app
COPY build/ ./

RUN ["npm","i","serve"]

EXPOSE 5000

CMD ["npx","serve","-s","."]
