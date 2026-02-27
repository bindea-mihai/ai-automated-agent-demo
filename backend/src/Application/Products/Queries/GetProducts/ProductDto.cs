using InsuranceDemo.Domain.Entities;

namespace InsuranceDemo.Application.Products.Queries.GetProducts;

public class ProductDto
{
    public int Id { get; init; }

    public string Name { get; init; } = string.Empty;

    public string Code { get; init; } = string.Empty;

    public string Description { get; init; } = string.Empty;

    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Product, ProductDto>();
        }
    }
}
