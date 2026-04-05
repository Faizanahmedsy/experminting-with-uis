import { useOS } from '@/OSContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Settings() {
  const { wallpaper, setWallpaper, theme, toggleTheme } = useOS();

  const wallpapers = [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&q=80&w=2070',
  ];

  return (
    <div className="p-6 space-y-6">
      <section>
        <h3 className="text-lg font-semibold mb-4">Personalization</h3>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Wallpaper</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {wallpapers.map((wp, i) => (
                <button
                  key={i}
                  onClick={() => setWallpaper(wp)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${wallpaper === wp ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={wp} alt={`Wallpaper ${i + 1}`} className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <h3 className="text-lg font-semibold mb-4">System</h3>
        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Appearance</p>
              <p className="text-xs text-muted-foreground">Switch between light and dark mode</p>
            </div>
            <Button variant="outline" onClick={toggleTheme}>
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
