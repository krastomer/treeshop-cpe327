FROM golang:1.17.1 AS builder

WORKDIR /app
ENV CGO_ENABLED=0 GOOS=linux

COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -a -installsuffix cgo -o main cmd/server/main.go

FROM alpine:3.13

WORKDIR /app
COPY --from=builder /app/main .
COPY app.env .
RUN apk add dumb-init

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
EXPOSE 8080

CMD ["sh", "-c", "./main" ]