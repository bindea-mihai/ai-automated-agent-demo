using InsuranceDemo.Application.Products.Queries.GetProducts;
using Microsoft.AspNetCore.Http.HttpResults;

namespace InsuranceDemo.Web.Endpoints;

public class Products : EndpointGroupBase
{
    public override void Map(RouteGroupBuilder groupBuilder)
    {
        groupBuilder.MapGet(GetProducts);
    }

    public async Task<Ok<IReadOnlyCollection<ProductDto>>> GetProducts(ISender sender)
    {
        var products = await sender.Send(new GetProductsQuery());

        return TypedResults.Ok(products);
    }
}
