import type { MobileMode } from '@/types/navbar';

export const MOBILE_POSITIONS: Record<MobileMode, string> = {
    left: 'left-0 top-0 h-full -translate-x-full',
    right: 'right-0 top-0 h-full translate-x-[80%]',
    top: 'top-0 left-0 w-full -translate-y-full',
    bottom: 'bottom-0 left-0 w-full translate-y-[10em]',
};

export const getActiveTransform = (mode: MobileMode) => {
    return mode === 'left' || mode === 'right'
        ? 'translate-x-0'
        : 'translate-y-0';
};
