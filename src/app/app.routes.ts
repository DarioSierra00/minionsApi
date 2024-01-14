import { Routes } from '@angular/router';
import { MinionsComponent } from './minions/minions.component';
import { IndexComponent } from './index/index.component';
import { InfoMinionComponent } from './info-minion/info-minion.component';
import { InfoMinionIdComponent } from './info-minion-id/info-minion-id.component';

export const routes: Routes = [
    {path : "minions", component : MinionsComponent},
    {path : "index", component : IndexComponent},
    {path : "infoMinion/:name",component : InfoMinionComponent},
    {path : "infoMinionId/:id",component : InfoMinionIdComponent}
];
