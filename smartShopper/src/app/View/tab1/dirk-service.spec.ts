import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DirkService} from './dirk-service';
import { Product } from './product.model';

describe('DirkService', () => {
  let service: DirkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DirkService]
    });
    service = TestBed.inject(DirkService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should return products with length greater than 0', async () => {
    const products: Product[] = await service.getProducts();
    expect(products.length).toBeGreaterThan(0);
  });
  // it('should get products', () => {
  //   const mockProducts: Product[] = [
  //     { link: "/boodschappen/aardappelen-groente-fruit/groente/hollandse-komkommer/4463",
  //       image: "https://d3r3h30p75xj6a.cloudfront.net/artikelen/126966_1_268458_638162235357996671.png?width=170&height=170&mode=crop",
  //       name: "Hollandse komkommer",
  //       oldprice: "0.00",
  //       newprice: "59"}
  //   ];
  //   // async () => {
  //   //   const products: Product[] = await service.getProducts()
  //
  //   service.getProducts().subscribe(products => {
  //     expect(products).toEqual(mockProducts);
  //   });
  //
  //   const req = httpMock.expectOne('http://localhost:3000/products');
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(mockProducts);
  // });
});
