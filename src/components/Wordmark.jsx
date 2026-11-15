// The Mench wordmark. Use this everywhere the brand appears instead of a logo image.
export default function Wordmark({ className = "" }) {
  return (
    <span className={`mench-wordmark ${className}`.trim()} role="img" aria-label="Mench">
      Mench
    </span>
  );
}
