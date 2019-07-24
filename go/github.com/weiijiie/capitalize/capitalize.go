package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "os"
    "regexp"
    "strings"
)

func main() {
    args := os.Args[1:]
    if len(args) < 2 {
        fmt.Println("Please enter input file and output file")
        return
    }

    in := args[0]
    out := args[1]

    content, err := ioutil.ReadFile(in)
    if err != nil {
        log.Fatal(err)
    }

    err2 := ioutil.WriteFile(out, capitalizeBytes(content), 0644)
    if err2 != nil {
        log.Fatal(err2)
    } else {
        fmt.Println("Capitalized file written!")
    }
}

func capitalizeBytes(bytes []byte) []byte {
    str := string(bytes)
    regex := regexp.MustCompile(`\w+`)
    capitalizedStr := regex.ReplaceAllStringFunc(str, strings.Title)
    return []byte(capitalizedStr)
}
