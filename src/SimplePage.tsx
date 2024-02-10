import { styled } from 'inlines'
import React from 'react'

export const SimplePage = (p: { html: string }) => {
  return (
    <styled.div
      style={{
        maxWidth: 750,
      }}
      className="text"
      dangerouslySetInnerHTML={{ __html: p.html }}
    />
  )
}
