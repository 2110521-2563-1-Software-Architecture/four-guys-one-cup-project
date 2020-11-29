FROM node:15.0.1-alpine
WORKDIR /frontend
COPY ./package*.json ./
RUN npm install
RUN npm install -g serve

COPY . .
RUN npm run build
CMD serve -s build