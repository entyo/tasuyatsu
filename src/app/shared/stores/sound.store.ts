import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../../app.store';
import { Sound } from '../models/sound';

@Injectable()
export class SoundStore {

    get list(): Observable<Sound[]> {
        return this.appStore.map(appStore => {
            return Object.keys(appStore.sound).map(id => appStore.sound[id])
            .filter(sound => !!sound)
            .sort((a, b) => b.id - a.id);
        });
    }

    constructor(private appStore: AppStore) {
        this.mockSetup();
    }

    private mockSetup() {
        [
            new Sound('ピーポくんのうた', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/pi.mp3?alt=media&token=55ddf9c2-4487-4390-9288-e34bfd303bc5'),
            new Sound('ブーイング', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/booing.wav?alt=media&token=d0ef2930-0383-4c2e-a1c5-17605fe8a1d0'),
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
    }

    update(id: number, sound: Sound): void {
        const store = this.appStore.snapshot;
        store.sound[sound.id] = sound;
        this.appStore.patchValue(store);
    }

    delete(id: number): void {
        const store = this.appStore.snapshot;
        store.sound[id] = undefined;
        this.appStore.patchValue(store);
    }
}