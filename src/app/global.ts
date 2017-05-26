'use strict';

export let audioContext: AudioContext = new(window['AudioContext'] || window['webkitAudioContext'])();