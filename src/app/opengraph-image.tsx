import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'UH AI Hackathon';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '20px solid #C8102E', // UH Red Top Border
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: '-0.05em',
            fontFamily: 'sans-serif',
          }}
        >
          <span style={{ color: '#C8102E' }}>AI</span>
          <span style={{ color: '#555555', marginLeft: '30px', fontWeight: 300 }}>HACKATHON</span>
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#888888',
            marginTop: '40px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: 'bold',
          }}
        >
          University of Houston
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
