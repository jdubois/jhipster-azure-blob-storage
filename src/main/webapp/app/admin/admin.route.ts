import { Routes } from '@angular/router';

import { configurationRoute } from './configuration/configuration.route';
import { docsRoute } from './docs/docs.route';
import { healthRoute } from './health/health.route';
import { logsRoute } from './logs/logs.route';
import { metricsRoute } from './metrics/metrics.route';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

const ADMIN_ROUTES = [configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute];

export const adminState: Routes = [
  {
    path: '',
    data: {
      authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: ADMIN_ROUTES
  }
];
