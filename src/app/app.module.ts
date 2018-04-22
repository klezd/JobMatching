import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ComponentsModule } from '../components/components.module';

//fake data
import { Users } from '../mocks/providers/users';
import { Activities } from '../mocks/providers/activities';
// end fake

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
    FormsModule, 
    CustomFormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig.config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    //fake data
    Users,
    Activities,
    
    // Firebase
    AngularFireAuth,
    
    // Authentication service
    AuthService
  ]
})
export class AppModule {}
