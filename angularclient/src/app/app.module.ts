import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapService } from './services/map.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RobotService } from './services/robot.service';
import { GraphcreatorComponent } from './components/map/graphcreator/graphcreator.component';
import { GraphService } from './services/graph.service';
import { MapUploadComponent } from './components/map/map-upload/map-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import {StoreService} from "./services/store.service";
import { PolygonsComponent } from './components/map/polygons/polygons.component';
import {PolygonService} from "./services/polygon.service";
import { VertexListComponent } from './components/map/graphcreator/vertex-list/vertex-list.component';
import { StandCreatorComponent } from './components/map/stand-creator/stand-creator.component';
import {StandService} from "./services/stand.service";

const config: InputFileConfig = {};

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    GraphcreatorComponent,
    HomeComponent,
    MapComponent,
    MapUploadComponent,
    SidebarComponent,
    GraphcreatorComponent,
    PolygonsComponent,
    VertexListComponent,
    StandCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputFileModule.forRoot(config),
    FormsModule,
  ],
  providers: [MapService,HttpClient, RobotService, GraphService, StoreService, StandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
