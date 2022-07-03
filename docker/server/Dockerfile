FROM golang:1.17-alpine

RUN apk update
RUN apk add alpine-sdk

COPY ./server /app/go
WORKDIR /app/go
