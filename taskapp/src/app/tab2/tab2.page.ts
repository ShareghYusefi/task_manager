import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  taskForm; // initialize taskForm object property binded to in html
  // Inject the FormBuilder class to create a Model Driven Form (MDF)
  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private alertController: AlertController) { 
    this.taskForm = formBuilder.group({
      // Define form controls
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      task_date: ['', [Validators.required]],
      priority_level: ['', [Validators.required]],
      progress_level: ['', [Validators.required]]
    })
   }

   onSubmit() {
    console.log(this.taskForm.value);
    this.taskService.createTask(this.taskForm.value).subscribe((results) => {
      console.log(results);
      this.taskForm.reset(); // clear form data
      this.presentAlert('Success', "Task was added successfully!"); // present Alert
    }, (error) => {
      console.log(error);
    });
  }

  // getter defined to access form control values for frontend use
  get titleFormControl(){
    return this.taskForm.get('title')!; // ! means get('title') can be null or undefined
  }

  // presentAlert method uses alertController service to create an alert & present it
  async presentAlert(headerMsg: string, messageMsg: string) {
    const alert = await this.alertController.create({
      header: headerMsg,
      message: messageMsg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
