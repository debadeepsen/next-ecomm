import React from 'react'

const Star = ({fill = 1, size = 24, filledColor = '#F6C94C', emptyColor = '#E6E6E6', stroke = '#B8860B', idSuffix = 0}) => {
  const viewBoxSize = 100
  const clipId = `star-clip-${idSuffix}`
  // Star path (nice symmetrical star inside 0..100 box)
  const path = `M50 8 L61.8 37.5 L93 37.5 L67.5 57.5 L78.8 88 L50 70 L21.2 88 L32.5 57.5 L7 37.5 L38.2 37.5 Z`

  // width for the left-to-right fractional fill
  const fillWidth = Math.max(0, Math.min(1, fill)) * viewBoxSize

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={path} />
        </clipPath>
      </defs>

      {/* Empty star background */}
      <path d={path} fill={emptyColor} stroke={stroke} strokeWidth={2} />

      {/* Filled rectangle clipped to the star shape - left-to-right fill */}
      <g clipPath={`url(#${clipId})`}>
        <rect x={0} y={0} width={fillWidth} height={viewBoxSize} fill={filledColor} />
      </g>

      {/* Optional star stroke on top to keep crisp edges */}
      <path d={path} fill="none" stroke={stroke} strokeWidth={2} pointerEvents="none" />
    </svg>
  )
}

export const StarRating = ({rating = 0, totalStars = 5, size = 24, filledColor = '#fda035ff', emptyColor = '#f3e7cfff', stroke = '#f1ba67ff'}) => {
  // clamp
  const normalized = Math.max(0, Math.min(rating, totalStars))
  const stars = Array.from({length: totalStars}).map((_, i) => {
    const starValue = i + 1
    const fill = Math.max(0, Math.min(1, normalized - i))
    return (
      <Star
        key={i}
        fill={fill}
        size={size}
        filledColor={filledColor}
        emptyColor={emptyColor}
        stroke={stroke}
        idSuffix={i}
      />
    )
  })

  return (
    <div style={{display: 'inline-flex', gap: Math.max(2, Math.round(size * 0.12))}}>
      {stars}
    </div>
  )
}
