import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
// import { BaseHttpService } from "./base-http.service"; replaced by the line below, look line 8
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  // private http = new BasetHttpService<Product>(this.url); replaced by the line below. look line 3
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    // logica
    this.http.otroRequest; // we can access the methods of ProductHttpService (vscode helps us)
    return this.http.update(id, dto);
  }
}
