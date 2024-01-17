import { LoaderIcon } from 'lucide-react';

export default function Loader({ loading }: { loading: boolean }) {
    return (
        <div className="fixed top-6 right-6">
            {loading && (
                <div className="flex items-center justify-center">
                    <LoaderIcon className="w-6 h-6 animate-spin" />
                </div>
            )}
        </div>
    );
}
