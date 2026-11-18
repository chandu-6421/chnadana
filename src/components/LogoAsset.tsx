import { useState } from 'react';

type LogoKind = 'rit' | 'cse' | 'gdg';

interface OfficialLogoProps {
  kind: LogoKind;
  heightClass?: string;
  className?: string;
}

const LOGO_META: Record<LogoKind, { src: string; alt: string }> = {
  rit: {
    src: '/logos/rit.png',
    alt: 'Rajeev Institute of Technology, Hassan official crest',
  },
  cse: {
    src: '/logos/cse.png',
    alt: 'Department of Computer Science and Engineering, RIT Hassan emblem',
  },
  gdg: {
    src: '/logos/gdg.png',
    alt: 'GDG on Campus RIT Hassan emblem',
  },
};

export function OfficialLogo({ kind, heightClass = 'h-9', className = '' }: OfficialLogoProps) {
  const [failed, setFailed] = useState(false);
  const meta = LOGO_META[kind];

  if (failed) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 px-2 font-display text-xs font-semibold text-slate-800 dark:text-slate-100 ${heightClass} ${className}`}
        aria-label={meta.alt}
      >
        {kind.toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={meta.src}
      alt={meta.alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${heightClass} w-auto object-contain select-none shrink-0 ${className}`}
    />
  );
}

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  fit?: 'cover' | 'contain';
  objectPos?: 'center' | 'top';
}

export function PhotoFrame({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[16/9]',
  priority = false,
  fit = 'cover',
  objectPos = 'center',
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);

  const objectFitClass =
    fit === 'contain'
      ? 'object-contain object-center'
      : objectPos === 'top'
      ? 'object-cover object-top'
      : 'object-cover object-center';

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800/80 ${aspectClass} ${className}`}
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6 text-center dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#4285F4]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#EA4335]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#FBBC04]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-[#34A853]" />
          </div>
          <p className="max-w-xs text-xs font-medium text-slate-600 dark:text-slate-300">{alt}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`h-full w-full ${objectFitClass} transition-transform duration-500 ease-out`}
        />
      )}
    </div>
  );
}

interface PortraitFrameProps {
  src: string;
  alt: string;
  initials: string;
  accentHex: string;
  className?: string;
  aspectClass?: string;
  fit?: 'cover' | 'contain';
  objectPos?: 'center' | 'top';
}

export function PortraitFrame({
  src,
  alt,
  initials,
  accentHex,
  className = '',
  aspectClass = 'aspect-[3/4]',
  fit = 'cover',
  objectPos = 'top',
}: PortraitFrameProps) {
  const [failed, setFailed] = useState(false);

  const objectFitClass =
    fit === 'contain'
      ? 'object-contain object-center'
      : objectPos === 'top'
      ? 'object-cover object-top'
      : 'object-cover object-center';

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${aspectClass} ${className}`}
    >
      {failed ? (
        <div
          className="flex h-full w-full items-center justify-center font-display text-xl font-bold text-white"
          style={{
            backgroundColor: accentHex === '#FBBC04' ? '#D97706' : accentHex,
          }}
        >
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`h-full w-full ${objectFitClass} transition-transform duration-500 ease-out`}
        />
      )}
    </div>
  );
}

