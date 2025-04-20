
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export default function Home() {
  const [excuse, setExcuse] = useState('');
  const [looks, setLooks] = useState<string[]>([]);
  
  const generateExcuse = () => {
    setExcuse("I need to go out because I've been cooped up for days.");
    setLooks([
      "/images/look1.jpg",
      "/images/look2.jpg"
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">Fashion Excuse Generator</h1>
      <p className="mb-6 text-gray-700">Pick a vibe. Get a reason. Dress the part.</p>
      <div className="mb-4">
        <Input placeholder="What's your mood?" />
      </div>
      <Button onClick={generateExcuse}>Generate Excuse & Look</Button>

      {excuse && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Your Excuse:</h2>
          <p className="mt-2">{excuse}</p>
        </div>
      )}

      {looks.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {looks.map((src, index) => (
            <Card key={index}>
              <CardContent>
                <img src={src} alt={`Look ${index + 1}`} className="rounded-2xl w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
