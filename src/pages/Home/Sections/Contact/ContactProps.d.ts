import { Translator } from "../../../../i18n";
import {SetStateAction  } from "react";

export default interface ContactProps {
  t: Translator,
  setOpenLoadingContent: (value: SetStateAction<boolean>) => void,
};