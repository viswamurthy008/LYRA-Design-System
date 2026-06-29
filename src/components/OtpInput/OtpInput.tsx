import './OtpInput.css';
import { useRef } from 'react';
import type { KeyboardEvent } from 'react';

export interface OtpInputProps {
  length?: number;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

/** Segmented one-time-code input. Mirrors the Figma "OTP Input". */
export function OtpInput({ length = 6, value, onChange, className = '' }: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const setChar = (i: number, char: string) => {
    const next = value.split('');
    next[i] = char;
    onChange?.(next.join('').slice(0, length));
  };
  const handleChange = (i: number, raw: string) => {
    const char = raw.replace(/\D/g, '').slice(-1);
    if (!char) return;
    setChar(i, char);
    if (i < length - 1) refs.current[i + 1]?.focus();
  };
  const handleKey = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1]?.focus();
  };
  return (
    <div className={`ds-otp ${className}`.trim()}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="ds-otp__cell"
          inputMode="numeric"
          maxLength={1}
          value={value[i] ?? ''}
          aria-label={`Digit ${i + 1}`}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKey(i, e)}
        />
      ))}
    </div>
  );
}
