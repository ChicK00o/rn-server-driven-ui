package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph/generated"
	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph/model"
)

func (r *queryResolver) GetPage(ctx context.Context, pageName *string) (*model.Component, error) {
	if pageName != nil {
		//selecting page
	}
	return r.Pages[0], nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
