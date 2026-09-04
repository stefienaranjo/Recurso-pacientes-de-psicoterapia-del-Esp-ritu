class SoundService {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTibetanBowl(durationSeconds = 3.5, freq = 216) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Main fundamental + harmonics
      const freqs = [freq, freq * 1.5, freq * 2.76, freq * 3.4];
      const gains = [0.25, 0.15, 0.08, 0.04];

      freqs.forEach((f, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        // Gentle envelope
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.exponentialRampToValueAtTime(gains[idx], now + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + durationSeconds);
      });
    } catch {
      // Ignore audio errors gracefully
    }
  }

  public playBellChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [528, 1056]; // Solfeggio 528Hz love/miracle frequency
      freqs.forEach((f, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.exponentialRampToValueAtTime(idx === 0 ? 0.2 : 0.08, now + 0.03);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.2);
      });
    } catch {
      // Ignore
    }
  }

  public playBreathGuide(isInhale: boolean) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      const startFreq = isInhale ? 220 : 330;
      const endFreq = isInhale ? 330 : 220;

      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 3.0);

      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.06, now + 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 3.0);
    } catch {
      // Ignore
    }
  }
}

export const sound = new SoundService();
