import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../../app.store';
import { Sound } from '../models/sound';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class SoundStore {
    private fireDB: FirebaseListObservable<any[]>;
    private fireDBRef: firebase.database.Reference;

    get list(): Observable<Sound[]> {
        return this.appStore.map(appStore => {
            return Object.keys(appStore.sound).map(id => appStore.sound[id])
            .filter(sound => !!sound)
            .sort((a, b) => b.id - a.id);
        });
    }

    constructor(private appStore: AppStore, afAuth: AngularFireAuth, afDB: AngularFireDatabase) {
        afAuth.authState.subscribe(user => {
        const store = this.appStore.snapshot;
        if (!Object.keys(store.sound).length && !this.fireDB) {
            this.mockSetup();
        }

        if (!user) {
            return;
        }

        this.fireDBRef = firebase.database().ref().child('users/' + user.uid);
        this.fireDB = afDB.list(this.fireDBRef, { preserveSnapshot: true });

        this.fireDB.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                const sound = snapshot.val();
                sound.fireDBKey = snapshot.key;

                const existsIDs = Object.keys(store.sound);
                if (existsIDs.find(id => parseInt(id, 10) === sound.id)) {
                    this.update(sound.id, sound);
                } else {
                    this.insert(sound);
                }
            });
          });
        });
    }

    private mockSetup() {
        [
            // tslint:disable-next-line:max-line-length
            new Sound('ピーポくんのうた', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/pi.mp3?alt=media&token=55ddf9c2-4487-4390-9288-e34bfd303bc5'),
            new Sound('ブーイング', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/booing.wav?alt=media&token=d0ef2930-0383-4c2e-a1c5-17605fe8a1d0'),
            // tslint:disable-next-line:max-line-length
            new Sound('笑い声', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/warai.wav?alt=media&token=9683a607-39e3-4ddc-a18d-61833986a522'),
        ].forEach(sound => this.insert(sound));
    }

    get(id: number): Observable<Sound> {
        return this.appStore.map(appStore => appStore.sound[id]);
    }

    insert(sound: Sound): void {
        const store = this.appStore.snapshot;
        sound.id = Object.keys(store.sound).length;
        store.sound[sound.id] = sound;
        this.appStore.patchValue(store);

        if (this.fireDB) {
            this.fireDB.push(sound);
        }
    }

    update(id: number, sound: Sound): void {
        const store = this.appStore.snapshot;
        store.sound[sound.id] = sound;
        this.appStore.patchValue(store);

        if (this.fireDB && sound.fireDBKey) {
            const key = sound.fireDBKey;
            this.fireDB.update(this.fireDBRef.child(key), sound)
            .then(() => console.log('updated: ', sound.fireDBKey))
            .catch(() => console.log('update failed', sound.fireDBKey));
        }
    }

    delete(id: number): void {
        const store = this.appStore.snapshot;
        const sound = store.sound[id];
        if (this.fireDB && sound.fireDBKey) {
            this.fireDB.remove(sound.fireDBKey)
            .then(() => console.log('deleted: ', sound.fireDBKey))
            .catch(() => console.log('deletion failed', sound.fireDBKey));
        }
        store.sound[id] = undefined;
        this.appStore.patchValue(store);
    }
}
