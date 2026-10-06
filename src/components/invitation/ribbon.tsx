export function Ribbon() {
  return (
    <svg className="envelope-ribbon" viewBox="0 0 600 370" aria-hidden="true">
      <defs>
        <linearGradient id="silk" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--ribbon-edge)" />
          <stop offset=".24" stopColor="var(--ribbon-light)" />
          <stop offset=".65" stopColor="var(--ribbon)" />
          <stop offset="1" stopColor="var(--ribbon-edge)" />
        </linearGradient>
        <filter id="ribbon-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="var(--shadow-ink)" floodOpacity=".15" />
        </filter>
      </defs>
      <g filter="url(#ribbon-shadow)" fill="url(#silk)">
        <g className="ribbon-wrap-left"><path d="M0 238 Q150 228 300 238 L300 253 Q145 242 0 254Z" /></g>
        <g className="ribbon-wrap-right"><path d="M300 238 Q450 228 600 238 L600 254 Q450 244 300 253Z" /></g>
        <g className="ribbon-bow-left">
          <path d="M300 245 C263 213 217 201 220 221 C224 248 263 257 300 245 C271 254 231 249 226 223 C221 213 264 229 300 245Z" />
          <path d="M295 244 C279 269 259 297 243 311 L253 309 L259 318 C271 295 287 277 305 248Z" />
        </g>
        <g className="ribbon-bow-right">
          <path d="M300 245 C337 213 383 201 380 221 C376 248 337 257 300 245 C329 254 369 249 374 223 C379 213 336 229 300 245Z" />
          <path d="M305 244 C327 265 340 285 365 301 L354 301 L351 310 C333 290 316 272 295 248Z" />
        </g>
      </g>
    </svg>
  );
}