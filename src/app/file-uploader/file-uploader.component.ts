import { Component, OnInit } from '@angular/core';
import { Sound } from '../shared/models/sound';
import { SoundStore } from '../shared/stores/sound.store';

// angularfire2 does not support filestorage yet :-(
// So I use firebase/app directly
import * as firebase from 'firebase';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  public uploadProgress: number;
  private files: FileList;
  private userRef: firebase.storage.Reference;

  constructor(public store: SoundStore) {
  }

  onSelectFile(event) {
    this.files = event.srcElement.files;
    console.log(this.files);

    for (let i = 0; i < this.files.length; ++i) {
      if (!this.makeRef(this.files.item(i).name)){
        return
      }

      let uploadTask = this.userRef.put(this.files.item(i));
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot: any) => {
        this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log('Upload is ' + this.uploadProgress + '% done');
      }, () => {
        alert("Error uploading an item to filestorage :-(");
        this.uploadProgress = 0;
      }, () => {
        let downloadURL = uploadTask.snapshot.downloadURL;
        const sound = new Sound(this.files.item(i).name, downloadURL);
        this.store.insert(sound);
        this.uploadProgress = 0;
        return undefined;
      });
    }
  }

  makeRef(filename: string): boolean {
    if (!firebase.auth().currentUser) {
      alert('ログインして？');
      return false;
    }

    let user = firebase.auth().currentUser;
    console.log(user.uid + '/' + filename);
    this.userRef = firebase.storage().ref().child(user.uid + '/' + filename);
    return true;
  }

}
