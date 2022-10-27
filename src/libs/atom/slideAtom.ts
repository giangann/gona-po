import { atom } from "jotai";
import { DEFAULT_INDEX } from "~/constants/form";

const activeHompageSlideAtom = atom(DEFAULT_INDEX);
const displayBackdropAtom = atom(false);
const useSlideForm = atom(false)
export { activeHompageSlideAtom, displayBackdropAtom, useSlideForm };
