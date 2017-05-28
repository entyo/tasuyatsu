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
            new Sound('いい音'),
            new Sound('悪い音'),
            new Sound('訴えかけてくる音'),
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