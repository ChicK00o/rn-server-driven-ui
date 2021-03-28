package model

import (
	"bytes"
	"encoding/gob"
	"encoding/json"
)

func (c *Component) UnmarshalJSON(data []byte) error {
	var dat map[string]interface{}

	if err := json.Unmarshal(data, &dat); err != nil {
		panic(err)
	}

	return c.interimHandler(dat)
}

func (c *Component) interimHandler(data map[string]interface{}) error {
	c.Type = data["type"].(string)
	if val, ok := data["query"].(*string); ok {
		c.Query = val
	}

	if propertiesInterface, ok := data["properties"].(interface{}); ok {
		var err error
		c.Properties, err = createProperties(c.Type, propertiesInterface)
		if err != nil {
			return err
		}
	}

	childArray := data["children"].([]interface{})

	for _, element := range childArray {
		var component Component
		err := component.interimHandler(element.(map[string]interface{}))
		if err != nil {
			return err
		}
		c.Children = append(c.Children, &component)
	}

	return nil
}

func createProperties(typeName string, interim interface{}) (Properties, error) {
	data, err := json.Marshal(interim)
	if err != nil {
		return nil, err
	}
	switch typeName {
	case "page":
		var prop PageProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "card":
		var prop CardProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "text":
		var prop TextProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "ticker":
		var prop TickerProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "button":
		var prop ButtonProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "input":
		var prop FormInputProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "drop-down":
		var prop FormDropDownProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "submit":
		var prop FormSubmitProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "table":
		var prop TableProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	case "form":
		var prop FormProperties
		err = json.Unmarshal(data, &prop)
		return prop, err
	}
	return nil, nil
}

func getBytes(key interface{}) ([]byte, error) {
	var buf bytes.Buffer
	enc := gob.NewEncoder(&buf)
	err := enc.Encode(key)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}
