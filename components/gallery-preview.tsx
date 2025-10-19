"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const reels: string[] = [
  "https://res.cloudinary.com/dm9iuudyc/video/upload/v1760618006/ds-sound/Bookings_open_now_Contact_9706209980_ezd51f.mp4",
  "https://res.cloudinary.com/dm9iuudyc/video/upload/v1760618042/ds-sound/Har_kam_dil_se_._.._dj_djlifestyle_djroadshow_soundsystems_lovelife_light_oporator_nnptzq.mp4",
  "https://res.cloudinary.com/dm9iuudyc/video/upload/v1760618046/ds-sound/SILCHAR_BIJOYA_DASHAMI_DS_SOUND_%EF%B8%8F_....._djsound_dssound_silchar_assam_bijayadashami_d_rjdcee.mp4",
  "https://res.cloudinary.com/dm9iuudyc/video/upload/v1760618063/ds-sound/Tonight_with_D_S_SOUND_uztxkn.mp4",
];

export default function GalleryPreview() {
  return (
    <section className="container py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Event Highlights</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reels.map((url, i) => (
          <motion.div
            key={url}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[.05]"
          >
            <ReelCard src={url} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* --------- Reel with custom controls (plays Cloudinary MP4 directly) --------- */
function ReelCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // auto-pause other reels when this plays
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => {
      document.querySelectorAll<HTMLVideoElement>("video[data-reel]").forEach((el) => {
        if (el !== v) el.pause();
      });
    };
    v.addEventListener("play", onPlay);
    return () => v.removeEventListener("play", onPlay);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const val = Number(e.target.value);
    v.currentTime = (val / 100) * v.duration;
    setProgress(val);
  };

  return (
    <section id="gallery" className="relative">
      {/* 9:16 area */}
      <div className="relative w-full aspect-[9/16] bg-black">
        <video
          ref={videoRef}
          data-reel
          playsInline
          muted={muted}
          controls={false}
          className="absolute inset-0 h-full w-full object-cover"
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setPlaying(false)}
        >
          {/* Play Cloudinary MP4 directly */}
          <source src={src} type="video/mp4" />
        </video>

        {/* top gradient for legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
          {/* progress */}
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={onSeek}
            className="w-full accent-emerald-400"
            aria-label="Seek"
          />

          {/* controls */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconButton onClick={togglePlay} label={playing ? "Pause" : "Play"}>
                {playing ? <PauseIcon /> : <PlayIcon />}
              </IconButton>
              <IconButton onClick={toggleMute} label={muted ? "Unmute" : "Mute"}>
                {muted ? <MuteIcon /> : <VolumeIcon />}
              </IconButton>
            </div>
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_12px_rgba(34,197,94,.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UI bits ---------------- */
function IconButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition"
      title={label}
    >
      {children}
    </button>
  );
}
function PlayIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>; }
function PauseIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 6h4v12H7zM13 6h4v12h-4z" /></svg>; }
function VolumeIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M5 10v4h3l4 4V6L8 10H5zM16 7a5 5 0 0 1 0 10v-2a3 3 0 0 0 0-6V7z" /></svg>; }
function MuteIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M5 10v4h3l4 4V6L8 10H5zM18 9l-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z" /></svg>; }
