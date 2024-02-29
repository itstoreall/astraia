import { breakpointNames } from '../config';
import * as vars from '@/styles/vars';

export const setIsMobile = (width: number) =>
  width >= vars.tablet ? false : true;

export const setBreakpoint = (width: number) =>
  width < vars.mobile
    ? breakpointNames.less
    : width >= vars.mobile && width < vars.tablet
    ? breakpointNames.mobile
    : width >= vars.tablet && width < vars.desktop
    ? breakpointNames.tablet
    : width >= vars.desktop && width < vars.max
    ? breakpointNames.desktop
    : breakpointNames.max;
