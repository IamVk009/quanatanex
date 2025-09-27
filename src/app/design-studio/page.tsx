import ComingSoon from '@/components/shared/ComingSoon';

export const metadata = {
  title: 'Design Studio | QuantaNex - Custom Electronics Solutions',
  description: 'Coming Soon: Our interactive circuit design and simulation platform. Design, simulate, and test your circuits online.',
};

const features = [
  {
    icon: '🔧',
    title: 'Circuit Simulator',
    description: 'Advanced SPICE-based circuit simulation with real-time analysis and visualization tools.',
  },
  {
    icon: '📐',
    title: 'Schematic Editor',
    description: 'Professional schematic capture with extensive component libraries and design rule checking.',
  },
  {
    icon: '🎯',
    title: 'PCB Layout',
    description: 'Integrated PCB layout tools with auto-routing and 3D visualization capabilities.',
  },
];

export default function DesignStudioPage() {
  return (
    <ComingSoon
      title="Design Studio"
      description="Our interactive circuit design and simulation platform is coming soon! Design, simulate, and test your circuits online with our advanced tools."
      features={features}
    />
  );
}