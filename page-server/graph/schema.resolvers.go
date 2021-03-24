package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph/generated"
	"github.com/ChicK00o/rn-server-driven-ui/page-server/graph/model"
)

func (r *mutationResolver) CreatePage(ctx context.Context, input model.NewPage) (*model.Page, error) {
	components := make([]*model.Component, 0)
	for _, data := range input.Components {
		components = append(components, &model.Component{
			Type: data,
		})
	}
	page := &model.Page{
		ID:         input.ID,
		Components: components,
	}
	r.pages = append(r.pages, page)
	return page, nil
}

func (r *queryResolver) PageByID(ctx context.Context, id model.PageType) (*model.Page, error) {
	for _, data := range r.pages {
		if data.ID == id {
			return data, nil
		}
	}
	return nil, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
