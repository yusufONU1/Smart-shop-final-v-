import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';

/**
 * Describe the component under test and provide additional information.
 */
describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  /**
   * Prepare the component for testing.
   * @see {@link https://jasmine.github.io/api/3.9/global.html#beforeEach|Jasmine beforeEach function}
   */
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),SearchPage]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /**
   * Test the search function.
   */
  it('should search for products', () => {
    // Set the search term
    component.searchTerm = 'melk';

    // Call the search function
    component.search();

    // Expect search results to have at least one item
    expect(component.searchResults.length).toBeGreaterThan(0);
  });
});
