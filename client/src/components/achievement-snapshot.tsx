import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AchievementSnapshot() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.2 });
  
  const achievements = [
    {
      value: "$10M+",
      label: "Revenue Generated",
      color: "text-accent-blue"
    },
    {
      value: "25%",
      label: "Conversion Rate Boost",
      color: "text-accent-purple"
    },
    {
      value: "95%",
      label: "Team Retention",
      color: "text-success"
    },
    {
      value: "30%",
      label: "Cost Reduction",
      color: "text-warning"
    }
  ];

  return (
    <section ref={elementRef} className="py-20 bg-secondary-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Achievement Snapshot
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`bg-secondary-dark border-gray-800 card-hover transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="text-center p-6">
                <div className={`text-4xl font-bold mb-2 ${achievement.color} transition-all duration-500 ${
                  isVisible ? 'animate-pulse' : ''
                }`}>
                  {achievement.value}
                </div>
                <div className="text-gray-400">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
