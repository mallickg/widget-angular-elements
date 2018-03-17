import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {TestApp} from './test-app'
import {NgDirectivesModule} from '../../directives/ng_directives'

@NgModule({
  id: 'test-app',
  imports: [NgDirectivesModule],
  declarations: [TestApp],
  schemas: []
})
export class TestAppModule {}
