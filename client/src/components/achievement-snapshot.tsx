import { Card, CardContent } from "@/components/ui/card";

export default function AchievementSnapshot() {
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
    <section className="py-20 bg-secondary-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Achievement Snapshot
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-secondary-dark border-gray-800 card-hover">
              <CardContent className="text-center p-6">
                <div className={`text-4xl font-bold mb-2 ${achievement.color}`}>
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
