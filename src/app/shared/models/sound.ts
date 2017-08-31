export class Sound {
  public id: number;
  public fireDBKey: string;
  public sourceNode: AudioBufferSourceNode;
  public gainNode: GainNode;
  public playing = false;
  public loop = false;
  public editing = false;
  public loading = false;
  constructor(public title?: string, public url?: string) {}
}
