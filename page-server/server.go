package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph"
	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph/generated"
	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph/model"
)

const defaultPort = "3000"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	file, err := ioutil.ReadFile("./test-page.json")
	if err != nil {
		panic(err)
	}

	data := model.Component{}
	err = json.Unmarshal([]byte(file), &data)
	if err != nil {
		panic(err)
	}

	allPages := make([]*model.Component, 0)
	allPages = append(allPages, &data)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{
		Pages: allPages,
	}}))

	http.Handle("/", setCORSHeaders(playground.Handler("GraphQL playground", "/graphql")))
	http.Handle("/graphql", setCORSHeaders(srv.ServeHTTP))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func setCORSHeaders(fn http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		// set the necessary CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		// if we are handling a pre-flight request
		if req.Method == http.MethodOptions {
			return
		}

		// invoke the handler
		fn(w, req)
	}
}
