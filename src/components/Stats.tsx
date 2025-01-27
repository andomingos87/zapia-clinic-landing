import { Users, Clock, Calendar, Building } from "lucide-react";

const stats = [
  {
    value: "98%",
    label: "Satisfação dos Pacientes",
    icon: Users,
  },
  {
    value: "24/7",
    label: "Disponibilidade",
    icon: Clock,
  },
  {
    value: "85%",
    label: "Redução de Faltas",
    icon: Calendar,
  },
  {
    value: "70%",
    label: "Economia de Tempo",
    icon: Building,
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};