package main

import (
	"bytes"
	"log"
	"net/http"
	"regexp"
	"strings"
)

func main() {
	startServer()
}

func startServer() {
	http.HandleFunc("/", capitalize)
	log.Fatal(http.ListenAndServe(":3001", nil))
}

func capitalize(writer http.ResponseWriter, request *http.Request) {
	if request.Method == "POST" {
		buff := new(bytes.Buffer)
		_, err1 := buff.ReadFrom(request.Body)
		if err1 != nil {
			panic(err1)
		}

		_, err2 := writer.Write(capitalizeBytes(buff.Bytes()))
		if err2 != nil {
			panic(err2)
		}
	}
}


func capitalizeBytes(bytes []byte) []byte {
	str := string(bytes)
	regex := regexp.MustCompile(`\w+`)
	capitalizedStr := regex.ReplaceAllStringFunc(str, strings.Title)
	return []byte(capitalizedStr)
}
