import { useEffect, useState } from "react";
import { 
  CheckSquare, 
  MousePointer, 
  Cloud, 
  GitBranch, 
  Coffee, 
  Code, 
  Activity, 
  BarChart3,
  Zap,
  Database,
  Globe,
  Settings
} from "lucide-react";
import { JiraIcon, AsanaIcon, TrelloIcon, SlackIcon, PythonIcon, JavaIcon } from "./custom-icons";

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
  color: string;
}

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  const iconList = [
    // PM Tools
    { Icon: JiraIcon, color: "text-blue-400" },
    { Icon: AsanaIcon, color: "text-red-400" },
    { Icon: TrelloIcon, color: "text-blue-500" },
    { Icon: SlackIcon, color: "text-purple-400" },
    { Icon: CheckSquare, color: "text-blue-400" },
    { Icon: MousePointer, color: "text-purple-400" },
    { Icon: BarChart3, color: "text-indigo-400" },
    // Programming & Tech
    { Icon: PythonIcon, color: "text-yellow-400" },
    { Icon: JavaIcon, color: "text-orange-400" },
    { Icon: Cloud, color: "text-green-400" },
    { Icon: GitBranch, color: "text-orange-400" },
    { Icon: Coffee, color: "text-yellow-400" },
    { Icon: Code, color: "text-cyan-400" },
    { Icon: Activity, color: "text-red-400" },
    { Icon: Zap, color: "text-yellow-300" },
    { Icon: Database, color: "text-green-300" },
    { Icon: Globe, color: "text-blue-300" },
    { Icon: Settings, color: "text-gray-400" }
  ];

  useEffect(() => {
    // Initialize floating icons
    const initialIcons: FloatingIcon[] = [];
    for (let i = 0; i < 30; i++) {
      const iconData = iconList[Math.floor(Math.random() * iconList.length)];
      initialIcons.push({
        id: i,
        Icon: iconData.Icon,
        x: Math.random() * (window.innerWidth + 300) - 150,
        y: Math.random() * (window.innerHeight + 300) - 150,
        rotation: Math.random() * 360,
        scale: 1.2 + Math.random() * 1.8, // 4x bigger scale range
        speed: 0.05 + Math.random() * 0.2,
        color: iconData.color
      });
    }
    setIcons(initialIcons);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          x: (icon.x + icon.speed) % (window.innerWidth + 200),
          y: icon.y + Math.sin(Date.now() * 0.001 + icon.id) * 0.8,
          rotation: icon.rotation + (0.3 + icon.speed * 0.5)
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
      {icons.map(icon => {
        const { Icon } = icon;
        const parallaxY = scrollY * 0.15 * (icon.id % 4 + 1);
        const parallaxX = scrollY * 0.05 * (icon.id % 2 === 0 ? 1 : -1);
        const depthScale = 0.9 + (icon.id % 3) * 0.15;
        
        return (
          <div
            key={icon.id}
            className={`absolute transition-all duration-100 ease-out ${icon.color}`}
            style={{
              left: `${icon.x + parallaxX}px`,
              top: `${icon.y + parallaxY}px`,
              transform: `
                rotate(${icon.rotation}deg) 
                scale(${icon.scale * depthScale}) 
                perspective(1200px) 
                rotateX(${Math.sin(Date.now() * 0.001 + icon.id) * 12}deg) 
                rotateY(${Math.cos(Date.now() * 0.001 + icon.id) * 8}deg)
              `,
              opacity: 0.6 + Math.sin(Date.now() * 0.003 + icon.id) * 0.4,
              filter: `blur(${Math.abs(Math.sin(Date.now() * 0.002 + icon.id)) * 0.5}px) drop-shadow(0 0 10px currentColor)`,
              textShadow: `0 0 20px currentColor`
            }}
          >
            <Icon 
              size={48 + (icon.id % 5) * 16} // 4x bigger base size
              className="drop-shadow-2xl"
            />
          </div>
        );
      })}
      
      {/* Multi-layered gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/15 to-primary-dark/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/5 via-transparent to-primary-dark/5 pointer-events-none"></div>
    </div>
  );
}