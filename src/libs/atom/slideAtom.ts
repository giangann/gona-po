import { atom } from "jotai";
import { DEFAULT_INDEX } from "~/constants/form";

const activeHompageSlideAtom = atom(DEFAULT_INDEX);
const displayBackdropAtom = atom(true);
const displayLayerHeader = atom(true);
export { activeHompageSlideAtom, displayBackdropAtom, displayLayerHeader };
