interface IProductService {
  getProduct(productId: string): Promise<string>;
}

class RealProductService implements IProductService {
  async getProduct(productId: string): Promise<string> {
    console.log(`🔍 Buscando produto ${productId} na API...`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `Produto ${productId} - Detalhes do produto da API`;
  }
}

class ProductServiceProxy implements IProductService {
  private realService: RealProductService;
  private cache: Map<string, string>;

  constructor() {
    this.realService = new RealProductService();
    this.cache = new Map();
  }

  async getProduct(productId: string): Promise<string> {
    if (this.cache.has(productId)) {
      console.log(`⚡ Retornando produto ${productId} do cache.`);
      return this.cache.get(productId)!;
    }

    const product = await this.realService.getProduct(productId);
    this.cache.set(productId, product);
    return product;
  }
}

(async () => {
  const productService: IProductService = new ProductServiceProxy();

  console.log(await productService.getProduct("123"));
  console.log(await productService.getProduct("123"));
  console.log(await productService.getProduct("456"));
})();
