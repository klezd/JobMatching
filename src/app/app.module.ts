import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HttpModule } from '@angular/http';
//ionic native
import { FileTransfer} from '@ionic-native/file-transfer';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { IonTagsInputModule } from 'ionic-tags-input';
import { FileChooser } from '@ionic-native/file-chooser';
// Import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
// Services
import { AuthService } from '../services/auth.service';
import { LocationService } from '../services/locations.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    HttpModule,
    IonTagsInputModule,
    AngularFireModule.initializeApp(firebaseConfig.config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilePath,
    Transfer,
    FileTransfer,
    FileChooser,
    File,
    Camera,
    IonTagsInputModule,
    // Firebase
    AngularFireAuth,    
    // Authentication service
    AuthService,
    LocationService,
  ]
})
export class AppModule {}
