package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/nautilus/gateway"
	"github.com/nautilus/graphql"
)

func main() {
	// introspect the apis
	schemas, err := graphql.IntrospectRemoteSchemas(
		"http://localhost:3001/query",
		// "http://localhost:3002",
	)
	if err != nil {
		panic(err)
	}

	// create queryer that can batch requests whenever we query a service
	factory := gateway.QueryerFactory(func(ctx *gateway.PlanningContext, url string) graphql.Queryer {
		return graphql.NewMultiOpQueryer(url, 10*time.Millisecond, 1000)
	})

	// create the gateway instance
	gw, err := gateway.New(schemas, gateway.WithQueryerFactory(&factory))
	if err != nil {
		panic(err)
	}

	// add the graphql endpoints to the router
	http.HandleFunc("/graphql", setCORSHeaders(gw.PlaygroundHandler))

	// start the server
	fmt.Printf("🚀 Gateway is ready at http://localhost:%d/graphql\n", 3000)
	err = http.ListenAndServe(fmt.Sprintf(":%d", 3000), nil)
	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
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
