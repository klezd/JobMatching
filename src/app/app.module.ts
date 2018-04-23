import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
//ionic native
import { WheelSelector } from '@ionic-native/wheel-selector';
import { FileTransfer} from '@ionic-native/file-transfer';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
// Import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

// Authentication service
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig.config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePicker,
    FilePath,
    FileTransfer,
    File,
    Camera,
    // Firebase
    AngularFireAuth,    
    // Authentication service
    AuthService
  ]
})
export class AppModule {}
