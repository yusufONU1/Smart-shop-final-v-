import {DirkService} from "./dirk-service";
import {SparService} from "./spar-service";
import {PromotionService} from "./promotion-service";

export class ServiceFilter  {
  private selectedService: PromotionService;

  constructor() {

    this.selectedService = new DirkService();
  }

  getService(): PromotionService {
    return this.selectedService;
  }

  selectService(serviceType: string) {
    switch (serviceType) {
      case 's1':
        this.selectedService = new DirkService();
        break;
      case 's2':
        this.selectedService = new SparService();
        break;
      case 's3':
        // this.selectedService = new AhService();
        break;
      default:
        this.selectedService = new DirkService();
        break;
    }
  }
}
