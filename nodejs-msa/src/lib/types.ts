export const priorities = ['high', 'medium', 'low'] as const;

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    priority: typeof priorities[number];
};
