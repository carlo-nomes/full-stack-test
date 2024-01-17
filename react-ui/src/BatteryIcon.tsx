import { BatteryFull, BatteryLow, BatteryMedium } from 'lucide-react';

export default function BatteryIcon({ priority }: { priority: string }) {
    const getBatteryIcon = () => {
        switch (priority) {
            case 'low':
                return <BatteryLow />;
            case 'medium':
                return <BatteryMedium />;
            case 'high':
                return <BatteryFull />;
            default:
                return <span>Invalid priority</span>;
        }
    };

    return <div>{getBatteryIcon()}</div>;
}
