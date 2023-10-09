import {
  CircuitBoard,
  LucideIcon,
  MonitorSmartphone,
  TerminalSquare,
} from "lucide-react";

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: MonitorSmartphone,
    title: "Responsive",
    description:
      "This theme will look great on any device, no matter the size!",
  },
  {
    id: 2,
    icon: CircuitBoard,
    title: "Libraries",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    id: 3,
    icon: TerminalSquare,
    title: "Easy to Use",
    description:
      "Ready to use with your own content, or customize the source files!",
  },
];

function ServiceItem({ icon: Icon, title, description }: Service) {
  return (
    <li className="flex flex-col items-center gap-2 text-center max-w-sm">
      {/* Icon */}
      <Icon className="text-[#0d6efd] w-[85px] h-[85px]" />

      {/* Title */}
      <h3 className="text-2xl font-bold">{title}</h3>

      {/* Description */}
      <p className="text-lg">{description}</p>
    </li>
  );
}

const Service = () => {
  return (
    <section className="bg-[#f8f9fa]">
      <div className="container">
        <ul className="flex flex-col lg:flex-row py-20 gap-12 lg:gap-5 items-center justify-between">
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
