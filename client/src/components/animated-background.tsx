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
    for (let i = 0; i < 25; i++) {
      const iconData = iconList[Math.floor(Math.random() * iconList.length)];
      initialIcons.push({
        id: i,
        Icon: iconData.Icon,
        x: Math.random() * (window.innerWidth + 200) - 100,
        y: Math.random() * (window.innerHeight + 200) - 100,
        rotation: Math.random() * 360,
        scale: 0.4 + Math.random() * 0.6,
        speed: 0.1 + Math.random() * 0.4,
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {icons.map(icon => {
        const { Icon } = icon;
        const parallaxY = scrollY * 0.15 * (icon.id % 4 + 1);
        const parallaxX = scrollY * 0.05 * (icon.id % 2 === 0 ? 1 : -1);
        const depthScale = 0.8 + (icon.id % 3) * 0.1;
        
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
                perspective(1000px) 
                rotateX(${Math.sin(Date.now() * 0.001 + icon.id) * 15}deg) 
                rotateY(${Math.cos(Date.now() * 0.001 + icon.id) * 10}deg)
              `,
              opacity: 0.4 + Math.sin(Date.now() * 0.003 + icon.id) * 0.3,
              filter: `blur(${Math.abs(Math.sin(Date.now() * 0.002 + icon.id)) * 0.8}px)`
            }}
          >
            <Icon 
              size={20 + (icon.id % 4) * 6} 
              className="drop-shadow-2xl"
            />
          </div>
        );
      })}
      
      {/* Multi-layered gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/20 to-primary-dark/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/10 via-transparent to-primary-dark/10 pointer-events-none"></div>
    </div>
  );
}