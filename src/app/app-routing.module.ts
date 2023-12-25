import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from './core/core-layout/core-layout.component';

const routes: Routes = [
  {
    path: '', component: CoreLayoutComponent, children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full'},
      { path: 'homepage', loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule) },
      { path: 'education', loadChildren: () => import('./features/education/education.module').then(m => m.EducationModule) },
      { path: 'experience', loadChildren: () => import('./features/experience/experience.module').then(m => m.ExperienceModule) },
      { path: 'projects', loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'photo-ascii', loadChildren: () => import('./features/photo-ascii/photo-ascii.module').then(m => m.PhotoAsciiModule) },
      { path: 'board-gen', loadChildren: () => import('./features/board-gen/board-gen.module').then(m => m.BoardGenModule) },
      { path: 'resume', loadChildren: () => import('./features/resume/resume.module').then(m => m.ResumeModule) },
    ]
  },
  // Add other routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
