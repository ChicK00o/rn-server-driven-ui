# page-server

this would be the graphql service that will power the page layouts

```json
{
    "data" : {
        "page" : {
            "type" : "page",
            "properties" : {
                "name" : "test-page",
                "query" : ""
            },
            "children" : [
                {
                    "type" : "card",
                    "properties" : {
                        "alignment" : "vertical",
                        "query" : ""
                    },
                    "children" : [
                        {
                            "type" : "card",
                            "properties" : {
                                "alignment" : "horizontal",
                                "query" : ""
                            },
                            "children" : [
                                {
                                    "type" : "text",
                                    "properties" : {
                                        "header" : "header",
                                        "subheader" : "extra text",
                                        "collapsible" : true,
                                        "query" : ""
                                    },
                                    "children" : []
                                },
                                {
                                    "type" : "ticker",
                                    "properties" : {
                                        "label" : "ticker-name",
                                        "text" : "0",
                                        "frequency" : 1000,
                                        "query" : ""
                                    },
                                    "children" : []
                                }
                            ]
                        },
                        {
                            "type" : "table",
                            "properties" : {
                                "query" : ""
                            },
                            "children" : []
                        },
                        {
                            "type" : "button",
                            "properties" : {
                                "text" : "delete",
                                "label" : "this is just data i want to showcase",
                                "query" : ""
                            },
                            "children" : []
                        },
                        {
                            "type" : "button",
                            "properties" : {
                                "text" : "delete",
                                "label" : "this is just data i want to showcase 2",
                                "query" : ""
                            },
                            "children" : []
                        },
                        {
                            "type" : "form",
                            "properties" : {
                                "query" : ""
                            },
                            "children" : [
                                {
                                    "type" : "input",
                                    "properties" : {
                                        "type" : "text",
                                        "query" : ""
                                    },
                                    "children" : []
                                },
                                {
                                    "type" : "input",
                                    "properties" : {
                                        "type" : "number",
                                        "query" : ""
                                    },
                                    "children" : []
                                },
                                {
                                    "type" : "drop-down",
                                    "properties" : {
                                        "options" : ["1","2","3"],
                                        "query" : ""
                                    },
                                    "children" : []
                                },
                                {
                                    "type" : "submit",
                                    "properties" : {
                                        "label" : "submit",
                                        "query" : ""
                                    },
                                    "children" : []
                                }
                            ]
                        },
                        {
                            "type" : "button",
                            "properties" : {
                                "text" : "delete the card",
                                "query" : ""
                            },
                            "children" : []
                        },
                    ]
                }
            ]
        }
    }
}
```
