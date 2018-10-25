import './style/styles.scss';

import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

const headerComponent = new HeaderComponent();
const contentComponent = new ContentComponent();

// Create HTML
headerComponent.createHtml();
contentComponent.createHtml();


