package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	flag.Parse()

	hub := newHub()
	go hub.run()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})

	log.Printf("local : http://localhost:8080 \n")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
